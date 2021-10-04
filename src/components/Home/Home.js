import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Courses from '../Courses/Courses';
import '../Home/Home.css'
import NewsLetter from '../Newsletter/Newsletter';
import Trending from '../Trending/Trending';

const Home = () => {
    const [studies, setStudies] = useState([])
    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setStudies(data))
    }, [])
    return (
        <div>
            <div class="hero">
                <h1>Study Hard<span>- Grow-Big-</span></h1>
            </div>

            <div className='container-fluid'>
                <h2 className='text-center my-4'>Trending Courses</h2>
                <Row xs={1} md={4} className="g-3">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        studies.slice(0, 4).map(study => <Trending
                            key={study.id}
                            study={study}
                        ></Trending>)
                    ))
                    }
                </Row>
            </div>
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;