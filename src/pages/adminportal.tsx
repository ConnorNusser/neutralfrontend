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
  Box,
  SimpleGrid,
  Icon,
  useColorModeValue,
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
    </main>
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