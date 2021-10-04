
import React from 'react';
import { Card } from 'react-bootstrap';
import '../Feature/Feature'
import '../Feature/Feature.css'

const Feature = (props) => {
    const { course_name, course_description, image, mentor, schedule } = props.study;
    return (

        <Card className="text-center h-100 mt-4 p-5 m-5">
            <Card.Body className='d-flex'>
                <Card.Img className='feature-img' variant="top" src={image} height='400' />

                <Card.Text className='p-5 m-5'>
                    <Card.Title className="mt-5">{course_name}</Card.Title>
                    <small className='text-muted my-4'>By:</small> {mentor}  <br />
                    {course_description}  most complete,Absolutely fantastic tutorial series. and most up-to-date resource online for learning React and Redux!! <br />
                    <button className='my-button btn-dark mt-3 p-1'>Read More</button>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">{schedule}</Card.Footer>
        </Card>

    );
};

export default Feature;