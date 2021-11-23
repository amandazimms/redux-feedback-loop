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
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <Button > <Link to="/comments">Back</Link> </Button>
            <Button onClick={postFeedback}> <Link to="/success">Submit</Link> </Button>
        </div>
    )
}

export default Review;