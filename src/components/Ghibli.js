import { Card, Container, Row, Col, Image } from "react-bootstrap"
import graveImage from "../assets/images/Ghibli/grave.jpg"
import howlImage from "../assets/images/Ghibli/howl.jpg"
import kikiImage from "../assets/images/Ghibli/kiki.jpg"
import mononokeImage from "../assets/images/Ghibli/mononoke.jpg"
import ponyoImage from "../assets/images/Ghibli/ponyo.jpg"
import spiritedImage from "../assets/images/Ghibli/spirited.jpg"
import totoroImage from "../assets/images/Ghibli/totoro.png"
import whisperImage from "../assets/images/Ghibli/whisper.png"
import windImage from "../assets/images/Ghibli/wind.jpg"

const Ghibli = () => {
    return(
        <div>
            <Container>
                <br />  
                <h1 className="Text-white">Ghibi Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="moviWrapper" id="ghibli">
                        <Card className="text-center movieImage">
                            <Image src={graveImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Grave of the Fireflies</Card.Title>
                                        <Card.Text className="text-left">
                                        A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 29min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={howlImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Howl's Moving Castle</Card.Title>
                                        <Card.Text className="text-left">
                                        Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 59min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={kikiImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Kiki's Delivery Services</Card.Title>
                                        <Card.Text className="text-left">
                                        In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition 
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 42min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={mononokeImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Princess Mononoke</Card.Title>
                                        <Card.Text className="text-left">
                                        In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka -
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        2h 13min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={ponyoImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Ponyo</Card.Title>
                                        <Card.Text className="text-left">
                                        Sosuke rescues a goldfish trapped in a bottle. The goldfish, who is the daughter of a wizard, transforms herself into a young girl with her father's magic
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 55min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={spiritedImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Spirited Away</Card.Title>
                                        <Card.Text className="text-left">
                                        Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        2h 5min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={totoroImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">My Neighbor Totoro</Card.Title>
                                        <Card.Text className="text-left">
                                        Mei and Satsuki shift to a new house to be closer to their mother who is in the hospital. They soon become friends with Totoro, a giant rabbit-like creature who is
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 26min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={whisperImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Whisper of the Heart</Card.Title>
                                        <Card.Text className="text-left">
                                        Shizuku, an aspiring writer, meets Seiji, a boy who wants to become a master luthier. The two fall in love and work simultaneously towards achieving their
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        1h 51min
                                        </Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="moviWrapper">
                        <Card className="text-center movieImage">
                            <Image src={windImage} alt="Grave Movies" className="images"/>
                                <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">The Wind Rises</Card.Title>
                                        <Card.Text className="text-left">
                                        Unable to pursue his dream of becoming a pilot due to his eyesight, Jiro strives hard and draws inspiration from Giovanni Caproni. Soon, he builds two fighter
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                        2h 6min
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

export default Ghibli
