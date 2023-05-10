import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })
import {
  Text,
  ChakraProvider,
  Heading,
  Box,
  Button,
  Stack,
} from '@chakra-ui/react'
export default function Home() {
  return (
    <ChakraProvider>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Heading
        mb={6}
        fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{ base: "normal", md: "tight" }}
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        Welcome to{" "}
        <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
        >
          Neutral!
        </Text>{" "}
      </Heading>
      <Text fontSize='2xl'>
      The way to find the {" "}  
      <Text
          display="inline"
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, purple.400, blue.500)"
          fontWeight="extrabold"
          fontSize='2xl'
        >
        best fitting clothing period.
      </Text>
      </Text>
      <Stack spacing={4} direction='row' align='center'>
        <Button size='lg' colorScheme='purple'>Login</Button>
        <Button size='lg' colorScheme='messenger'>Getting Started</Button>
      </Stack>
      <Box>
        <Text fontSize='md'>
          You can also check us out on! 
        </Text>
        <Stack spacing={4} direction='row' align='center'>
        <Button colorScheme='purple' variant='outline' size='lg'>Tiktok{" "}<BsTiktok/></Button>
        <Button colorScheme='blue' variant='outline' size='lg'>Instagram{" "}<AiFillInstagram/></Button>
        <Button colorScheme='facebook' variant='outline' size='lg'>Facebook{" "}<AiFillFacebook/></Button>
        </Stack>
      </Box>
        
    </main>
    </ChakraProvider>
  )
}
