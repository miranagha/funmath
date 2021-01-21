var express = require('express');
var router = express.Router();
var ResultsMd = require('../Models/ResultModel');
var passport = require('passport');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

/* GET Result listing. */
router.get('/', function(req, res, next) {
  ResultsMd.find()
  .populate('Questions')

      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));

});

// POST API FOr Adding Children details
router.post("/",  (req, res, next) => {    
    

    if(req.body.totalright<=4){
        req.body.status="fail";
    }else if(req.body.totalright <=6){
      req.body.status="Pass";
    
  }else if(req.body.totalright <=10){
      req.body.status="Excellent";
    }
  
    
  console.log(req.body );
  ResultsMd.create(req.body)
            .then((product) => {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            }, (err) => next(err))
            
            .catch((err) => next(err));
    });

// Get Result By Id 
router.route('/:id')
.get((req, res, next) => {
  ResultsMd.findById(req.params.id)
      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));
})


// Delete Result By Id

router.route('/:id')

.delete((req, res, next) => {
  
  ResultsMd.findByIdAndDelete(req.params.id)
        .then((reply) => {

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reply);
        }, (err) => next(err))
        .catch((err) => next(err));
});


// Get Result By User Id
router.route('/getByUserId/:id')
.get((req, res, next) => {
  ResultsMd.find({userId:req.params.id}).sort({ _id: -1 })
      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));
})



module.exports = router;
