import * as common from '../../common/common';
import * as constants from '../../common/constants';
import { Button,IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "./header.css"

function Header() {
    const heading = "Resume Builder";
    const subHeading = "Welcome to my resume builder project, go ahead and use it to create a resume";
    return (
    <div className='topBar'>
        <IconButton color='inherit' aria-label='menu'>
            <MenuRoundedIcon />
        </IconButton>
        <div>
            <div className="heading">
                {heading}    
            </div>
            {subHeading && <div className="subHeading">
                {subHeading}
            </div>}
        </div>
        {common.isLoggedin() ? 
            <Button variant='text' color='inherit'>
                {constants.LOGIN}
            </Button>
            :
            <Button variant='text' color='inherit'>
                {common.getUserName()}
            </Button>
        }
    </div>
    );
}

export default Header;