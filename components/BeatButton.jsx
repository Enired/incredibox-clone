import { useState } from "react";
import useSound from 'use-sound';


export const BeatButton = (props) => {
  const sound = props.sound //change to props.sound
  const icon = '/images/test.gif' // change to props.icon
  const label = props.label
  
  const [play, exposedData] = useSound(sound, {loop: true});
  const [playing, setPlaying] = useState(false)
  

  return (
  <div className="border-8">

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
      {/* <img src={icon} alt="Beat 1" /> */}
    <h1>{label}</h1>
    </button>
  </div>
  );
};