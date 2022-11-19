import Head from 'next/head';
import Image from 'next/image';
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

//All sounds from sounds public folder
import { sounds } from '../public/sounds/index';
import { ControlButton } from '../components/ControlButton';


export default function Home() {
  const [activeCount, setActiveCount] = useState(0);
  const [allStop, setAllStop] = useState(0);

  const allStopFn = () => {
    setAllStop(allStop + 1);
  };
  return (

    <div className='flex flex-wrap bg-zinc-900 border-zinc-500 border-double border-2 w-1/4 h-fit content-center justify-center'>
      {sounds.map((sound, index) => {
        return (
          <BeatButton
            sound={sound}
            label={`Button ${index}`}
            activeCountState={{ count: activeCount, setCount: setActiveCount }}
            allStop={allStop}
          />
        );
      })}

      <ControlButton
        label={'STOP'}
        onClick={allStopFn}
      />
    </div>
  );
}
