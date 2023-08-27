

const Button = ({title,activeclass,_callback}) => {
  return (
   <button className={activeclass} onClick={_callback}>{title}</button>
  )
}

export default Button
