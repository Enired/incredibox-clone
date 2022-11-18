import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'
import {sounds} from '../public/sounds/index'
export default function Home() {

  console.log('/sounds/*.ogg')


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
      {/* <BeatButton
        label = 'button 1'
        sound = {'/sounds/19_haha_a.ogg'}
        />
      <BeatButton
        label = 'button 2'
        sound = {soundThree}
      /> */}
    </div>
  )
}
