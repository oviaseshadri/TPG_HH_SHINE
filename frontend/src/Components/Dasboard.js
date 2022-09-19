import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Button from '@mui/material/Button';
import Card from "./Card";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";

const Dashboard = () => {

    const navigate = useNavigate();
    const [isRegistered, setisRegistered] = useState(false);

    return(
        <div className="dash-text">
            <Navbar></Navbar>
            <div>
                <h1 >DISCOVER THE<br></br> NEXT-GEN<br></br> SOCIAL MEDIA</h1>
                <h3>Earn rewards whether you are a creator or follower</h3>
                <Button variant="contained" onClick={() => {navigate("/RegisterForm")}}>Connect wallet</Button>
            </div>
            
            <div className="cards">
                <Button color="primary" variant="contained" onClick={() => {navigate("/RegisterForm")}}>Connect wallet</Button>
            </div>
            <div className="dash-text">
                TOP CREATORS
                <Grid container spacing={20}>
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
        </div>
    )   
    
}

export default Dashboard;