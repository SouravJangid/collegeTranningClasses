import PropTypes from "prop-types"
function App(props) {
  let max =0;
  // let sum = 0;
  // let si = (props.data[0] * props.data[1] * props.data[2])/100
  // let newData = props.data.filter((n)=>n<90)
  props.data.forEach((n)=>{
    if(n>max) max = n
  })


  return (

    <>
    {/* <p>done</p>
    {newData.map((n,i)=>{
      <h1 key={i} >{n}</h1>
      {sum += n}
    })}
    <h1>{si}</h1>
    <h2>{sum}</h2> */}
    {/* 15-10-2024 */}

{/*     
    <h1>15-10-2024</h1>
    {props.name}
    {props.pass}
    {String(props.isMarried)}
    {props.children} */}

    <h1>{max}</h1>
    
    </>
  )
}
App.PropTypes = {
  name: PropTypes.string,
  pass: PropTypes.string,
  isMarried: PropTypes.bool,
  children: PropTypes.node,
}

App.defaultProps = {
  name: 'default name',
  pass: 'default pass',
  isMarried: false,
}
export default App

