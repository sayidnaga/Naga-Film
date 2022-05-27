import { Card, Container, Row, Col, Image } from "react-bootstrap"
import cmImage from "../assets/images/Makotoshinkai/cm.jpg"
import gardenImage from "../assets/images/Makotoshinkai/garden.jpg"
import kimiImage from "../assets/images/Makotoshinkai/kimi.jpg"
import suzumeImage from "../assets/images/Makotoshinkai/suzume.jpg"
import voiceImage from "../assets/images/Makotoshinkai/voice.jpg"
import weatheringImage from "../assets/images/Makotoshinkai/weathering.jpg"


const Makoto = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="Text-white">Makoto Shinkai Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="makoto">
                        <Card className="text-center movieImage">
                            <Image src={cmImage} alt="Grave Movies" className="images" link=""/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Byousoku 5 centimeter</Card.Title>
                                        <Card.Text className="text-left">
                                        Takaki and Akari are in elementary school and over time become best friends. Their friendship is put to the test when Akari has to move to another city.
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 3min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={gardenImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Koto no Ha no Niwa</Card.Title>
                                        <Card.Text className="text-left">
                                        When a lonely teenager decides to miss his morning lessons in favour of sitting in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation.
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        46 min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={kimiImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Kimi no Nawa</Card.Title>
                                        <Card.Text className="text-left">
                                        Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 52min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={suzumeImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Suzume no Tojimari</Card.Title>
                                        <Card.Text className="text-left">
                                        Suzume no Tojimari adalah film animasi Jepang mendatang yang diproduksi oleh CoMix Wave Films dan ditulis serta disutradarai oleh Makoto Shinkai. Film ini menampilkan desain karakter oleh Masayoshi</Card.Text>
                                        <Card.Text className="text-left">
                                        Comming Soon
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={voiceImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Voices of Dinstance Star</Card.Title>
                                        <Card.Text className="text-left">
                                        Voices of a Distant Star is a Japanese science fiction original video animation short film created and animated by Makoto Shinkai. It follows the lives of two close childhood friends, a boy and a girl, who get separated</Card.Text>
                                        <Card.Text className="text-left">
                                        25 min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={weatheringImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Tenki no Ko</Card.Title>
                                        <Card.Text className="text-left">
                                        Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.   </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 51m
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
          
        </div>
    )
}

export default Makoto