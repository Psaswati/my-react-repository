import React from 'react';

const Hello = () => {
    // with JSX
    // return (
    //     <div className='dummyClass'>
    //         <h2>Hello World</h2>
    //     </div>
    // )
    // without JSX
    return React.createElement(
        'div',
        //    null,
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h2', null, 'Hello World')
    )
}

export default Hello