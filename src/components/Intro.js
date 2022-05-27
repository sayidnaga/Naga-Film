import { Row, Container, Col, Button } from 'react-bootstrap';

const intro = () => {
    return (
        <div className=' intro'>
            <Container className="text-white text-center d-flex justify-content-center align-items-center ">
              <Row>
                <Col>
                  <div className='title'>Cuma Ada Sinopsis Saja YGY</div>
                  <div className='title'>Button dibawah cuma hiasan</div>
                  <div className="introButton mt-4 text-center">
                      <Button variant="dark">Lihat Semua List</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
    )
}

export default intro