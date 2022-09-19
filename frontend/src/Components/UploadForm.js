import React , { useState }  from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const UploadForm = () =>{


    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [ctype,setCType] = useState("free");
    const [visible,setVisible] = useState(true);
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const navigate = useNavigate();

    const selectFile = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    const upload = async(event) => {

        event.preventDefault();
        const userData = {title : title, desc : desc , selectedFile : selectedFile.name};
        console.log(userData);
        navigate("/Profile");
    }
    return(
        <>
            <Navbar/>
            <h1>UPLOAD FORM</h1>
            <form className="form-custom">
                
                <div>
                    <label className="form-label">Upload file</label><br></br>
                    <input className="form-control form-control-sm" type="file" onChange={selectFile}></input><br></br>
                </div>
                

                <label className="form-label">Title</label><br></br>
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input><br></br>

                <label className="form-label">Description</label><br></br>
                <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea><br></br>

                <label className="form-label">
                    <input type="radio" value="Free" name="content-type" /> Free
                </label>
                <label className="form-label">
                    <input type="radio" value="Premium" name="content-type" /> Premium
                </label><br></br>
                <button name="Submit" className="btn btn-lg" onClick={upload}> Submit </button>

            </form>
            
        </>
    )
}

export default UploadForm;