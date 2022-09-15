import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Button from '@mui/material/Button';

const Dashboard = () => {

    const navigate = useNavigate();
    const [isRegistered, setisRegistered] = useState(false);

    return(
        <div className="dash-text">
            <div>
                <h1 >DISCOVER THE<br></br> NEXT-GEN<br></br> SOCIAL MEDIA</h1>
                <h3>Earn rewards whether you are a creator or follower</h3>
                <Button style="color:" variant="contained" onClick={() => {navigate("/RegisterForm")}}>Connect wallet</Button>
            </div>
            
            <div className="cards">
                <Button variant="contained" onClick={() => {navigate("/RegisterForm")}}>Connect wallet</Button>
            </div>
        </div>
    )   
    
}

export default Dashboard;