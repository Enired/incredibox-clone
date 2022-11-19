import { useState } from "react";
import useSound from 'use-sound';
import classNames from "classnames";


export const BeatButton = (props) => {
  const sound = props.sound; //change to props.sound
  const icon = '/images/test.gif'; // change to props.icon
  const label = props.label;
  const activeCountState = props.activeCountState;
  // const setActiveCount = props.setActiveCount;

  const [play, exposedData] = useSound(sound, { loop: true });
  const [playing, setPlaying] = useState(false);

  const buttonClass = classNames({
    'bg-teal-800 hover:bg-teal-600 text-white p-2 m-2 w-20 h-20': true,
    'bg-pink-600': playing,
    'disabled bg-teal-200' : activeCountState.count >= 8 && !playing,

  });


  return (
    <button
      className={buttonClass}

      onClick={() => {
        if(buttonClass.includes('disabled')){
          return
        }
        if (!playing) {
          setPlaying(true);
          play();
          activeCountState.set(activeCountState.count + 1)
        }
        else {
          setPlaying(false);
          exposedData.stop();
          activeCountState.set(activeCountState.count - 1)
        }
      }}
    >
    </button>

  );
};