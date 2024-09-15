import React from 'react';



interface Props {

    name: string;

    age: number;

}




    const Person = (props) => {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
};



export default Person;