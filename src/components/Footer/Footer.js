import React from 'react';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='backGround'>
            <Container className='allFooter'>
                <Row md={4}>
                    <Col className='icon my-auto' >
                        <div className='icon-style'><FaFacebook /></div>
                        <div className='icon-style'><FaYoutube /></div>
                        <div className='icon-style'><FaTwitter /></div>
                        <div className='icon-style'><FaLinkedin /></div>
                        <div className='icon-style'><FaGithub /></div>


                    </Col>
                    <Col className='footer-margin'>
                        <div className='footer-top'>Quick Links</div>
                        <div><small>Homepage</small></div>
                        <div><small>About Uni</small></div>
                        <div><small>Administration</small></div>
                        <div><small>Mentor</small></div>
                        <div><small>News</small></div>
                    </Col>
                    <Col className='footer-margin'>
                        <div className='footer-top'>Information</div>
                        <div><small>Admissions</small></div>
                        <div><small>Academic Calendar</small></div>
                        <div><small>Timetable</small></div>
                        <div><small>Donations</small></div>
                        <div><small>FAQ</small></div>

                    </Col>
                    <Col className='footer-margin' >
                        <div className='footer-top'>Uni</div>
                        <div><small>Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer</small></div>
                        <div><FontAwesomeIcon className='footer' icon={faMapMarkerAlt} /><small>Halishahr k-block,Chittagong,Bangladesh</small></div>
                        <div><FontAwesomeIcon className='footer' icon={faPhoneAlt} /><small>01777112211</small></div>
                        <div><FontAwesomeIcon className='footer' icon={faEnvelope} /><small>support@uni.com</small></div>
                        <div><FontAwesomeIcon className='footer' icon={faClock} /><small>Mon - Sat: 9am - 6pm</small></div>
                    </Col>
                </Row>
                <small className="text-center mt-3 text-muted"><small>E-ducate® All Rights Reserved,2021</small></small>
            </Container>
        </div>
    );
};

export default Footer;