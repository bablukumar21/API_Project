import React from 'react';
import { useState,useEffect } from 'react';

const Api=()=>{
    const[posts,setPosts]=useState([]);
    
    //syntax for fetching
    const fetchPost= async ()=>{
        const response= await fetch("https://all-the-weather.herokuapp.com/cities");
        const data= await response.json();

        //adding data to posts using useState
        setPosts(data.items);
    };
    //useEffect can be done using callback function but if we dont use [] then it will reload multiple times
    useEffect(()=>{
        fetchPost();
    },[]);
    return(<div className='App'>
    <table cellPadding="0" cellSpacing="0">
    <thead>
        <tr>
            <th> Post ID </th>
            <th> Name of city </th>
            <th> Region Code </th>
            <th> Country Code </th>
        </tr>
    </thead>
        <tbody>
            {posts.map((post)=>(
                <tr>
                    <td> {post.id} </td> 
                    <td> {post.name}</td>
                    <td> {post.regionCode}</td> 
                    <td> {post.countryCode}</td>            
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    )


}
export default Api;