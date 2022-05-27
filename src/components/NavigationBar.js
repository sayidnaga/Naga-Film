import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="https://www.instagram.com/by.naga/">by.naga</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#ghibli">Ghibli Studio</Nav.Link>
                        <Nav.Link href="#makoto">Makoto Shinkai</Nav.Link>
                    </Nav>           
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar