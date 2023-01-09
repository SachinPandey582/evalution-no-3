import { Center, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import CardReader from '../Components/CardReader'

const Projects = ({users}) => {
   console.log(users,"this isd fhsjkdhfijs")
  return (
    <div>
        <Center><Heading>Projects</Heading></Center>
  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
  {
    users.map((items)=>(
     
         <CardReader key={items.id}  {...items}/>  
    ))
   }  
  </div>
    </div>
  )
}

export default Projects



export async function getStaticProps(){
    const res =await axios.get(`http://localhost:4004/projectData`)
    let value=await res.data
    
    console.log(value,"daat")
    return {
        props:{ users:value }
    }
  }