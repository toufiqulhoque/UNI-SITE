import React from 'react';
import '../About/About.css'

const About = () => {
    return (
        <div className='container my-5 '>

            <div>
                <div className='align-item-center m-auto '>
                    <h2>How it all started</h2>
                    <p className='about-p'>Back in 2010, our founder had just graduated from secondary school and started studying for his A-levels. Frustrated by the complexity and combination of learning platforms, intranets and paper planners, My Study Life was born.</p>
                </div>
                <img className='about-image' src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>

            <h2 className='my-5'>The story</h2>
            <p className='about-p'>Back in 2010, our founder Jamie Clarke had just graduated from secondary school and started studying for his A-levels. He quickly became frustrated by the complexity and number of the learning platforms and intranets in use. They didn’t work well together and paper planners were still being issued to keep track of homework and coursework. Jamie knew there must be a better way.

                With a good few years of bedroom coding behind him, in October 2010 Jamie decided to create something that he could use on a daily basis to keep track of his classes and assignments ultimately replacing the need for a paper planner. He knew the solution needed to be a simple, easy to use app that would allow him to keep track of his classes and assignments more effectively. A few months later, in early 2011, the first version of My Study Life was launched on Windows Phone.

                From use of the app first-hand, Jamie understood that it would offer a better experience if he could use it wherever and whenever he needed it; such as being able to add an assignment in class and have it available on his computer when he got home. So, a year after first starting development of My Study Life, the web app was launched and soon followed by apps for Windows 8 and Android.

                As My Study Life’s popularity and positive feedback from students and teachers continued to grow, Jamie took the decision to leave his job as a software engineer to focus on My Study Life full-time.

                Today the app works across all popular platforms and the team at My Study Life remain focused on ensuring that all students have a simple, easy to use solution to organise all of their classes, tasks and exams as well as adding new functionality for teachers and schools.</p>
        </div>
    );
};

export default About;