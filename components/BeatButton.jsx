import { useState } from "react";
import useSound from 'use-sound';


export const BeatButton = (props) => {
  const sound = '/sounds/19_haha_a.ogg' //change to props.sound
  const icon = '/images/test.gif' // change to props.icon
  
  const [play, exposedData] = useSound(sound, {loop: true});
  const [playing, setPlaying] = useState(false)
  

  return (
    <button
      onClick={()=>{
        if(!playing){
          setPlaying(true)
          play()
        }
        else{
          setPlaying(false)
          exposedData.stop()
        }
      }}
    >
      <img src={icon} alt="Beat 1" />
    </button>
  );
};