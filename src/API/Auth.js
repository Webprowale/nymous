import React from "react";
import { app, auth } from "../firabaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const LoginAuth= async(email, password)=>{
    try{
        let response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
        return err;
    }
}

export const RegisterAuth = async(email, password)=>{
    try{
        let response = await createUserWithEmailAndPassword(auth, email, password)
        return response;
    }
    catch(err){
        return err;
    }
}