import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Comments( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

    const[ comments, setComments ]=useState( feedback.comments || '' ); //capture feedback input

    const onCommentsChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setComments( event.target.value );
        console.log( 'comments:', comments );
    }


    const dispatchThisToFeedbackStore = () => { 
        console.log('clicked next' );
        dispatch( { type: 'ADD_FEEDBACK',  payload: {comments: comments} } ) 
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