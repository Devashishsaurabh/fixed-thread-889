import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTags } from 'react-icons/bs';

const TimeTracker = () => {
  const [watch, setWatch]= useState(0)
  const [minute,setminute]=useState(0)
  const [hour,setHour]=useState(0)
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
    <Box w="80vw" h="50vh" border={"1px solid red"}>
     <Flex w="80%" border={"1px solid red"} m="auto" p="1rem" justifyContent={"space-between"}>
     <Textarea w="40%" placeholder='Here is a sample placeholder' />
     <Flex w="10%" >
      <AiOutlinePlusCircle fontSize={"30px"}/>
      <Text>Project</Text>
      </Flex>
     <Box w="10%"><BsTags fontSize={"30px"}/></Box>
     <Box w="10%">{`Time: ${hour}: ${minute}: ${watch} `}</Box>
     <Button width={"15%"} onClick={start}>Start</Button>
     <Button width={"15%"} onClick={reset}>Stop</Button>
     </Flex>
    </Box>
  )
}

export default TimeTracker