import { createContext,useContext } from "react";

export const theameContext=createContext({
    theameMode:"light",
    darkMode:()=>{},
    lightMode:()=>{},
})

export const TheameProvider=theameContext.Provider

export default function useTheame(){
    return useContext(theameContext)
}