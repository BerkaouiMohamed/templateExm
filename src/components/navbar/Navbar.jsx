import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"
import './navbar.css'

function Navbar() {

    console.log(window.scrollY);
    const [shodow,setShodow]=useState(false)
useEffect(()=>{
window.addEventListener('scroll',()=>{

    if(window.scrollY>80){
        setShodow(true)
    }
    else{
        setShodow(false)

    }
})
})

  return (
    <div className={!shodow?'navbar-container':'navbar-container shodow'}>
      <img src={logo} alt="" />
     <ul>
        <li>home <div/></li>
        <li>doctors <div/></li>
        <li>services<div/></li>
        <li>pages<div/></li>
        <li>blogs<div/></li>
        <li>contact Us <div/></li>
     </ul>

     <section><p>click</p><div/></section>
    </div>
  )
}

export default Navbar
