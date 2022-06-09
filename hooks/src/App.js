import React,{useState} from "react";

function App (props) {
  //const propsCount = props.count||0
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(()=>{return props.count||0})
  const [person, setPerson] = useState({ name: 'aaa', age: 20 })
  
  function handleCount () {
    setCount(count => {
      document.title=count
      return count+1
    })
  
  }
  return <div >
    <span>{count}{person.name}{person.age}</span>
    {/* <button onClick={()=>setCount(count + 1)}>+1</button> */}
    <button onClick={handleCount}>+1</button>
    <button onClick={()=>setPerson({...person,name:'bbb'})}>setPerson</button>
    </div>
}

export default App;
