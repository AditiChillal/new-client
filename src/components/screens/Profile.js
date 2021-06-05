import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'

const Profile=()=>{
    const [mypics,setPics] = useState([])
    const {state} = useContext(UserContext) 
    
        useEffect(()=>{
           fetch('/mypost',{
               headers:{
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               }
           }).then(res=>res.json())
           .then(result=>{
               console.log(result)
            setPics(result.mypost)
      
           })
        },[])
    return (
        <div style={{maxWidth:"1000px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid-grey",
                borderUp:"1px solid grey"
            
            }}>
                <div className="gallery">
                    {
                        mypics.map(item=>{
                            return( 
                            <img key ={item._id} className="item" src={item.photo} alt={item.title}/>
                            )
                        })
                    }
                   
                     
                </div>
                <div>
                <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
                </div>
            <div>
            <h4>{state?state.name:"loading"}</h4>
            <div style={{display:"flex",justifyContent:"space-between",width:"20%"}}>
                <h6>6 posts</h6>
                <h6>200 followers</h6>
                <h6>240 following</h6>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Profile