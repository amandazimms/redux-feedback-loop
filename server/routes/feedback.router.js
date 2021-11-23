const express = require('express');
const router = express.Router();
const pool = require( '../modules/pool' ); 

router.post('/', (req, res) => {
    //posts the feedback to the db. $ to sanitize.
    console.log( 'POST route hit');
    let queryString = 'INSERT INTO feedback ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 )';
    let values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
    pool.query( queryString, values ).then( (results)=>{
        res.sendStatus( 201 )
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
});


module.exports = router;