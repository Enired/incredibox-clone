export const ControlButton = (props) => {
  const label = props.label
  const onClick = props.onClick
  return (
    <button
    className={"bg-yellow-600 w-full text-white m-2 p-5"}
    onClick={()=>{onClick()}}
    >
      {label}
    </button>
  )
}