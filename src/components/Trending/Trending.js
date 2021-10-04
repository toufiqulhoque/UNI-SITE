import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Trending = (props) => {
    const { course_name, course_description, image, mentor, mentor_email, schedule } = props.study;
    return (

        <Col md={3}>
            <Card className='h-100' >
                <Card.Img variant="top" src={image} height='300' />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        <p className='fs-6'>
                            <small className='text-muted'>By:</small> {mentor}  <br />
                            <small className='text-muted'>Starts from:</small> {schedule}  <br />
                            <small className='text-muted'>Mentor Email:</small> {mentor_email}  <br />
                        </p>
                        <p>{course_description}</p> <br />
                        <button className='my-button btn-dark mt-3 p-3 container'>Click to enroll</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Trending;