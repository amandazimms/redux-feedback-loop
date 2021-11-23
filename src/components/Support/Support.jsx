import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Support( props ){
    const feedback = useSelector(store => store.feedback);
    //feedback is an object which holds all our ratings as key-value pairs

    const dispatch = useDispatch();

    const[ support, setSupport ]=useState( feedback.support || 3 ); //capture feedback input

    const onSupportChange = () =>{ //input capture
        setSupport( event.target.value );
    }


    const dispatchThisToFeedbackStore = () => { 
        //needs to when either next/back are clicked, to make sure user's choices are saved no matter what
        dispatch( { type: 'ADD_FEEDBACK',  payload: {support: support} } ) 
        // if payloads are sent as key-value pairs, it simplifies the number of ifs in index.js
    }

    return(
        <div>
            <h1>How well are you being supported?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5", defaultValue: feedback.support || '3' }} onChange={(event ) =>onSupportChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/understanding">BACK</Link> </Button>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/comments">NEXT</Link> </Button>
        </div>
    )
}

export default Support;