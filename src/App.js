import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import SignIn from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

import {reducer,initialState} from './reducers/userReducer'
//import {Router,Route,Link,browserHistory,IndexRoute,BrowserRouter} from 'react-router'


export const UserContext=createContext()

const Routing =()=>{
  const history=useHistory()
  const {dispatch} = useContext(UserContext)
  //const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      //history.push('/')
    }else{
      
           history.push('/signin')
    }
  },[])
  return (
    <Switch>
    <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/createpost">
        <CreatePost/>
      </Route>
  
  </Switch>
  )
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

