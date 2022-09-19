import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RegisterForm = ({wallet_addr}) =>{

    const [dname , setDname] = useState("");
    const [uname , setUname] = useState("");
    const [bio , setBio] = useState("");
    const [email , setEmail] = useState("");
    const [website , setWebsite] = useState("");
    const [twitter , setTwitter] = useState("");
    const [selectDp, setSelectDp] = useState();
	const [isDpSelected, setIsDpSelected] = useState(false);

    const navigate = useNavigate();

    const selectFile = (event) => {
		setSelectDp(event.target.files[0]);
		setIsDpSelected(true);
	};
    const submit = async(event) => {

        event.preventDefault();
        const userData = {selectDp : selectDp.name,dname : dname, uname : uname, bio : bio,email : email, website : website, twitter: twitter};
        console.log(userData);
        navigate("/Profile");
    }
    return(
        <div>
            <Navbar/>
            <h1>REGISTER FORM</h1>
            <form className="form-custom">
                    
                    <div className="row">
                        <div class="col-sm-6">
                            <label className="form-label"></label><br></br>
                            <input className="form-control form-control-sm" id="file" type="file"
                            onChange={selectFile}></input>
                            {isDpSelected ? (
                                <div>
                                    <p>Filename: {selectDp.name}</p>
                    
                                </div>
                            ) : (
                                <p></p>
                            )}
                            <br></br>
                        </div>
                        <div className="col-sm-5">
                            <div className="row">
                                <input 
                                    className="form-control" type="text" placeholder="Display Name" value={dname} 
                                    onChange={(e) => setDname(e.target.value)}>
                                </input><br></br>
                            </div>
                            
                            <div className="row">
                                <input 
                                    className="form-control" type="text" placeholder="@Username" value={uname}
                                    onChange={(e) => setUname(e.target.value)}>
                                </input>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">

                    </div>
                    <input 
                        className="form-control" type="text" placeholder="Bio" value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        >
                    </input><br></br>
                    <input 
                        className="form-control" type="email" placeholder="Your Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input><br></br>
                    <h5>SOCIAL LINKS</h5>
                    <input 
                        className="form-control" type="url" placeholder="Website" value={website}
                        onChange={(e) => setWebsite(e.target.value)}>
                    </input><br></br>
                    <input 
                        className="form-control" type="url" placeholder="Twitter" value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}>
                    </input><br></br>
                    <h5>WALLET ADDRESS</h5>
                    <input 
                        id="disabledTextInput" className="form-control" placeholder={wallet_addr} disabled readonly>
                    </input><br></br>
                    <button name="Register" className="btn btn-lg" onClick={submit}> Register </button>
                     
            </form>
            <Footer/>
        </div>
            )
}

export default RegisterForm;