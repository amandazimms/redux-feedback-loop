import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Understanding( props ){
    const feedback = useSelector(store => store.feedback);
    //feedback is an object which holds all our ratings as key-value pairs

    const dispatch = useDispatch();

    const[ understanding, setUnderstanding ]=useState( feedback.understanding || 3 ); //capture feedback input

    const onUnderstandingChange = () =>{ //input capture
        setUnderstanding( event.target.value );
    }

    const dispatchThisToFeedbackStore = () => { //button click handler
        //needs to when either next/back are clicked, to make sure user's choices are saved no matter what
        dispatch( { type: 'ADD_FEEDBACK',  payload: {understanding: understanding } } ) 
        // if payloads are sent as key-value pairs, it simplifies the number of ifs in index.js

    }

    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5", defaultValue: feedback.understanding || '3' }} onChange={(event ) =>onUnderstandingChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/">BACK</Link> </Button>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/support">NEXT</Link> </Button>
        </div>
    )
}

export default Understanding;