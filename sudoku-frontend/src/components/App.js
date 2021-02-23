import React from 'react';
import { LanguageProvider, Text } from 'containers/Language';
import BoardArea from 'components/board/BoardArea'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'

const App = () => {

    return (
        <LanguageProvider>
            <div className="content">
                <NavigationBar className='navigation-bar' />
                <h1><Text textId='sudoku' /></h1>
                <BoardArea />
            </div>
            <Footer />
        </LanguageProvider>
    )
}

export default App;
