import React from 'react';
import Search from './Search';
import QuickSearch from './quickSearch';

const Home = (props) => {
    console.log("inside home>>",props)
    return(
        <>
            <Search/>
            <QuickSearch/>
        </>
    )
}

export default Home