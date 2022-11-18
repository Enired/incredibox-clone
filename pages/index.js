import Head from 'next/head'
import Image from 'next/image'
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <BeatButton/>
    </div>
  )
}
