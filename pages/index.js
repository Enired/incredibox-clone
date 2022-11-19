import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { ControlButton } from '../components/ControlButton';

//All sounds from sounds public folder
import {sounds} from '../public/sounds/index'


export default function Home() {
  const [activeCount, setActiveCount] = useState(0)
  const [allStop, setAllStop] = useState(0)

  const allStopFunction = () =>{
    console.log('Stop button clicked')
    setAllStop(allStop+1)
  }

  return (
    <div className={styles.container}>
      {sounds.map((sound, index)=>{
        return(
          <BeatButton
            key={index}
            sound={sound}
            label={`Button ${index}`}
            activeState={{count:activeCount, setCount:setActiveCount}}
            allStop={allStop}
          />
        )
      })}
      <ControlButton 
        label={'STOP'}
        onClick={allStopFunction}
      />
    </div>
  )
}
