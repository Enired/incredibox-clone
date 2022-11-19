import { useEffect, useState } from "react";
import useSound from 'use-sound';
import classNames from "classnames";


export const BeatButton = (props) => {
  const sound = props.sound; //change to props.sound
  const icon = '/images/test.gif'; // change to props.icon
  const label = props.label;
  const activeState = props.activeState;
  // const setActiveCount = props.setActiveCount;

  const [play, exposedData] = useSound(sound, { loop: true });
  const [playing, setPlaying] = useState(false);

  const buttonClass = classNames({
    'bg-slate-400 text-white p-2 m-2 w-40 h-40': true,
    'bg-pink-500' : playing

})
  


  const reset = () => {
    exposedData.stop()
    setPlaying(false)
    activeState.setCount(0)
  }

  useEffect(()=>{
    reset()
  },[props.allStop])


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
          activeState.setCount(activeState.count + 1)
        }
        else {
          setPlaying(false);
          exposedData.stop();
          activeState.setCount(activeState.count - 1)
        }
      }}
    >
    </button>

  );
};