var express = require('express');
var router = express.Router();
var ResultsMd = require('../Models/QuestionsModel');
var passport = require('passport');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

/* GET users listing. */
router.get('/', function(req, res, next) {
  ResultsMd.find()
  .populate('Result')

      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));

});

// POST API FOr Adding Children details
router.post("/",  (req, res, next) => {    
    
  console.log(req.body );
  ResultsMd.create(req.body)
            .then((product) => {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            }, (err) => next(err))
            
            .catch((err) => next(err));
    });

// Get News By Id 
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


// Delete The Kids Id

router.route('/:id')

.delete((req, res, next) => {
  
  ResultsMd.findByIdAndDelete(req.params.id)
        .then((reply) => {

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reply);
        }, (err) => next(err))
        .catch((err) => next(err));
})



  // Update and Post By Id
  router.put('/:id',(req, res, next) => {
  
    
    NewsMd.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
      .then((questions) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(questions);
      }, (err) => next(err))
      .catch((err) => next(err));


});


// Get By Level-1 or Easy
router.route('/getByLevel/:text')
.get((req, res, next) => {
  ResultsMd.find({level:req.params.text})
      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));
});



module.exports = router;
