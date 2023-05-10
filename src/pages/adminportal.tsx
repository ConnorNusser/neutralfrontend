import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import { AddClothing } from '@/components/adminportal/addclothing'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Icon,
  useColorModeValue,
  ChakraProvider,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Input,
  Button
} from '@chakra-ui/react'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Row, Col } from 'react-bootstrap'
import MiniStatistics from '../components/chakra/ministatistics';
import IconBox from '../components/chakra/icons/IconBox';
import { Heading } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function AdminPortal() {
  return (
    <ChakraProvider>
    <main
      className={`flex flex-col items-center justify-between`}
    >
      <Heading style={{paddingTop:'2rem', paddingBottom: '2rem'}}>Admin Dashboard</Heading>
      <div style={{paddingTop:'2rem', paddingBottom: '2rem'}}>
      <RevenueComponent/>
      </div>
      <Row>
      <Col>
      <AddClothing/>
      </Col>
      <Col>
      <StatComponent/>
      </Col>
      </Row>
      <div style={{paddingTop:'2rem', paddingBottom:'2rem'}}></div>
      <AdminTable/>
    </main>
    </ChakraProvider>
  )
}

const StatComponent =() => {
  return (
    <Card style={{minWidth:'36rem'}}>
      <CardHeader>Visitor Information</CardHeader>
      <CardBody>
    <StatGroup>
    <Stat>
      <StatLabel>Unique Visits</StatLabel>
      <StatNumber>345,670</StatNumber>
      <StatHelpText>
        <StatArrow type='increase' />
        23.36%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Users this Month</StatLabel>
      <StatNumber>45</StatNumber>
      <StatHelpText>
        <StatArrow type='decrease' />
        9.05%
      </StatHelpText>
    </Stat>
  </StatGroup>
  </CardBody>
  </Card>
  )

}

const RevenueComponent = () => {
  const brandColor = useColorModeValue("brand.500", "blue");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return(
  <Row>
    <Col>
      <Card style={{minWidth:'12rem', alignItems:'center'}}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value='$350.4'
        />
        </Card>
        </Col>
        <Col>
        <Card style={{minWidth:'18rem', alignItems:'center'}}>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        </Card>
        </Col>
        <Col>
        <Card style={{minWidth:'24rem', alignItems:'center', }}>
        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />
        </Card>
        </Col>
      </Row>
      )
  }
      const AdminTable = () => {
        return (
          <div>
            <Input
    placeholder='Search for clothing items...'
  />
  <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    <TableCaption>Clothing Items</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Quantity</Th>
        <Th isNumeric>Price</Th>
        <Th>Active</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Linen T-Shirt</Td>
        <Td>2</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>Yes</Td>
        <Td><Button>View More Details</Button></Td>
        <Td><Button colorScheme='messenger'>Edit Info</Button></Td>
      </Tr>
      <Tr>
        <Td>Cashmere Sweater - Embossa</Td>
        <Td>3</Td>
        <Td isNumeric>30.48</Td>
        <Td isNumeric>Yes</Td>
        <Td><Button>View More Details</Button></Td>
        <Td><Button colorScheme='messenger'>Edit Info</Button></Td>
      </Tr>
      <Tr>
        <Td>Cashmere Sweater</Td>
        <Td>4</Td>
        <Td isNumeric>0.91444</Td>
        <Td isNumeric>No</Td>
        <Td><Button>View More Details</Button></Td>
        <Td><Button colorScheme='messenger'>Edit Info</Button></Td>
      </Tr>
      <AdminTableDataRow />
    </Tbody>
    <Tfoot style={{alignItems:'center', display:'inline-flex'}}>
      <Button colorScheme='blue'>Previous</Button>
      <Button colorScheme='blue'>Next</Button>
    </Tfoot>
  </Table>
</TableContainer>
</div>
        )
      }

const AdminTableDataRow = (props? : any) => {
  return (
    <Tr>
        <Td>{props.name}</Td>
        <Td>{props.quantity}</Td>
        <Td isNumeric>{props.price}</Td>
        <Td isNumeric>{props.IsActive}</Td>
        <Td><Button>View More Details</Button></Td>
        <Td><Button colorScheme='messenger'>Edit Info</Button></Td>
      </Tr>
  )

}