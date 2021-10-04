import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';

const Courses = () => {
    const [studies, setStudies] = useState([])
    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setStudies(data))
    }, [])
    return (
        <div className='container-fluid'>
            <h2 className='text-center my-4'>Courses Available Right Now</h2>
            <Row xs={1} md={4} className="g-3">
                {Array.from({ length: 1 }).map((_, idx) => (
                    studies.map(study => <Course
                        key={study.id}
                        study={study}
                    ></Course>)
                ))
                }
            </Row>
        </div>
    );
};

export default Courses;