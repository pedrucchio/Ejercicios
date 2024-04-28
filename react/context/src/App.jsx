import { useState } from 'react'
import './App.css'
import { Clock } from './Clock'
import { LanguageContext } from './LanguageContext'

function App() {
  const [language,setLanguage] = useState("en");

  function handleLanguage(language) {
    setLanguage(language)
  }

  return (
    <div>
      <button onClick={()=> handleLanguage("es")}>ES</button>
      <button onClick={()=> handleLanguage("en")}>EN</button>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  )
}

export default App
