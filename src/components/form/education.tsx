import { Input, Button, TextField, InputLabel,Box, FormGroup, IconButton} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, } from "../../app/hooks";
import { updateData } from "../../reducers/resumeSlice";

function Education() {
    const [fieldCount, setFieldCount] = useState(2);
    const [formFields, setFormFields] = useState([] as Array<JSX.Element>);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = (data:any, e:any) => {
        const preparedData = prepareData(data);
        dispatch(updateData({data:preparedData,key:'education'}));
        //store date in state via redux
        return navigate('/experience')
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
            <h4>Education Field - {index}</h4>
            <TextField 
                id={`institute${index}`} 
                variant="standard" 
                label="Institute" 
                size="small" 
                {...register(`institute${index}`,{required:`Institute${index} not entered`})} 
                required 
                aria-required
            />
            <br />
            <TextField 
                id={`degree${index}`} 
                variant="standard" 
                label="Degree" 
                size="small" 
                {...register(`degree${index}`,{required:'Degree not entered'})} 
                required 
                aria-required
            />
            <br/>
            <Box display={"inherit"} gap='10px'>
                <div>
                    <InputLabel htmlFor={`from${index}`}>From</InputLabel>
                    <Input 
                        id={`from${index}`} 
                        type="date"
                        {...register(`from${index}`,{required: true,})} 
                        required
                        aria-required
                        />
                </div>
                <div>
                    <InputLabel htmlFor={`to${index}`}>To</InputLabel>
                    <Input 
                        id={`to${index}`} 
                        type="date"
                        {...register(`to${index}`,{required: true,})} 
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
                institute:data[`institute${index}`],
                degree:data[`degree${index}`],
                from:data[`from${index}`],
                to:data[`to${index}`],
            })
        }
        return structuredData;
    }

    return (
        <div className="container">
            <h3>2. Education Details</h3>
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

export default Education;