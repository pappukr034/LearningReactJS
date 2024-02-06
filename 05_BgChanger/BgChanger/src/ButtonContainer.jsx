import React, { useState } from 'react'
import Button from './Button'
function ButtonContainer() {
  return (
    <div className='flex gap-2 p-4 rounded-md bg-pink-500 '>
    <Button bgColor="#fc2c03" value="Red" />
    <Button bgColor="#0bfc03" value="Green" />
    <Button bgColor="#0703fc" value="Blue" />
    <Button bgColor="#808000" value="Olive" />
    <Button bgColor="#666464" value="Gray" />
    <Button bgColor="#ebd007" value="Yellow" />
    <Button bgColor="#fc2c03" value="Pink" />
    <Button bgColor="#eb07d4" value="Purple" />
    <Button bgColor="#29144d" value="Lavender" />
    <Button bgColor="#e6eff0" value="White" />
    <Button bgColor="#111212" value="Black" />
  </div>
  )
}

export default ButtonContainer
