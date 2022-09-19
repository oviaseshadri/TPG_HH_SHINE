import { BrowserRouter, Route, Link,Routes } from 'react-router-dom';
import Dashboard from './Dasboard';
import Profile from './Profile';
import RegisterForm from './RegisterForm';
import UploadForm from './UploadForm';
import React,{useState} from 'react';

const App = () => {

    
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="" element={<Dashboard />}></Route>
                <Route path='/RegisterForm' element={<RegisterForm/>}></Route>
                <Route path='/UploadForm' element={<UploadForm/>}></Route>
                <Route path='/Profile' element={<Profile/>}></Route>
            </Routes>
            </BrowserRouter>
            
            
        </div>
        
    )
}

export default App;