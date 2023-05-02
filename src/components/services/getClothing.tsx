import { collection, DocumentData, DocumentReference, getDocs, query, Query, QueryDocumentSnapshot, setDoc, SnapshotOptions, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";
import { doc, getDoc} from "firebase/firestore";
import {IClothingItem} from '../interfaces/clothingitem'
import { DatabaseCollections } from "../constants/databaseconstants";

const LinkedConverter = {
  toFirestore: (clothingItem: IClothingItem) => {
    return {
      name: clothingItem.name,
      description: clothingItem.description,
      quantity: clothingItem.quantity,
      price: clothingItem.price,
      imageLink: clothingItem.imageLink,
      size: clothingItem.size,
      currentDimensions: clothingItem.currentDimensions,
      active: clothingItem.active,
    };
  },
  fromFirestore: (snapshot: any) => {
    const data = snapshot.data();
    const clothingItem: IClothingItem = {
      name: data.name,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      imageLink: data.imageLink,
      size: data.size,
      currentDimensions: data.currentDimensions,
      active: data.active,
    };
    return clothingItem;
  },
};

export const getClothing = async (user: any, name: string): Promise<IClothingItem | null> => {
  const ClothingConst: string = DatabaseCollections[DatabaseCollections.ClothingItem];
  if (user.uid != null) {
    const colRef = collection(db, ClothingConst);
    const clothingItemQuery = query(colRef, where("active", "==", true));

    const querySnapshot = await getDocs(clothingItemQuery);

    if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            return LinkedConverter.fromFirestore(doc);
        });
    }
  }
  return null;
};


export const getAllClothing = async (user: any): Promise<IClothingItem[]> => {
    const ClothingConst: string = DatabaseCollections[DatabaseCollections.ClothingItem];
    const colRef = collection(db, ClothingConst);
    const docsSnap = await getDocs(colRef);
  
    const clothingItems: IClothingItem[] = docsSnap.docs.map((doc) => {
      const data = doc.data();
      const clothingItem: IClothingItem = {
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        imageLink: data.imageLink,
        size: data.size,
        currentDimensions: data.currentDimensions,
        active: data.active,
      };
      return clothingItem;
    });
  
    return clothingItems;
  };