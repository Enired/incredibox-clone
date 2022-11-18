import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'

//All sounds from sounds public folder
import {sounds} from '../public/sounds/index'

export default function Home() {
  return (
    <div className={styles.container}>
      {sounds.map((sound, index)=>{
        return(
          <BeatButton
        
            sound={sound}
            label={`Button ${index}`}
          />
        )
      })}
    </div>
  )
}
