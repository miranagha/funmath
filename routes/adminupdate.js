var express = require('express');
var router = express.Router();
var Admin = require('../Models/AdminMd');


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../auth');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });




  // get user data
  router.put('/', auth.verifyUser, (req, res, next) => {
  
    
    Admin.findByIdAndUpdate(req.user.id, { $set: req.body }, { new: true, useFindAndModify: false })
        .then((hero) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(hero);
        }, (err) => next(err))
        .catch((err) => next(err));


  });

  /* GET users listing. */
router.get('/', function(req, res, next) {
  Admin.find()
  .populate('admins')

      .then((user) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));

});


// Get NewsById 
router.route('/findByParents')
.get((req, res, next) => {
  Admin.find({"usertypes": "parent"})
      .then((user) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user);
      }, (err) => next(err))
      .catch((err) => next(err));
});





module.exports = router;
