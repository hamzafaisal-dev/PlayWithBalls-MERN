import React from 'react'
import {TestButton} from '../Components/Buttons/index.jsx'
import {LoginForm} from '../Components/Forms/index.jsx'

export default function home_page() {

  function handleChange(){
    alert('Button Clicked');
  }
    
  return (
    <>
    <LoginForm></LoginForm>
    </>
  )
}
