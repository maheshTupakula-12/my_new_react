import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';

function App() { 
  useEffect(()=>{
    fetch('https://mypro-backend.onrender.com/patient')
    .then((response)=>response.text())
    .then((data)=>{
      console.log(data)
    }).catch(err=>console.log(err))
  },[])
  // const addData = async()=>{
  //   fetch('')
  // }
  return (
    <>
      <div className="App">
        <table>
            <tr>
              <th>
                  Name_Of_Recruiter
              </th>
              <th>
                  Candidate_Added
              </th>
              <th>
                Candidate_Id
              </th>
              <th>
                Time_Stamp
              </th>
            </tr>
        </table>
      </div>
    </>
   
  );
}

export default App;
