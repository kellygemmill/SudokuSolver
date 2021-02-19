import React from 'react';
import { LanguageProvider, Text } from 'containers/Language';
import BoardArea from 'components/board/BoardArea'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'

const App = () => {

    return (
        <LanguageProvider>
            <NavigationBar className='navigation-bar' />
            <h1><Text textId='sudoku' /></h1>
            <BoardArea />
            <Footer />
        </LanguageProvider>
    )
}

export default App;
