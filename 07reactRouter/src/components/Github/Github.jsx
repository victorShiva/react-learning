import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data=useLoaderData()
    // const [data,setData]= useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data);
    //     })
    // },[])
    return (
        <div className="bg-gray-700 text-white text-3xl m-5 text-center p-4">GitHub Followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={400} /></div>
    )
}

export const githubInfoLoader = async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}