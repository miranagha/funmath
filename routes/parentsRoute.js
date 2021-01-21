var express = require('express');
var router = express.Router();
var KidssMd = require('../Models/KidssMd');
var passport = require('passport');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

/* GET users listing. */
router.get('/', function(req, res, next) {
  KidssMd.find()
  .populate('kids')

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


  KidssMd.create(req.body)
            .then((product) => {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            }, (err) => next(err))
            
            .catch((err) => next(err));
    });

    // router.post("/uploadImages/:id", upload.single('images'), (req, res, next) => {
  
    //     console.log(req.file);   

    //         if(!req.file){
 
    //         }else{
    
    //           req.body.images=req.file.filename;
    
    //           console.log(req.body.images);
    
    //         }     

    //         console.log(req.body );
    //         KidssMd.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
    //         .then((hero) => {
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'application/json');
    //             res.json(hero);
    //         }, (err) => next(err))
    //         .catch((err) => next(err));
    
    //           });
    

// Get News By Id 
router.route('/:id')
.get((req, res, next) => {
  KidssMd.findById(req.params.id)
      .then((kids) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(kids);
      }, (err) => next(err))
      .catch((err) => next(err));
})


// Get News By Id 
router.route('/findByParentId/:id')
.get((req, res, next) => {
  KidssMd.find({ "parentName":req.params.id})
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
  
  KidssMd.findByIdAndDelete(req.params.id)
        .then((reply) => {

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reply);
        }, (err) => next(err))
        .catch((err) => next(err));
})

module.exports = router;
