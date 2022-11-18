import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

//All sounds from sounds public folder
import {sounds} from '../public/sounds/index'


export default function Home() {
  const [activeCount, setActiveCount] = useState(0)
  // useEffect(()=>{
  //   console.log('yo')
    
  // },[activeCount])
  return (
    <div className={styles.container}>
      {sounds.map((sound, index)=>{
        return(
          <BeatButton
            sound={sound}
            label={`Button ${index}`}
            activeCount={activeCount}
            setActiveCount={setActiveCount}
          />
        )
      })}
    </div>
  )
}
