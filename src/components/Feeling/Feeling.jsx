import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Feeling( props ){
    const dispatch = useDispatch();
    //feedback is an object which holds all our ratings as key-value pairs

    const feedback = useSelector(store => store.feedback);

    const[ feeling, setFeeling ]=useState( feedback.feeling || '3' ); //capture feedback input

    const onFeelingChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        
        setFeeling( event.target.value );
        console.log( 'feeling:', feeling );
    }

    const dispatchThisToFeedbackStore = () => { //button click handler
        console.log('clicked next' );
        dispatch( { type: 'ADD_FEEDBACK',  payload: {feeling: feeling} } ) 
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