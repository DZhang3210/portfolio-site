'use client'
import React, { useState } from 'react'
import { FlipWords } from '../ui/flip-words'
import {motion} from 'framer-motion'

const Hero = () => {
  const [title, setTitle] = useState(0)
  const words = ['Frontend Developer', 'Backend Developer', 'Fullstack Engineer']
  return (
    <div>
        <div className='text-8xl sm:text-9xl'>
        David Zhang 
        </div>
        <motion.div 
            className='text-5xl sm:text-6xl'
            initial = {{y:10, opacity:0}}
            animate = {{y:0, opacity:1,transition:{delay:0.4, duration:0.2}}}
        >
            {/* <FlipWords words={words} />  */}
            Frontend Engineer
        </motion.div>
    </div>
  )
}

export default Hero
