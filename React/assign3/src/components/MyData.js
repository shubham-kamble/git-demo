import React from 'react';

const MyData = (props) => {
    return props.empData.map((student, index) => {
        const {name,job } = student //destructuring
        return (
           <tr key={index}>
              <td>{name}</td>
              <td>{job}</td>
              {/* <td><button onClick={() => {deleteData(index)}}>Delete</button></td> */}
              <td>
                 <button onClick={()=>{
                 props.empData.splice(index,1);
                 }}>Delete</button>
               </td>
           </tr>
        )
     })
}

export default MyData;