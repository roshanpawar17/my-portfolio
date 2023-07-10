import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

function Loader() {

    const loadercss={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",        
        backgroundColor: "whitesmoke",
        height: "100vh"
    }

    return (
        <div className='loader-container' style={loadercss} >
            <BallTriangle
                height={150}
                width={200}
                radius={5}
                color="orange"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}

export default Loader
