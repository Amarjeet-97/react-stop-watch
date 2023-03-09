import { useEffect,useRef,useState } from 'react';
import './App.css';

function App() {
  const [time,setTime]= useState({hr:0,min:0,sec:0});

  // setInterval(()=>{
  //   setTime(prev=>prev+1);
  //   console.log(time);
  // },1000)
  useEffect(()=>{
    // handleTime();
    return ()=>clearInterval(id.current);

  },[])
  let id= useRef();
  function handleTime(){
    id.current=setInterval(()=>{
      setTime((prev)=>{
        if(prev.min==60){
          return {...prev,min:0,sec:0,hr:prev.hr+1}
        }
        if(prev.sec==60){
          return {...prev,min:prev.min+1,sec:0}
        }
        return {...prev,sec:prev.sec+1};
        

      });
      // console.log(time);
    },100)
     
  }
  return (
    <>
    <h1>{time.hr<10? `0`+time.hr:time.hr} {time.min<10? `0`+time.min:time.min}:{time.sec <10? `0`+time.sec : time.sec}</h1>
      <button
      onClick={()=>handleTime()
      }
      >Start</button>
      <button
      onClick={()=>clearInterval(id.current)}
      >Pause</button>
      <button
      onClick={()=>{
        clearInterval(id.current)
        setTime({hr:0,min:0,sec:0});

      }}
      >Reset</button> 
    </>
  );
}

export default App;
