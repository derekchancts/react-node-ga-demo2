import { useState, useEffect } from 'react'
import axios from 'axios'
// import './App.css'


function App() {
  const [userName, setUserName] = useState(''); 
  // console.log({userName})

  // const [ip, setIP] = useState("");
  // console.log({ip})


  // const getData = async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json");
  //   console.log(res.data);
  //   setIP(res.data.ip);
  // };


  // useEffect(() => {
  //   getData();
  // }, []);
  


  useEffect(() => {
    getNames();
  }, [])


  const getNames = async () => {
    // const response = await axios('http://localhost:5000/names')
    // const response = await axios(`http://${ip}:5000/names`)
    const response = await axios('http://192.168.1.103:5000/names')
    // const response = await axios('/names')
    // console.log({response})
    setUserName(response.data)
  }


  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  )
}

export default App