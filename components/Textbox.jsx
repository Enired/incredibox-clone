export const Textbox = (props) => {
  const textState = {text: props.text, set: props.setText}

  return (
    <input type={"text"} className={'m-2 w-1/4'} value={textState.text} placeholder={'Name this track'} onChange={event=>textState.set(event.target.value)}></input>
  )
}