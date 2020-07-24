import React from 'react'

// function Greet() {
//   return <h1>My first react app</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>
                Hello {props.name} A.K.A. {props.heroname}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet