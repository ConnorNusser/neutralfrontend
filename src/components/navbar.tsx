import Link from 'next/link'
import {Button, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSession, signIn, signOut } from "next-auth/react"
const NavbarComponent = () => {
  const { data: session } = useSession();
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Link href="/" passHref>
      <Navbar.Brand className="me-3"><Button variant='primary'>Nëutral</Button></Navbar.Brand>
      </Link>
      <Link href='/adminportal'><Button variant='light'>Admin Portal</Button></Link>
      <Nav className="me-3">
        <Link href="/shop" passHref>
        <Button variant='primary'>Shop</Button>
        </Link>
        <div className='me-4'/>
        <Link href="/reporting" passHref>
          <Button variant="primary">Trending</Button>
        </Link>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
            <LoginComponent/>
        </Nav>
    </Nav>
    </Container>
  </Navbar>
  );
}

const LoginComponent = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button onClick={() => signOut()}>Welcome {session.user?.name} Sign out</Button>
    );
  }
  return (
    <Button onClick={() => signIn()}>Sign in</Button>
  );
}
export default NavbarComponent;