import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Feeling( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ feeling, setFeeling ]=useState( 0 ); //capture feedback input

    const onFeelingChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        
        setFeeling( event.target.value );
        console.log( 'feeling:', feeling );
    }

    const nextButton = () => { //button click handler
        console.log('clicked next' );
        dispatch( { type: 'ADD_FEELING',  payload: feeling } ) 
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5", defaultValue: "3" }} onChange={(event ) =>onFeelingChange ( event )}></TextField>
            <br/>
            <br/>
            <Button onClick={nextButton}> <Link to="/understanding">NEXT</Link> </Button>
        </div>
    )
}

export default Feeling;