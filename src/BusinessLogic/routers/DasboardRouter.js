import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Header} from '../../UI/molecules/header/Header'
import {Home} from '../../Pages/home/Home'

const DasboardRouter = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route exact path='/' element={<Home />} />
         </Routes>
      </>
   )
}

export {DasboardRouter} 
