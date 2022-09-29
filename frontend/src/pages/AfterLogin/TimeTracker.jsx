import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';

const TimeTracker = () => {
  const [watch, setWatch]= useState(0)
  const [minute,setminute]=useState(0)
  const [hour,setHour]=useState(0)
  const [data,setData]= useState([])
  // const [timerId,setTimerId]= useState()
  const timerId=useRef(null);
  



  const start= ()=>{

    if(!timerId.current){
        let id= setInterval(()=>{
            setWatch((pre)=>pre+1)
        },1000)
        // setTimerId(id)
        timerId.current=id
    }

  
}

  const stop =()=>{
    clearInterval(timerId.current)
    timerId.current=null
  }

  const reset = ()=>{
      clearInterval(timerId.current)
      let total= 3600*Number(hour)+60*Number(minute) + Number(watch) 
      setData([...data,total])
      setWatch(0)
      setminute(0)
      setHour(0)
      timerId.current=null
  }

  
  if(watch==60){
    setminute(minute+1)
    setWatch(0)
}

if(minute==60){
  setHour(hour+1)
  setminute(0)
}




  return (
    <Box w="80vw" h="100vh" border={"1px solid red"} bg="#e4eaee">
     <Flex w="80%" border={"1px solid red"} m="auto" p="1rem" justifyContent={"space-between"}bg="white">
     <Textarea w="40%" placeholder='Here is a sample placeholder' />
     <Flex w="10%" >
      <AiOutlinePlusCircle fontSize={"30px"}/>
      <Text>Project</Text>
      </Flex>
     <Box w="10%"><BsTags fontSize={"30px"}/></Box>
     <Box w="10%"><Text as={"b"}>{`Time: ${hour}: ${minute}: ${watch} `}</Text> </Box>
     <Button width={"15%"} onClick={start}>Start</Button>
     <Button width={"15%"} onClick={reset}>Stop</Button>
     </Flex>
     
     {data?.map(el=>(
      <Flex w="70vw" h="5rem" bg={"white"} gap="1rem" m={"1rem"}>
        <Box>Project</Box>
        <Box>{el}</Box>
      </Flex>
     ))}

    </Box>
  )
}

export default TimeTracker