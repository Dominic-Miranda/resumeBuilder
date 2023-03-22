import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useEffect,useState } from "react";
import { getLocalData } from "../common/common";
import { initialLoad } from "../reducers/resumeSlice";

function Home() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [buttonLabel,setButtonLabel] = useState('Build');
    useEffect(()=>{
        let resume = getLocalData('resume');
        if(resume){
            dispatch(initialLoad(resume));
            setButtonLabel("Templates");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const handleClick = () => {
        if(buttonLabel==='Templates'){
            return navigate('/templates')
        }
        return navigate('/form')
    }
    return (
    <div className="container">
        <h3>Welcome To my resume builder :)</h3>
        <p>Get Started with building your resume</p>
        <Button variant="outlined" onClick={handleClick}>{buttonLabel}</Button>
    </div>
    );
}

export default Home;