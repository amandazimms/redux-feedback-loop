import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Success( props ){
    

    return(
        <div>
            <h1>Thank You!</h1>
            <h2>Your feedback has been submitted.</h2>
            <br/>
            <br/>
            <Button> <Link to="/">Leave More Feedback</Link> </Button>
            {/* (returns to 'feeling' default/beginning page) */}
        </div>
    )
}

export default Success;