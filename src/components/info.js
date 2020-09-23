import React from "react";
import dayjs from "dayjs"


export default ({ user }) => (
    <>
        <tr>
            <td><img alt={user.picture.name} src={user.picture.medium} /></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.cell}</td>
            <td>{user.email}</td>
            <td>{dayjs(user.dob.date).format("MM-DD-YYYY")}</td>
        </tr>
    </>
)