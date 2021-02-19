import React, { useState, createContext, useContext } from 'react'
import { languageOptions, dictionaryList } from 'languages/index'

// Language context for default language
export const LanguageContext = createContext({
    userLanguage: 'jp',
    dictionary: dictionaryList.jp
})

// Language context provided to app
export function LanguageProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem('rcml-lang')
    const languageToUse = 'en'
    
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || languageToUse)

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : languageToUse
            setUserLanguage(newLanguage)
            window.localStorage.setItem('rcml-lang', newLanguage)
        }
    }

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}

export function Text({ textId }) {
    const languageContext = useContext(LanguageContext)

    return languageContext.dictionary[textId] || textId;
}
