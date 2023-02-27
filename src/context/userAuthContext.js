import {useState,useEffect,useContext,createContext} from 'react'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import {auth} from '../firebase-config'


const userAuthContext=createContext()


export function UserAuthContectProvider({children}){
  const [user,setUser]=useState({})
  function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }
  function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function logOut(){
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      console.log("Auth",currentUser)
      setUser(currentUser)
    })
    return unsubscribe()
  },[])

  return (
    <userAuthContext.Provider value={{user,logIn,signUp,logOut,googleSignIn}}>
      {children}
    </userAuthContext.Provider>
  )

}

export function useUserAuth(){
  return useContext(userAuthContext)
}