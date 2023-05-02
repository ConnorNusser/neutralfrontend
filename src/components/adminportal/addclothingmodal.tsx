import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

/*
name: string,
    description: string,
    quantity: string,
    price: number,
    imageLink?: string,
    size: string[],
    currentDimensions: string[],
*/
export default function AddClothingModal() {
  const [show, setShow] = useState(true);
  const [itemName, setItemName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0.00);
  const [imageLink, setImageLink] = useState<any>(null);
  const [size, setSize] = useState<string[]>([]);
  
  const [reset, setReset] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const saveData = () => {
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Clothing Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ItemNameControl">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                    type="string"
                    placeholder="Linen T-Shirt"
                    value = {itemName}
                    onChange={(e) => setItemName(e.currentTarget.value)}
                    />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ItemNameControl">
                    <Form.Label>quantity</Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="ex: 3"
                    value = {quantity}
                    onChange={(e) => setQuantity(Number(e.currentTarget.value))}
                    />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ItemNameControl">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="ex. 5.00"
                    value = {price}
                    onChange={(e) => setPrice(Number(e.currentTarget.value))}
                    />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ItemNameControl">
                    <Form.Label>Item Link</Form.Label>
                    <UploadImage  reduc={reset}/>
                    <Button onClick={() => setReset(!reset)}>Reset</Button>
          </Form.Group>
          <Form.Group
              className="mb-3"
              controlId="DescriptionControl"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} 
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const UploadImage = ({reduc}: {reduc: boolean}) => {
    const [red, setRed] = useState<boolean>(reduc);
    const [image,setImage]=useState<File>(new File([""], "imageName"));
    
    const handleChange=(e: any)=>{
        const data=e.target.files[0]
        setImage(data);
    }
    return (
        <div>
             <input type="file" onChange={handleChange}/>   
              {image &&
                
                  <div> 
                      <span>{image.name}</span>
                      <img src={URL.createObjectURL(image)}/>
      </div>  
      }         
        </div>
    )
}


