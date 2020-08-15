import React from 'react';

const MyData = (props) => {
    return (
        <tr>
            <td>{props.children}</td>
            <td>{props.job}</td>
        </tr>
    )
}

export default MyData;