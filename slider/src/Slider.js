import React  from "react";
import { useState,useEffect } from "react";
import { value } from "./Value";


export default function Slider(){

    const [ImageComponent,setImageComponent]=useState(0)

    function HandleNext(){
      
        setImageComponent((ImageComponent+1) % value.length);

        // if (ImageComponent + 1 === value.length) {
        //     setImageComponent(0);
        // } else {
        //     setImageComponent(ImageComponent + 1);
        // }

    };
    function HandlePrevious(){
        setImageComponent(!ImageComponent ? value.length-1 : ImageComponent-1);

        // if(!ImageComponent) setImageComponent(value.length-1)

        // else setImageComponent(ImageComponent-1)

    };

    useEffect(()=>{
      const timer =  setTimeout(()=>{
                HandleNext();
        },3000)
        return ()=>{
           clearTimeout(timer);
        }
    },[ImageComponent])

    

    return(<>

    <div className="w-full h-[600px]  bg-zinc-600 flex justify-center items-center gap-3">
        <button className="bg-lime-700 text-xl p-3 text-gray-100 rounded" onClick={HandlePrevious} >previous</button>
      {value.map((url,i)=>(
 
            <img key={url} src={url} className={"w-72 h-72 object-cover "+(ImageComponent===i ? "block" : "hidden")}/>
      ))}
        
        <button className="bg-cyan-900 text-xl p-3 text-gray-100 rounded" onClick={HandleNext}>next</button>

    </div>
    
    </>)
}