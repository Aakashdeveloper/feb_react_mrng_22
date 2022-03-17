import React from 'react';
import Search from './Search';
import QuickSearch from './quickSearch';
import Header from '../../Header'

const Home = (props) => {
    console.log("inside home>>",props)
    return(
        <>
            <Header/>
            <Search/>
            <QuickSearch/>
        </>
    )
}

export default Home