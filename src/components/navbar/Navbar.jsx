import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"
const Navbar = () => { 

  const [active,setactive] = useState(false)
  const [open,setopen] = useState(false)
  const {pathname} = useLocation()
  const isActive =()=>{
    window.scrollY> 0?setactive(true):setactive(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll',isActive);
    return ()=>{
      window.removeEventListener('scroll',isActive);
    }
  },[])

  const currentuser ={
   id:1,
   username:"supradip",
   isSeller:true
  }

  return (
    <div className={active || pathname!== "/"?'navbar active':'navbar'}>
      <div className="container">
       <Link to="/" className='link' >        
       <div className="logo">
       <span className='text'>fiberr</span>
       <span className='dot'>.</span>
       </div>
       </Link>
      

      <div className="links">
       <span>lodu</span>
       <span>lodu</span>
       <span>lodu</span>
       <span>lodu</span>
       {!currentuser?.isSeller &&<span>lodu</span>}
       {/* <span>lodu</span> */}
       { !currentuser && <button>sign in</button>}

       {currentuser && (
        <div className="user" onClick={()=>setopen(!open)}>
          <img src="https://media.licdn.com/dms/image/D5603AQFMgt0zQ5b5Ag/profile-displayphoto-shrink_800_800/0/1663393265032?e=2147483647&v=beta&t=m8Z2NOxFB7UIDg-zxGNmf9UTu3h95MB_-IbpuUeAjRw" alt="lodu" />
          <span>{currentuser?.username}</span>

          {open && <div className="options">
          {currentuser?.isSeller &&
          (
            <>
           <Link to="/mygigs" className='link'> <span>gigs</span> </Link>
            <Link to="/add" className='link'><span>Add new gigs</span></Link>
            </>           
          )}
          <Link to="/orders" className='link'><span>Orders</span></Link>
          <Link to="/message" className='link'><span>message</span></Link>
          <Link to="/" className='link'><span>Logout</span></Link>
          </div>}
          
        </div>
       )}

       </div>
     </div>
     {active || pathname!== "/" &&(
      <>
       <hr className='hr'/>
       <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr/>
      </>
     )
    }

    </div>
  )
}

export default Navbar