import { Input, Button, TextField, InputLabel,Box, FormGroup, IconButton, FormControl, Select, MenuItem} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Experience() {
    const [fieldCount, setFieldCount] = useState(2);
    const [formFields, setFormFields] = useState([] as Array<JSX.Element>);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data:any, e:any) => {
        const preparedData = prepareData(data);
        console.log(preparedData)
        //store date in state via redux
        return navigate('/skills')
    };
    const onError = (errors:any, e:any) => console.log(errors, e);
    
    useEffect(()=>{
        setFormFields(createForm(fieldCount));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[fieldCount])

    const handleAddField = () => {
        setFieldCount(fieldCount+1);
    }

    const handleRemoveField = () => {
        setFieldCount(fieldCount-1)
    }

    const createForm = (count:number) => {
        let form = [];
        for(let index = 1; index <= count; index++){
            form.push(<FormGroup className="formGroup" key={`education_field_${index}`}>
            <h4>Experience Field - {index}</h4>
            <TextField 
                id={`company${index}`} 
                variant="standard" 
                label="Company" 
                size="small" 
                {...register(`company${index}`,{required:`Company${index} not entered`})} 
                required 
                aria-required
            />
            <br />
            <TextField 
                id={`role${index}`} 
                variant="standard" 
                label="Role" 
                size="small" 
                {...register(`role${index}`,{required:'Role not entered'})} 
                required 
                aria-required
            />
            <br/>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="employmentType-label">Employment Type</InputLabel>
                <Select
                labelId="employmentType-label"
                id="employmentType"
                label="employmentType"
                variant="standard"
                {...register(`employmentType${index}`,{required:'Employment Type not selected'})}
                defaultValue="Full Time"
                required 
                aria-required
                >
                <MenuItem value={'Full Time'}>Full Time</MenuItem>
                <MenuItem value={"Part Time"}>Part Time</MenuItem>
                <MenuItem value={"Internship"}>Internship</MenuItem>
                </Select>
            </FormControl>
        </Box>
            <br/>
            <Box display={"inherit"} gap='10px'>
                <div>
                    <InputLabel htmlFor={`from${index}`}>From</InputLabel>
                    <Input 
                        id={`from${index}`} 
                        type="date"
                        {...register(`from${index}`,{valueAsDate: true,})} 
                        required
                        aria-required
                        />
                </div>
                <div>
                    <InputLabel htmlFor={`to${index}`}>To</InputLabel>
                    <Input 
                        id={`to${index}`} 
                        type="date"
                        {...register(`to${index}`,{valueAsDate: true,})} 
                        required
                        aria-required
                        />
                </div>
            </Box>
            <br/>
            <IconButton onClick={handleRemoveField} style={{borderRadius:"0px"}}><RemoveCircleIcon color="error" /></IconButton>
        </FormGroup>
        )
        }
        return (form)
    }

    const prepareData = (data:any) => {
        let structuredData = [] as Array<Object>;
        for(let index = 1; index <= fieldCount; index++){
            structuredData.push({
                company:data[`company${index}`],
                role:data[`role${index}`],
                employmentType:data[`employmentType${index}`],
                from:data[`from${index}`],
                to:data[`to${index}`],
            })
        }
        return structuredData;
    }

    return (
        <div className="container">
            <h3>3. Experience</h3>
            <form onSubmit={handleSubmit(onSubmit,onError)} className="form_container">
                {formFields}
                <IconButton onClick={handleAddField} style={{borderRadius:"0px"}}><AddCircleIcon color="primary" /></IconButton>
                <br/>
                <Button 
                    type="submit" 
                    variant="outlined"
                    className="submit"
                >
                    Next
                </Button>
            </form>
        </div>
    );
}

export default Experience;