import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc, collection, addDoc } from 'firebase/firestore'
import { app } from '../firabaseConfig'
import { toast } from 'react-toastify'
const SendMsg = () => {
    const params = useParams()
   const db = getFirestore(app)
   const [username, setUsername] = useState(null);
   const [msg, setMsg] = useState("")
   const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = {
        id: params.id,
        text: msg,
    }
    try{
        await addDoc(collection(db, 'Post'), formData);
        setMsg('');
    
    toast.success("Anonymous send successfully")
    }
    catch(error){
        toast.error(error.message)
    }
   }
   useEffect(()=>{
    const getUser = async()=>{
        try{
         const userDoc =  await getDoc(doc(db, "UserAuthList",params.id))
         if(userDoc.exists()){
            setUsername(userDoc.data().username);
         }else{
            setUsername("unknow user")
         }
        }
        catch(error){
            console.log(error.message)
        }
    }
    getUser();
   },[params.id])
   console.log(msg)
  return (
    <div className="container-fluid hero login">
    <div className=" mx-auto formBody">
      <div className="text-center">
        <span className="fs-1 text-black">🧸</span>
        <h2 className="fw-bold  fs-2 fText">Write {username}</h2>
        <p className="mb-5 fw-semibold">
          Send anonymous compliments to your friends for free.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
         <textarea name="text" id="text" rows={5} className='form-control' value={msg} onChange={(e)=>setMsg(e.target.value)} style={{ resize: 'none'}}/>
        <button
          type="submit"
          className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3"
          
        >
          Send
        </button>
      </form>
    </div>
  </div>
  )
}

export default SendMsg