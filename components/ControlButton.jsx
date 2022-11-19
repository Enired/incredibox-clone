export const ControlButton = (props) => {
  const label = props.label
  const onClick = props.onClick
  return (
    <button
    className="w-full m-2 text-white bg-black"
    onClick={()=>{onClick()}}
    >
      {label}
    </button>
  )
}