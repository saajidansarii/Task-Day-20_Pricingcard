import { useState } from 'react'
import './App.css'
import { Switch } from 'antd'
import { AiOutlineCaretDown } from "react-icons/ai";

function App() {
  const [toggle,setToggle] = useState (false)
  const [fix,setFix] = useState('')

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div className='container'>
      <div className='secondCon'>
      <div className='navCon'>
      <p>Pricing Card</p>
      <h2>Choose Any</h2>
      </div>
      </div>
      <div className='choose'>
      <span style={{color:"#4a4a4a"}}>Created by Ridwan</span>
        <h1 className='plan'>Choose a plan</h1>
        <div className='toggle'>
          <Switch className="custom-switch" onChange={toggler}/>
          {toggle ? <p>Billed monthly</p> :<p>Billed anually</p> }
        </div>
      </div>
      <div className='card'>
        <div className='column'>
        <h2>Plus</h2>
          <div style={{display:"flex",justifyContent:"center"}}>
          <h1 className='textPro'>$0/ </h1>
          <p className='month'>month</p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Single user
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
           50GB Storage
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Public Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Community Access
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Private Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Dedicated Phone Support
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Free Subdomain
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Monthly Status Reports
            </p>
          </div>
          <button className='btnL'>Choose Plan</button>
          </div>
        <div className='column'>
          <h2>Plus</h2>
          <div style={{display:"flex",justifyContent:"center"}}>
          <h1 className='textPro'>$9/ </h1>
          <p className='month'>month</p>
          </div>
          {/* <div className='list'>
            <input  placeholder='2500 MAUs                ⌵' className='input'/>
            
            <p className='users'>Monthly active users</p>
          </div> */}
          <div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            5 Single user
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
           50GB Storage
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Public Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Community Access
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Private Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Dedicated Phone Support
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Free Subdomain
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Monthly Status Reports
            </p>
          </div>
          <button className='btnM'>Choose Plan</button>
          </div>
          </div>
        <div className='column'>
          <h2>Pro</h2>
          <div style={{display:"flex",justifyContent:"center"}}>
          <h1 className='textPro'>$49/ </h1>
          <p className='month'>month</p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Single user
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
           50GB Storage
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Public Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Community Access
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Unlimited Private Project
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Dedicated Phone Support
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Free Subdomain
            </p>
          </div>
          <div className='info'>
            <span className='dot'>•</span>
            <p>
            Monthly Status Reports
            </p>
          </div>
          <button className='btnM'>Choose Plan</button>
          </div>
          </div>
          
      </div>
  )
}

export default App
