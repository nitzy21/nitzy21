const {createPool} = require('mysql')

const express = require('express');
const app = express();
const cors = require('cors');
// var router = express.Router();
// var db=require('../innovators');

app.use(cors());
app.use(express.json());

app.listen(3000, ()=>{
    console.log('yayy server running on port 3000');
});

const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    connectionLimit: 10,
})

app.get('/grrrr', (req, res) => {
    pool.query(`SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
    FROM centie.innovators
    WHERE innovator_like = (SELECT MAX(innovator_like) FROM centie.innovators) LIMIT 1;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/innovdb', (req, res) => {
    pool.query(`SELECT * FROM centie.innovators`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/featuredinnov', (req, res) => {
    pool.query(`SELECT  * FROM centie.innovators WHERE innovator_isTop = false LIMIT 3;`, (err, result)=>{
        if(err) {
            return console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.put('/updateLike', (req, res) => {
   const id = req.body.id;

   console.log(req.body);
   pool.query('UPDATE centie.innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = ?', [id] ,
   (err, result) => {
        if(err) {
            return console.log(err);
        } else {
           res.send(result);
        }
   });
   
});


pool.query(`SELECT * FROM centie.innovators`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
         res.forEach( (res) => {
            console.log(`${res.innovator_lname} title is  ${res.innovator_title}`);
          });
    }
});

pool.query(`SELECT  innovator_id, innovator_fname, innovator_lname, innovator_story, innovator_date, innovator_picture
FROM centie.innovators
WHERE innovator_like = (SELECT MAX(innovator_like) FROM centie.innovators) LIMIT 1;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

pool.query(`SELECT  * FROM centie.innovators WHERE innovator_isTop = false LIMIT 3;`, (err, res)=>{

    if(err) {
        return console.log(err);
    } else {
        // return console.log(res);
        console.log(res);
    }
});

// pool.query('UPDATE centie.innovators SET innovator_like = innovator_like + 1 WHERE innovator_id = 6;' ,
// (err, result) => {
//      if(err) {
//          return console.log(err);
//      } else {
//         res.send(result);
//      }
// });