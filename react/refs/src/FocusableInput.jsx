import React, { useEffect,useRef } from 'react'

function FocusableInput() {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current?.focus()
  },[])

  return <input ref={inputRef} />
}

export default FocusableInput
