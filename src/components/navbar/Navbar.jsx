import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
const Navbar = () => { 

  const [active,setactive] = useState(false)
  const [open,setopen] = useState(false)
  
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
    <div className={active?'navbar active':'navbar'}>
      <div className="container">
       <div className="logo">
       <span className='text'>fiberr</span>
       <span className='dot'>.</span>
       </div>

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
            <span>gigs</span>
            <span>Add new gigs</span>
            </>           
          )}
          <span>Orders</span>
          <span>message</span>
          <span>Logout</span>
          </div>}
          
        </div>
       )}

       </div>
     </div>
     {active &&(
      <>
       <hr className='hr'/>
     <div className="menu">
      <span>menu</span>
      <span>menu</span>
     </div>
      </>
     )
    }

    </div>
  )
}

export default Navbar