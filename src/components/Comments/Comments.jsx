import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Comments( props ){
    const feedback = useSelector(store => store.feedback);
    //feedback is an object which holds all our ratings as key-value pairs

    const dispatch = useDispatch();

    const[ comments, setComments ]=useState( feedback.comments || '' ); //capture feedback input

    const onCommentsChange = () =>{ //input capture
        setComments( event.target.value );
    }


    const dispatchThisToFeedbackStore = () => { 
        //needs to when either next/back are clicked, to make sure user's choices are saved no matter what
        dispatch( { type: 'ADD_FEEDBACK',  payload: {comments: comments} } ) 
        // if payloads are sent as key-value pairs, it simplifies the number of ifs in index.js
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <TextField type="text" multiline maxRows={6} style={{ width: 500}} inputProps={{ defaultValue: feedback.comments || ''}} onChange={(event ) =>onCommentsChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/support">BACK</Link> </Button>
            <Button onClick={dispatchThisToFeedbackStore}> <Link to="/review">NEXT</Link> </Button>
        </div>
    )
}

export default Comments;