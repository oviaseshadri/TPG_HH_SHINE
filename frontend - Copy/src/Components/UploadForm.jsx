import React , { useState }  from "react";
import { useNavigate } from "react-router-dom";

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
            <h1>UPLOAD FORM</h1>
            <label className="label">Upload file</label><br></br>
            <input className="input" type="file" onChange={selectFile}></input><br></br>
            {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}

            <label className="label">Title</label><br></br>
            <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input><br></br>

            <label className="label">Description</label><br></br>
            <input className="input" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"></input><br></br>

            <label>
                <input type="radio" value="Free" name="content-type" /> Free
            </label>
            <label>
                <input type="radio" value="Premium" name="content-type" /> Premium
            </label><br></br>
            <button name="Register" onClick={upload}> Submit </button>
        </>
    )
}

export default UploadForm;