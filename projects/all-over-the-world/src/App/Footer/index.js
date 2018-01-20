import React from 'react';

function Footer(props) {
    let style = {
        backgroundColor: 'rgba(229,229,229, .3)',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '30px'
    }
    return (
        <div style={style}>
            footer here
        </div>
    )
}

export default Footer;
