import { Input, Button, TextField, InputLabel, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Personal() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data:any, e:any) => {
        console.log(data, e)
        return navigate('/education');
    };
    const onError = (errors:any, e:any) => console.log(errors, e);

    return (
        <div className="container">
            <h3>1. Personal Details</h3>
            <form onSubmit={handleSubmit(onSubmit,onError)} className="form_container">
                    <TextField 
                        id="firstName" 
                        variant="standard" 
                        label="First Name" 
                        size="small" 
                        {...register('firstName',{required:'First Name not entered'})} 
                        required 
                        aria-required
                    />
                    <br />
                    <TextField 
                        id="lastName" 
                        variant="standard" 
                        label="Last Name" 
                        size="small" 
                        {...register('lastName',{required:'Last Name not entered'})} 
                        required 
                        aria-required
                    />
                    <br/>
                    <InputLabel htmlFor='dob'>Date of Birth</InputLabel>
                    <Input 
                        id="dob" 
                        type="date"
                        {...register('dob',{valueAsDate: true,})} 
                        required
                        aria-required
                    />
                    <br/>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            >
                            <FormControlLabel value="female" control={<Radio />} label="Female" {...register('gender')}/>
                            <FormControlLabel value="male" control={<Radio />} label="Male" {...register('gender')}/>
                            <FormControlLabel value="other" control={<Radio />} label="Other" {...register('gender')}/>
                        </RadioGroup>
                    </FormControl>
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

export default Personal;