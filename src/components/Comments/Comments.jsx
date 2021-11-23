import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Comments( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ comments, setComments ]=useState( 0 ); //capture feedback input

    const onCommentsChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setComments( event.target.value );
        console.log( 'comments:', comments );
    }


    const nextButton = () => { 
        console.log('clicked next' );
        dispatch( { type: 'ADD_COMMENTS',  payload: comments } ) 
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <TextField type="text" multiline maxRows={6} style={{ width: 500}} onChange={(event ) =>onCommentsChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={nextButton}> <Link to="/google">NEXT</Link> </Button>
        </div>
    )
}

export default Comments;