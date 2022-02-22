import React from 'react';

const Footer = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <hr/>
            <center>&copy; Developer Funnel {props.year}</center>
        </React.Fragment>
    )
}

export default Footer