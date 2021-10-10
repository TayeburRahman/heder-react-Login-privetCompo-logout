import { useEffect, useState } from "react"
import initilizeAuthentication from "../../Firebase/FirebaseInit"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";

initilizeAuthentication();
const useFirebase =() =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singInUserGoogle=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })
    };
    const githuProvider = new GithubAuthProvider()
    const signInUserGithub = () =>{
        signInWithPopup(auth, githuProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.message)
        })

    }
    useEffect(() =>{
        onAuthStateChanged (auth, user=>{
            if(user){
                console.log('user stet' )
                setUser(user);
            }
        })
        
    }, []);

    const Logout =()=>{
        signOut(auth)
        .then(() =>{
            setUser({})

        })
    }
    return{
        user,
        error,
        Logout,
        singInUserGoogle,
        signInUserGithub
    }

}
export default useFirebase;