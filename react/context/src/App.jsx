import { useState } from 'react'
import './App.css'
import { Clock } from './Clock'
import { LanguageContext } from './LanguageContext'

function App() {
  const [language,setLanguage] = useState("en");

  function handleLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select onChange={handleLanguage} name="selectLanguage" id="">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <Clock />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
