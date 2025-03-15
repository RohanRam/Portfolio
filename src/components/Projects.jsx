import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { thumb } from '../assets/prothumb';
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from './Card';

function Projects() {


    return (

        <div className='p-3'>
            <h3>Projects</h3>

           <div className='card-sec'>
           <Card/>
           </div>



        </div>
    );
}


export default Projects;





