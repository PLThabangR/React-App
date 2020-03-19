import React from 'react'

 function layout() {
    return (
        <header style={headerStyle}>
            <h1>Todo list</h1>
        </header>
    )
}

const headerStyle ={ 
    background: '#333',
    color :'#fff',
    textAlign: 'center',
    padding : '10px'
}

export default layout;