import React from 'react';

const divStyle={
    margin:'40px',
    border:'5px solid grey'
}
const ulStyle={
    textAlign: 'left'
}

const Display = (props) => {
    return (
        <div style={divStyle}>
            <ul style={ulStyle}>
            {props.displayName.map((eachName,index)=>{
               return  <li key={index}>{eachName}</li>
            })}

            </ul>
        </div>
    );
};

export default Display;