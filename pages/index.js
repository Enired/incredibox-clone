import Head from 'next/head';
import Image from 'next/image';
import { BeatButton } from '../components/BeatButton';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

//All sounds from sounds public folder
import { sounds } from '../public/sounds/index';
import { ControlButton } from '../components/ControlButton';


export default function Home() {
  const [activeCount, setActiveCount] = useState(0);
  const [allStop, setAllStop] = useState(0);

  const allStopFn = () => {
    setAllStop(allStop + 1);
  };

  const screenshot = () => {
    html2canvas(document.body).then(function (canvas) {
      // document.body.appendChild(canvas);
      var dataURL = canvas.toDataURL("image/png");
      const link = document.createElement('a')
      link.href = dataURL
      link.setAttribute('download', 'Incredibox-Deck-Pic.png')

      link.click()
      // link.parentNode.removeChild(link)

      // var newTab = window.open('about:blank', 'image from canvas');
      // newTab.document.write("<a href='" + dataURL + "'download>Download your deck pic</a>");
      return;
    });

  };

  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='flex text-white text-xl border-solid border w-1/4 p-20 m-2 justify-center'>The Clone Box</h1>
      <div id='sound-deck' className='flex flex-wrap bg-zinc-900 border-zinc-500 border-double border-2 w-1/4 h-fit content-center justify-center'>
        {sounds.map((sound, index) => {
          return (
            <BeatButton
              key={index}
              sound={sound}
              label={`Button ${index}`}
              activeCountState={{ count: activeCount, setCount: setActiveCount }}
              allStop={allStop}
            />
          );
        })}
      </div>

      <div className='flex w-1/4 m-2'>

        <ControlButton
          label={'STOP'}
          onClick={allStopFn}
        />

        <ControlButton
          label={'Screenshot'}
          onClick={screenshot}
        />
      </div>

    </div>

  );
}
