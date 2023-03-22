import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import {Button, Input, InputLabel} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";

import { useAppDispatch } from "../../app/hooks";
import { updateData } from "../../reducers/resumeSlice";

function Skills() {
    const [skills, setSkills] = useState([] as Array<string>);
    const [formattedSkills, setFormattedSkills] = useState([] as Array<JSX.Element>);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const onSubmit = (data:any, e:any) => {
        dispatch(updateData({data:skills,key:'skills'}));
        //store date in state via redux
        return navigate('/templates')
    };
    const onError = (errors:any, e:any) => console.log(errors, e);

    useEffect(()=>{
        setFormattedSkills(formatSkillsArr(skills));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[skills]);

    const handleAddSkill = (event:any) => {
        const value = event.target.form?.[0]?.value;
        if(value && !skills.includes(value)){
            let newArr = skills;
            newArr.push(value);
            setSkills(newArr);
        }
    }

    const handleRemoveSkill = (item:string) => {
        let newArr = skills.filter(skill=> (skill !== item) );
        setSkills(newArr);
    }

    const formatSkillsArr = (skillsArr:string[]) => {
        let formattedArr = [] as Array<any>;    
        skillsArr.forEach((skill:string,index) => {
                formattedArr.push(
                <Button 
                key={`skills_${index}`} 
                className='button-spread' 
                onClick={()=>handleRemoveSkill(skill)}
                >
                    {skill}
                    <RemoveIcon color="error" />
                </Button>)
            });
        return formattedArr;
    }

    return (
        <div className="container">
            <h3>Skills</h3>
            <form onSubmit={handleSubmit(onSubmit,onError)} className="form_container">
                <InputLabel htmlFor='skill'>Skill</InputLabel>
                <Input placeholder="Add skill here" {...register("skills")} />
                <Button onClick={handleAddSkill}><AddIcon /> Add Skill</Button>
                <br/>
                {formattedSkills}
                <br/>
                <Button 
                    type="submit" 
                    variant="outlined"
                    className="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Skills;