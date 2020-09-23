import React from 'react';

export default class TableHeaders extends React.Component {
    createTableHeaders = (props) => {
        let headers = ["Photo", "Name", "Phone", "Email", "DOB"];


        return headers.map(header => {
            return (
                <>
                    <th scope="col" key={header} className="text-center">{header} </th>
                </>
            )
        });
    }
    
    render () {
        return ( 
            <>
            {this.createTableHeaders()}
            </>
        )    
    }
}