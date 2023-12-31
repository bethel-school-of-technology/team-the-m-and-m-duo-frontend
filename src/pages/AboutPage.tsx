import { Card, Col, Container, Image, Row } from "react-bootstrap";
import './AboutPage.css';

function About() {

    return (
        <>
            <Card className="cardAbout">
            
            <Container>
                <Row className="justify-content-md-center">

                <Col className="p-2" sm="12" md="9" lg="6" xl="5">
                    <Image
                        className="img"
                        src="/images/about.jpg"
                        alt="about-me"
                    fluid
                    />

                </Col>
                <Col className="p-2" sm="12" xl="7" >
                <h1 className="aboutTitle">ABOUT US</h1>
                    <h5><img
                alt="logo"
                src='/images/logos/logo.png'
                width="25"
                height="25"
            /> We are a mobile interior detailing business.</h5>
                    <h5><img
                alt="logo"
                src='/images/logos/logo.png'
                width="25"
                height="25"
            /> We specialize in the interiors of cars as well as watercrafts. We strive to provide every customer with a fair dinkum experience!</h5>
                    <h5><img
                alt="logo"
                src='/images/logos/logo.png'
                width="25"
                height="25"
            /> Our process, the basic detailing: We start by removing the mats as well as any personal items within the vehicle. After cleaning the mats, we then vacuum out the entire interior of the vehicle. We clean the vinyl and leather with Meguiars all-purpose cleaner. With a detailing brush, we carefully clean the buttons, handles, lights, and door jams. Next, we clean the glass with Meguiars glass cleaner. Finally, we vacuum the interior one more time picking up anything we may have missed, and return the mats to the vehicle. The basic detailing is complete.</h5>

                </Col>
                </Row>
            </Container>
            </Card>
        </>
    )
}

export default About;