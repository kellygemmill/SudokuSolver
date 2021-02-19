import React, { useContext } from 'react'
import { languageOptions } from 'languages'
import { LanguageContext } from 'containers/Language'
import { NavDropdown, Dropdown, InputGroup } from 'react-bootstrap'

export default function LanguageSelector() {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext)

    const handleLanguageChange = event => {
        userLanguageChange(event.target.id)
    }
    
    return (
        <NavDropdown title={languageOptions[userLanguage]} id='basic-nav-dropdown' as={InputGroup.Prepend}>
            <Dropdown.Item onClick={handleLanguageChange} id='en'>English</Dropdown.Item>
            <Dropdown.Item onClick={handleLanguageChange} id='jp'>日本語</Dropdown.Item>
        </NavDropdown>
    )
}