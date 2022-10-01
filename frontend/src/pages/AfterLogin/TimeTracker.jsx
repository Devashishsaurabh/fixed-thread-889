import { Box, Flex, Text } from '@chakra-ui/layout'
import React, {useEffect, useRef, useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import InitialFocus from '../../Components/Timetracker/ProjectModal';
import axios from 'axios';
import { BsTags } from "react-icons/bs";
const TimeTracker = () => {
  const [watch, setWatch]= useState(0)
  const [minute,setminute]=useState(0)
  const [hour,setHour]=useState(0)
  const [data,setData]= useState([])
  const [project,setProject]=useState({})
  const [dept,setDept]=useState("")
  
  const timerId=useRef(null);
  let token= localStorage.getItem("login_token")
  // let getData=async()=>{
  //   await axios.get("https://clockify-api.herokuapp.com/project",
  //   {headers: {'authorization' : `Bearer ${token}`}})
  //   .then(res=>setData(res.data)) 
  // }
  
  // useEffect(()=>{
  //   getData()
  // },[])


  const start= ()=>{

    if(project){
      if(!timerId.current){
        let id= setInterval(()=>{
            setWatch((pre)=>pre+1)
        },1000)
        // setTimerId(id)
        timerId.current=id
    }
    }else{
      alert("fill all data")
    }

    

  
}

  const stop =()=>{
    clearInterval(timerId.current)
    timerId.current=null
  }


//   let getData=async()=>{
//     await axios.get("https://clockify-api.herokuapp.com/project",
//     {headers: {'authorization' : `Bearer ${token}`}})
//     .then(res=>setStatus(!status)) 
// }


  let postdata= async ()=>{
    let total= 3600*Number(hour)+60*Number(minute) + Number(watch)
    let newProject= {
        name:project.name,
        tag:project.tag,
        billable:false,
        startAt:"0",
        endAt:`${total}`
    }
    console.log(newProject)
    
    await axios.post("https://clockify-api.herokuapp.com/task/create",newProject,
    {headers: {'authorization' : `Bearer ${token}`}}
    ).then(res=>console.log(res.data))
    // .then(()=>getData())
  }


  const reset = ()=>{
      clearInterval(timerId.current)
      // let total= 3600*Number(hour)+60*Number(minute) + Number(watch) 
      // setData([...data,
      //    {
      //     dept,
      //     project,
      //     totalTime:total
      //    }
      //   ])
      setWatch(0)
      setminute(0)
      setHour(0)
      setProject("")
      setDept("")
      postdata()
      timerId.current=null
  }

  
  if(watch===60){
    setminute(minute+1)
    setWatch(0)
}

if(minute===60){
  setHour(hour+1)
  setminute(0)
}

const addProject= (data)=>{
  // console.log(name)
setProject(data)
}


  return (
    <Box w="80vw" h="100vh"  bg="#e4eaee" ml="21rem">
     <Flex w="80%"  m="auto" p="1rem" justifyContent={"space-between"}bg="white" alignItems={"center"}>
     <Textarea w="35%" h={"1rem"} placeholder='Here is a sample placeholder' onChange={(e)=>setDept(e.target.value)} />
      <InitialFocus addProject={addProject}/>
     <Box w="10%"><Text as={"b"}>{`Time: ${hour}: ${minute}: ${watch} `}</Text> </Box>
     <Button width={"15%"} onClick={start} cursor="pointer">Start</Button>
     <Button width={"15%"} onClick={reset} cursor="pointer">Stop</Button>
     </Flex>
     <Box w="80%" m="auto">
     {data?.map(el=>(
      <Flex w="60vw" h="5rem" bg={"white"} gap="1rem" m={"1rem"} justify="space-evenly" alignItems={"center"}>
        <Box border="1px solid black" padding={"0 1rem 0 1rem"}><Text as="b">{el.dept}</Text></Box>
        <Box><Text as="b" color={"black"} bg="#e1f5fe" padding={"0 1rem 0 1rem"}>{`Project: ${el.project}`}</Text></Box>
        <Box><BsTags fontSize={"30px"}/></Box>

        <Box border={"1px solid black"} padding={"0 1rem 0 1rem"}><Text as="b" color="green">{`Time taken: ${el.totalTime} sec`}</Text></Box>
      </Flex>
     ))}
    </Box>
    </Box>
  )
}

export default TimeTracker