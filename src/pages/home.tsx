import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate('/form')
    }
    return (
    <div className="container">
        <h3>Welcome To my resume builder :)</h3>
        <p>Get Started with building your resume</p>
        <Button variant="outlined" onClick={handleClick}>Build</Button>
    </div>
    );
}

export default Home;