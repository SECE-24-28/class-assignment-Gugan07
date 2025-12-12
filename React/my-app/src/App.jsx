import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // let fName = "Jhon";
 const [fName, setName] = useState("Jhon");
 const [gift, setGift] = useState("Watch");
 const [data, setdata] = useState([]);

 const giftFromChild = (data) => {
   setdata(data);
   
 };

 return (
  <>
   <h1>Welcome to React JS</h1>
   {data.map((val,ind) =>
   return <li>{val}</li>;
   
  )}
   <h2>hello,{fName}</h2>
   <button onClick={() => setfName("john")}>
   change Name </button>
  </>
 );
}
export default App
