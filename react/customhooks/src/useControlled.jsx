import { useState } from 'react'

export function useControlled() {

    const [welcomeName,setWelcomeName] = useState({
        user : "",
        password : ""
      });
    
      function handleNameChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setWelcomeName((data) => {
          return{
            ...data,
            [name] :  value
          }
        })
      }
    
      function handleClick(event) {
        event.preventDefault();
      }
    
      function handleReset() {
        setWelcomeName({
          user: "",
          password: ""
        })
      }

      return {
        user: welcomeName.user,
        password: welcomeName.password,
        onNameChange: handleNameChange,
        onHandleClick: handleClick,
        onReset: handleReset
      }
}