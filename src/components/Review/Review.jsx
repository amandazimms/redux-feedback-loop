import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Review( props ){
    const feedback = useSelector(store => store.feedback);
    //feedback is an object which holds all our ratings as key-value pairs

    const dispatch = useDispatch();


    const postFeedback = () => {
        //send our feedback to the db
        axios.post( `/feedback`, feedback ).then( (response)=>{
            dispatch({ type: 'EMPTY'}); //empty object empties out the store
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
            {/* in this case the back button doesn't need to save/do anything 
            since the feedback was already saved to the store, and we're not posting */}
            <Button onClick={postFeedback}> <Link to="/success">Submit</Link> </Button>
        </div>
    )
}

export default Review;