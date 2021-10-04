import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';


const NewsLetter = () => {
    return (
        <div className='p-3 text-center my-5'>
            <h2>NEWSLETTER</h2>
            <p className='text-center text-justify'>Subscribe now <br /> and receive weekly newsletter with educational materials, new
                courses, interesting posts, popular books <br /> and much more!</p>

            <form className='p-3 text-center'>
                <InputGroup className="mb-3 w-50 mx-auto">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <input type="submit" value="Submit" className='btn btn-outline-dark ms-1' />
                </InputGroup>

            </form>

        </div>
    );
};

export default NewsLetter;