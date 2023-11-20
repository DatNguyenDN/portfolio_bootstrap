import { Container,Row,Col } from "react-bootstrap";
import {MailchimpForm} from '../MailchimpForm/MailchimpForm'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import './Footer.css'

import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Footer = () => {
    return(
        <TrackVisibility>
        {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeInUpBig animate__delay-0.5s" : ""}>

            <footer className="footer">
                <Container>
                    <Row className="align-item-center">
                        <MailchimpForm/>
                        <Col sm={6}>
                            <img src={logo} alt="logo"/>
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href="/"><img src={navIcon1}/></a>
                                <a href="/"><img src={navIcon2}/></a>
                                <a href="/"><img src={navIcon3}/></a>
                            </div>
                            <p>CopyRight 2023. All Right Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            </div>}
        </TrackVisibility>
    )
}