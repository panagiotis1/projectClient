import React from 'react';
import Axios from 'axios';
function Profile () {

    React.useEffect(() => {
        Axios.get("http://localhost:3001/isUserAuth", {
            headers: {
                "x-access-token": sessionStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
        });
    }, [])
    return ( 
        <h1>HELLO FROM Profile Page</h1>
    );
}
export default Profile;