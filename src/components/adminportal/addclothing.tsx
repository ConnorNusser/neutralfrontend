import { useSession } from "next-auth/react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
export const AddClothing = () => {
    const addClothingLink = 'https://images.herzindagi.info/image/2021/Sep/unisex-fashion-and-gender-roles_g.jpg';
    const { data: session } = useSession();
    return (
        <Card style={{ width: '18rem' }}>
      <Image
              src={addClothingLink}
              width={400}
              height={400}
              alt="An Cute Image to Add a product"
            />
      <Card.Body>
        <Card.Title>Add New Clothing Item</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    )
  }