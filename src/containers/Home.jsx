import React from 'react'
import firebaseContext from "../hooks/firebaseContext"

const Consumer = firebaseContext


const Home = props => {




    const user = localStorage.getItem("User")


    return(
        <Consumer>{
            contextResult => {
                const firebase = {
                    read: (uid) =>contextResult.firebaseDatabase.ref(`users/${user.uid}`).once()
                    .then(
                        function(snapshot)
                        {
                            var name= ((snapshot.val() && snapshot.val().name) || 'Usuario')
                        }
                    )
                };
                return(
                    <div>
                        <h1>Welcome, </h1>
                    </div>
                )
            }

            
        }   
        </Consumer>
       
    )
}

export default Home