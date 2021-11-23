import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


function Feeling( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();

    const[ feeling, setFeelingInput ]=useState( 0 ); //capture feedback input

    const handleInput = () =>{ //input capture
        console.log( 'in handleInput:', event.target.value);
        
        setFeelingInput( event.target.value );
        console.log( 'feelingInput:', feeling );
            if( event.target.value > 0 && event.target.value < 6 ){
                setLink( true )} //making sure input is between 1 and 5
            else {
                setLink( false );
        }
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <TextField type="number" inputProps={{ min: "1", max: "5" }} onChange={(event ) =>handleInput ( event )}></TextField>
            <Button>Next</Button>
            {/* <p> props: { JSON.stringify( props ) } </p> */}
        </div>
    )
}

export default Feeling;