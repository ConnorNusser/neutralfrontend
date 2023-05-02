import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import ClothingCard from '@/components/shop/clothingcard'
import { Card } from '@mui/material'
import { Key } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Rowing } from '@mui/icons-material'

const inter = Inter({ subsets: ['latin'] })
const items = []
export default function Shop() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <ItemsList/>
    </main>
  )
}

const Item = ({ props } : {props: any}) => {
    return <Col><ClothingCard/></Col>;
  };
  
  const ItemsList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];
    const rows = [];
  
    // Divide items into rows of 3
    for (let i = 0; i < items.length; i += 3) {
      rows.push(items.slice(i, i + 3));
    }
  
    return (
      <div className="items-list" >
        {rows.map((row, index) => (
          <Row key={index} >
            {row.map((item: any, index: Key | null | undefined) => (
              <Item key={index} props={item} />
            ))}
          </Row>
        ))}
      </div>
    );
  };