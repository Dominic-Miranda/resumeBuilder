import {Button} from "@mui/material"
import axios from "axios";
import {saveAs} from "file-saver";
import { getResumeData } from "../../reducers/resumeSlice";
import { useAppSelector } from "../../app/hooks";

function Templates() {
    const resume = useAppSelector(getResumeData);
    const createResumePdf = () => {
        axios.post('/create-pdf', resume)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, `${resume.personalDetails.firstName}_Resume.pdf`);
      })
    }
    return (
        <div className="container">
            <h3>Template</h3>
            <h5>Pick a Template</h5>
            <Button onClick={createResumePdf}>Default</Button>
        </div>
    );
}

export default Templates;