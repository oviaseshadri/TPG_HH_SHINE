import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({image,bio,username,dispname,url}) => {


    const navigate = useNavigate();

    return(
        <>
        <h3>{username}</h3>
        <figure>
            <img src={image}></img>
            <figcaption>
                <h4>{dispname}</h4>
                <p>{bio}</p>
                <a href={url}>{url}</a>
            </figcaption>
        </figure>
        <button name="Upload" onClick={() => {navigate("/UploadForm")}}>Upload</button><br></br>
    </>
    ) 
}

export default Profile;