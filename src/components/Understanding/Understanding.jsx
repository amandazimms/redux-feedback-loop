import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Understanding( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ understanding, setUnderstanding ]=useState( 0 ); //capture feedback input
    const [ link, setLink ] = useState(false); //conren for button link

    const onUnderstandingChange = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        
        setUnderstanding( event.target.value );
        console.log( 'understanding:', understanding );
            if( event.target.value > 0 && event.target.value < 6 ){
                setLink( true )} //making sure input is between 1 and 5
            else {
                setLink( false );
        }
    }

    const nextButton = () => { //button click handler
        console.log('clicked next' );
        dispatch( { type: 'ADD_UNDERSTANDING',  payload: understanding } ) 
    }

    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>onUnderstandingChange ( event )}></TextField>
            <Button onClick={nextButton}> <Link to="/understanding">NEXT</Link> </Button>
        </div>
    )
}

export default Understanding;