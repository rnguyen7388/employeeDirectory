import React from 'react';
import Employee from "./employee";
import Headers from "./table-headers";


export default function (props) {
    return (
        <>
            <table>
                <thead>
                    <tr><Headers  /></tr>
                </thead>
                <tbody>
                    <Employee currentSearchValue= {props.currentSearchValue} currentSortState={props.currentSortState}/>
                </tbody>
            </table>
        </>
    )
}