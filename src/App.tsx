import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Nav from './components/Nav'
import  Carousel from './components/carousel'

import {Box} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Box  >
    
     <Nav/>
     <Carousel></Carousel>
   </Box>
  )
}

export default App
