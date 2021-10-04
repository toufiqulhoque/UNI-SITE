import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feature from '../Feature/Feature';



const Features = () => {
    const [studies, setStudies] = useState([])
    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setStudies(data))
    }, [])
    return (
        <div className='mt-5 p-5'>
            <h2>Featured Content</h2>

            <div className='container p-5'>
                {
                    studies.slice(0, 6).map(study => <Feature
                        key={study.id}
                        study={study}
                    ></Feature>)
                }
            </div>


        </div>
    );
};

export default Features;