export const ControlButton = (props) => {
  const label = props.label
  const onClick = props.onClick
  return (
    <button
    onClick={()=>{onClick()}}
    >
      {label}
    </button>
  )
}