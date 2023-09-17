//1 Import Area
import React, { useEffect, useState } from 'react'
import URL from '../helper/Url'

//2 Function defination 
function Home() {
  //2.1 hook/variable
    const[businessCategory,setBusinessCategory]=useState([])

    useEffect(()=>{
      fetch(`${URL}/api/business-categories?populate=*`,{method:"GET"})
      .then((res)=>{return res.json()})
      .then((data)=>{
        console.log(data.data)
        setBusinessCategory(data.data);
      })
      .catch()
    },[])
  //2.2 function defination area

  //2.3 return statement
    return (
      <>
        <h1>Home Page</h1>
        <ul className='nav'>
          {
            businessCategory.map((cv,index,arr)=>{
              return  <li key="index" className='text-center me-3'>
                        <a href="#">
                          <img src={`${URL}`+cv.attributes.image.data.attributes.url}/> <br />
                          {cv.attributes.name}
                        </a>
                      </li>
            })
          }
         
        </ul>
      </>
    )
}

//3 export area
export default Home;