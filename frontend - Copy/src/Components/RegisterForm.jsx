import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

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
        <>
            <h1>REGISTER FORM</h1>
            <label className="dp_label"></label><br></br>
            <input className="dp_input" type="file"
            onChange={selectFile}></input>
            {isDpSelected ? (
				<div>
					<p>Filename: {selectDp.name}</p>
	
				</div>
			) : (
				<p>Select profile picture</p>
			)}
            <br></br>

            <input 
                className="dname_input" type="text" placeholder="Display Name" value={dname} 
                onChange={(e) => setDname(e.target.value)}>
            </input><br></br>
            <input 
                className="uname_input" type="text" placeholder="@Username" value={uname}
                onChange={(e) => setUname(e.target.value)}>
            </input><br></br>
            <input 
                className="bio_input" type="text" placeholder="Bio" value={bio}
                onChange={(e) => setBio(e.target.value)}>
            </input><br></br>
            <input 
                className="email_input" type="email" placeholder="Your Email" value={email}
                onChange={(e) => setEmail(e.target.value)}>
            </input><br></br>
            <h3>SOCIAL LINKS</h3>
            <input 
                className="website_input" type="url" placeholder="Website" value={website}
                onChange={(e) => setWebsite(e.target.value)}>
            </input><br></br>
            <input 
                className="twi_input" type="url" placeholder="Twitter" value={twitter}
                onChange={(e) => setTwitter(e.target.value)}>
            </input><br></br>
            <input 
                className="wallet_addr" placeholder={wallet_addr}>
            </input><br></br>
            <button name="Register" onClick={submit}> Register </button>
        </>
    )
}

export default RegisterForm;