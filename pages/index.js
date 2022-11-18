import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <BeatButton
        label = 'button 1'
        sound = {'/sounds/19_haha_a.ogg'}
        />
      <BeatButton
        label = 'button 2'
        sound = {'/sounds/3_kanye_a.ogg'}
      />
    </div>
  )
}
