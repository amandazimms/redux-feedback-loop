import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Review( props ){
    // const[ name, setName ]=useState( null );
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();


    const postFeedback = () => {
        axios.post( `/feedback`, feedback ).then( (response)=>{
            dispatch({ type: 'EMPTY'}); //empty array empties out the store
        }).catch((err)=>{
             alert('error with post');
             console.log(err);
        });
    }

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {JSON.stringify(feedback)}</p>
            <p>Understanding: {feedback[1]}</p>
            <p>Support: {feedback[2]}</p>
            <p>Comments: {feedback[3]}</p>
            <Button onClick={postFeedback}>Submit</Button>
        </div>
    )
}

export default Review;