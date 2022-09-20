import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import { Grid } from "@mui/material";

const Profile = ({image,bio,username,dispname,url}) => {


    const navigate = useNavigate();

    return(
        <>
        <Navbar/>
        <h3 class="profile-txt">{username}</h3>
        <figure class="profile-txt">
            <img src={image}></img>
            <figcaption>
                <div class="container">
                    <div class="row" id="follow">
                        <div class="col-sm-3">
                        <h3>FOLLOWERS</h3>
                        <h1>200</h1>
                        </div>
                        <div class="col-sm-3">
                        <h3>FOLLOWING</h3>
                        <h1>20</h1>
                        </div>
                    </div>
                </div>
                <h4>{dispname}</h4>
                <p>{bio}</p>
                <a href={url}>{url}</a>
            </figcaption>
        </figure>
        <button name="Upload" className="btns" onClick={() => {navigate("/UploadForm")}}>Upload</button><br></br>
        <div className="flex flex-wrap justify-between">
        <br></br>
        <br></br>
        <Grid container spacing={1}>
                    <Grid item md={3}>
                        <Card title="My first poem"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="Into the dark"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="Moonlight shadows"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="My demons"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="sky stalker" img="../../public/static/images.jfif"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="lee cooper"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="levi ackerman"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="lara croft"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="sky stalker" img="../public/static/8a1a98912001dbd6f9fb8b9c77a35df4.jpg"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="lee cooper"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="levi ackerman"/>
                    </Grid>
                    <Grid item md={3}>
                        <Card title="lara croft"/>
                    </Grid>
        </Grid>
        </div>
        <Footer/>
    </>
    ) 
}

export default Profile;
