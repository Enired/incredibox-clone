import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

//All sounds from sounds public folder
import {sounds} from '../public/sounds/index'


export default function Home() {
  const [activeCount, setActiveCount] = useState(0)
  return (
  
    <div className='flex flex-wrap w-1/4 max-h-60 content-center justify-center'>
      {sounds.map((sound, index)=>{
        return(
          <BeatButton
            sound={sound}
            label={`Button ${index}`}
            activeCountState={{count:activeCount, set:setActiveCount}}
          />
        )
      })}
    </div>
  )
}
