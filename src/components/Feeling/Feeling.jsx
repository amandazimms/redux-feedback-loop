import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PieChartSharp } from '@material-ui/icons';


function Feeling( props ){
    const dispatch = useDispatch();
    //feedback is an object which holds all our ratings as key-value pairs

    const feedback = useSelector(store => store.feedback);

    const[ feeling, setFeeling ]=useState( feedback.feeling || '3' ); //capture feedback input

    const onFeelingChange = () =>{ //input capture        
        setFeeling( event.target.value );
    }

    const dispatchThisToFeedbackStore = () => { //button click handler
        dispatch( { type: 'ADD_FEEDBACK',  payload: {feeling: feeling} } ) 
        // if payloads are sent as key-value pairs, it simplifies the number of ifs in index.js
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5", defaultValue: feedback.feeling || '3' }} onChange={(event ) =>onFeelingChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/understanding">NEXT</Link> </Button>
        </div>
    )
}

export default Feeling;