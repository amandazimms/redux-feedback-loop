const express = require('express');
const router = express.Router();
const pool = require( '../modules/pool' ); 

// POST Route
router.post('/', (req, res) => {
    console.log( 'POST route hit');
    let queryString = 'INSERT INTO feedback ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 )';
    let values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
    pool.query( queryString, values ).then( (results)=>{
        res.sendStatus( 201 )
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END POST Route

// //GET route
// router.get('/', (req, res) => {
//     console.log('GET /feedback');
//     pool.query('SELECT * from "feedback" ORDER BY date DESC;').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /feedback', error)
//         res.sendStatus(500);
//     });
// }) // end GET route

// //DELETE route
// router.delete('/:id', (req, res) => {
//     pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log('Error DELETE /feedback', error);
//         res.sendStatus(500);
//     })
// }); //end DELETE route

// //PUT route
// router.put( '/:id', ( req, res )=>{
//     console.log( 'PUT route hit');
//     pool.query( 'UPDATE "feedback" SET flagged=true WHERE id=$1', [req.params.id]).then((results)=>{
//         res.sendStatus( 200 );
//     }).catch( (err)=>{
//         console.log( err );
//         res.sendStatus( 500 );
//     }) 
// });


module.exports = router;