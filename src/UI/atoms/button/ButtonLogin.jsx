import React from 'react'

const ButtonLogin = ({ text, type }) => {
   return (
      <input className='button' type={type} value={text} />
   )
}

export {ButtonLogin}