import { useState } from "react";
import useSound from 'use-sound';
import classNames from "classnames";


export const BeatButton = (props) => {
  const sound = props.sound //change to props.sound
  const icon = '/images/test.gif' // change to props.icon
  const label = props.label
  const activeCount = props.activeCount
  const setActiveCount = props.setActiveCount
  
  const [play, exposedData] = useSound(sound, {loop: true});
  const [playing, setPlaying] = useState(false)

  const buttonClass = classNames({
    'bg-slate-400 text-white p-2 m-2 w-40 h-40': true,
    'bg-pink-500' : playing,
    'bg-yellow-500': activeCount >= 8 && !playing,

})
  

  return (
    <button
        className={buttonClass}

      onClick={()=>{
        if(!playing){
          setPlaying(true)
          play()
          setActiveCount(activeCount+1)
        }
        else{
          setPlaying(false)
          exposedData.stop()
          setActiveCount(activeCount-1)
        }
        console.log(activeCount)
      }}
    >
    {/* <h1>{label}</h1> */}
    </button>

  );
};