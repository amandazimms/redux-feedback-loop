import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Support( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ support, setSupport ]=useState( 0 ); //capture feedback input

    const onSupportChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        setSupport( event.target.value );
        console.log( 'support:', support );
    }


    const nextButton = () => { 
        console.log('clicked next' );
        dispatch( { type: 'ADD_SUPPORT',  payload: support } ) 
    }

    return(
        <div>
            <h1>How well are you being supported?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>onSupportChange ( event )}></TextField>
            <Button onClick={nextButton}> <Link to="/google">NEXT</Link> </Button>
        </div>
    )
}

export default Support;