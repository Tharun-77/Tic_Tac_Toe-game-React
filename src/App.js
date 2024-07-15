import React,{ useRef, useState } from 'react';
import "./App.css";

let arr=["","","","","","","",""];
function App() {
  const log1=useRef(null);
  const log2=useRef(null);
  const log3=useRef(null);
  const log4=useRef(null);
  const log5=useRef(null);
  const log6=useRef(null);
  const log7=useRef(null);
  const log8=useRef(null);
  const log9=useRef(null);

  const brr=[log1,log2,log3,log4,log5,log6,log7,log8,log9];
  
const [scoreo,setscoreo]=useState(0);
const [scorex,setscorex]=useState(0);
 const [count,setcount]=useState(0);
 const [lock,setlock]=useState(false);
 const head=useRef(null);

 function toggle(e,index){
   if(lock) return;
   else if(count%2===0){
     e.target.innerHTML="<h1>X</h1>";
     arr[index]="x";
     setcount(count+1);
    }
    else if(count%2!==0){
      e.target.innerHTML="<h1>O</h1>";
      arr[index]="o";
      setcount(count+1);
    }
    cheakwin();
    console.log(arr);
 }

 function cheakwin(){
  if(arr[0]===arr[1]&&arr[1]===arr[2]&&arr[2]!==""){
    win(arr[2]);
  }
  else if(arr[4]===arr[3]&&arr[4]===arr[5]&&arr[5]!==""){
    win(arr[5]);
  }
  else if(arr[6]===arr[7]&&arr[7]===arr[8]&&arr[8]!==""){
    win(arr[8]);
  }
  else if(arr[0]===arr[4]&&arr[4]===arr[8]&&arr[8]!==""){
    win(arr[8]);
  }
  else if(arr[0]===arr[3]&&arr[3]===arr[6]&&arr[6]!==""){
    win(arr[6]);
  }
  else if(arr[4]===arr[1]&&arr[4]===arr[7]&&arr[7]!==""){
    win(arr[7]);
  }
  else if(arr[2]===arr[5]&&arr[5]===arr[8]&&arr[8]!==""){
    win(arr[8]);
  }
  else if(arr[2]===arr[4]&&arr[4]===arr[6]&&arr[6]!==""){
    win(arr[6]);
  }
  
 }

 const win=(data)=>{
  setlock(true);
  if(data==="x"){
    head.current.innerHTML="Player X Won the game";
    setscorex(scorex+1);
  }
  else{
    head.current.innerHTML="Player O Won the game";
    setscoreo(scoreo+1);
  }
 }

 const Del=()=>{
  setlock(false);
  setcount(0);
  arr=["","","","","","","",""];
  brr.map((e)=>{
    e.current.innerHTML="";
  })
  head.current.innerHTML="Tic Tac Toe Game with <span>React </span>";
 }


  return (

    <>
    <div className="hello">
      <div className="heading">
        <h1 style={{textAlign:"left"}} >Playe <span>X</span> Score: <span>{scorex}</span></h1>
        <h1 ref={head}>Tic Tac Toe Game with <span>React </span></h1>
        <h1 style={{textAlign:"right"}}>Playe <span>O</span> Score: <span>{scoreo}</span></h1>
      </div>
      <div className="grid">
          <div className="row1">
            <div onClick={(e)=>toggle(e,0)} ref={log1} className="box"></div>
            <div onClick={(e)=>toggle(e,1)} ref={log2} className="box"></div>
            <div onClick={(e)=>toggle(e,2)} ref={log3} className="box"></div>
          </div>
          <div className="row2">
            <div onClick={(e)=>toggle(e,3)} ref={log4} className="box"></div>
            <div onClick={(e)=>toggle(e,4)} ref={log5} className="box"></div>
            <div onClick={(e)=>toggle(e,5)} ref={log6} className="box"></div>
          </div>
          <div className="row3">
            <div onClick={(e)=>toggle(e,6)} ref={log7} className="box"></div>
            <div onClick={(e)=>toggle(e,7)} ref={log8} className="box"></div>
            <div onClick={(e)=>toggle(e,8)} ref={log9} className="box"></div>
          </div>
      </div>
      <div >
        <button onClick={Del} className='restart' >RESTART</button>
      </div>
    </div>
    </>
  )
}

export default App
