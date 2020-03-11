import React, {useState} from 'react'
import firebaseContext from "../hooks/firebaseContext"


const Consumer = firebaseContext.Consumer


const Home = props => {

    const [name, setName]=useState("");



    const user = localStorage.getItem("user")
    return(
        <Consumer>{
            contextResult => {
                const firebase = {
                    read: (uid) => contextResult.firebaseDatabase.ref(`users/${uid}`).once('value'),
                }
               
                firebase.read(user)
                .then(function (snapshot) {
                    console.log(snapshot,snapshot.val())
                    setName(snapshot.val().name);
                    
                    
                })
                .catch(function (error) {
                    
                })
                return(
                    <div>
                        <h1>Welcome, {name}! </h1>
                    </div>
                )
            }

            
        }   
        </Consumer>
       
    )
}

export default Home