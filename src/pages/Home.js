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
        <h1 className='ps-3'>Home Page</h1>
        <ul className='nav text-center'>
          {
            businessCategory.map((cv,index,arr)=>{
              return  <li key="index" className='me-3'>
                          <a href="#" className='text-center img-fluid'>
                              <div><img className='img-fluid' alt='img' src={`${URL}`+cv.attributes.image.data.attributes.url}/></div>
                              <div>{cv.attributes.name}</div>
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