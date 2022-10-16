import { useState } from 'react'
import Button from './components/Button'
import './App.css'
import Mycomponent from './mycomponents'

function App() {
  function clicktoCopy(items)
  {
    console.log(items)
    console.log("")
    return navigator.clipboard.writeText(items)
  }
  return (
    <div className='contaner'>
      <aside className='navbar-items'>

      </aside>
      <main className='main-section'>
        <h3>Buttons</h3>
        <div className='row'>
          <div className='col'>
            <div className='button'>
            <span> {"<Button text='Default'/>"} </span>
            <span className="copy material-symbols-outlined" onClick={()=>clicktoCopy('fuckyou')}>
              content_copy
            </span>
            </div>
            <Button varient="default" text="Default" />
          </div>
          <div className='col'>
  
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
