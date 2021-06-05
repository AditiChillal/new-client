import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'


const NavBar=()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory() 
  const renderList = ()=>{
    console.log(state)
    if(state){
        return [
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/createPost">CreatePost</Link></li>,
          <li>
            <button className="btn #c62828 red darken-3"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
            }}
            >
              Logout
              </button>
          </li>
        ]
      }else{
        return [
          <li><Link to="/signin">SignIn</Link></li>,
          <li><Link to="/signup">Signup</Link></li>,
        ]
      }
    }
    return(

    <nav>
    <div class="nav-wrapper white">
      <Link to={state?"/":"/signin"} class="brand-logo left">SociaBook</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      
        
      {renderList()}
        
      </ul>
    </div>
  </nav>
  )
}

export default NavBar

