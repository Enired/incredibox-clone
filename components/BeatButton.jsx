import { useEffect, useState } from "react";
import useSound from 'use-sound';
import classNames from "classnames";


export const BeatButton = (props) => {
  const sound = props.sound; //change to props.sound
  const icon = '/images/test.gif'; // change to props.icon
  const label = props.label;
  const activeState = props.activeCountState;
  const allStop = props.allStop;
  // const setActiveCount = props.setActiveCount;

  const [play, exposedData] = useSound(sound, { loop: true });
  const [playing, setPlaying] = useState(false);

  const buttonClass = classNames({
    'bg-teal-800 hover:bg-teal-600 text-white p-2 m-2 w-20 h-20': true,
    'bg-pink-600': playing,
    'disabled bg-teal-200': activeState.count >= 8 && !playing,

  });

  const reset = () => {
    exposedData.stop();
    setPlaying(false);
    activeState.setCount(0);

  };
  useEffect(() => {
    reset();
  }, [allStop]);


  return (
    <button
      className={buttonClass}

      onClick={() => {
        if (buttonClass.includes('disabled')) {
          return;
        }
        if (!playing) {
          setPlaying(true);
          play();
          activeState.setCount(activeState.count + 1);
        }
        else {
          setPlaying(false);
          exposedData.stop();
          activeState.setCount(activeState.count - 1);
        }
      }}
    >
    </button>

  );
};