import React from 'react';

export default function (props) {
    
    return (
        <>
            <div className="form-group sort">
                <label id="searchLabel" htmlFor="searchInput" style={{ fontSize: 25 }}>Search: </label>
                <input type="search" className="form-control" placeholder="Enter Name" id="searchInput" aria-describedby="searcher" onChange={e => props.onSearchChanged(e)}/>
            </div>
            <div className="sort" style={{ fontSize: 25 }}> Sort name by: 
            <br />
             <button className="button" value="asc" onClick={e=>props.onSortChanged(e)} style={{ background: 'lightgreen', fontSize: 15}}>A-Z</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button className="button" value="desc" onClick={e=>props.onSortChanged(e)} style={{ background: '#ffcccb', fontSize: 15 }}>Z-A</button>
            </div>
        </>
    )
}