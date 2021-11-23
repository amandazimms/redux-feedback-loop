import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Understanding( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

    const[ understanding, setUnderstanding ]=useState( feedback.understanding || 3 ); //capture feedback input

    const onUnderstandingChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        
        setUnderstanding( event.target.value );
        console.log( 'understanding:', understanding );
    }

    const dispatchThisToFeedbackStore = () => { //button click handler
        console.log('clicked next' );
        dispatch( { type: 'ADD_FEEDBACK',  payload: {understanding: understanding } } ) 
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