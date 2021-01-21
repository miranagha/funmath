var express = require('express');
var router = express.Router();
var Admin = require('../Models/AdminMd');


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../auth');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//register user 
router.post('/signup', (req, res, next) => {
  let password = req.body.password;
  bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
          let err =  new Error('Could not hash!');
  err.status = 500;
  return next(err);
      }
      console.log(hash);
      Admin.create({
        fullname:req.body.fullname,
        age:req.body.age,
        gender:req.body.gender,
        username: req.body.username,

          // gender:req.body.gender,
          email:req.body.email,
          usertypes:req.body.usertypes,
          password: hash,
         
         
          
                  
          
      }).then((user) => {
          let token = jwt.sign({ _id: user._id }, process.env.SECRET);
          res.json({ status: "Signup success!", token: token });
      }).catch(next);
  });
});

//Login user 
router.post('/login', (req, res, next) => {
  console.log(req.body.username )

  let userId;
  Admin.findOne({ username: req.body.username })
      .then((user) => {
          if (user == null) {

          
            
              let err = new Error('User not found!');
              err.status = 401;
              return next(err);
          } else {
              bcrypt.compare(req.body.password, user.password)
                  .then((isMatch) => {
                      if (!isMatch) {
                          let err = new Error('Password does not match!');
                          err.status = 401;
                          return next(err);
                      }
                      console.log({_id: user._id});
                      let token = jwt.sign({ _id: user._id }, process.env.SECRET);
                      res.status(200  )
                      userId=user._id;
                      res.json({code:200, status: 'Login success!', token: token, userId:userId  });
                  }).catch(next);
          }
      }).catch(next);     
});


  router.get('/logout',(req, res, next) => {
    if (req.user) {
      console.log(req.session);
      req.session.destroy();
      res.clearCookie('session-id');
      console.log("Logout Sucessfull");
      res.statusCode = 200;
      res.end();
    //   res.setHeader('Content-Type', 'application/json');
    // res.json({ success: true, status: 'You are successfully logged out!' });
      // res.send("Logout Success");
     
    } else {
      let err = new Error('You are not logged in!');
      err.status = 403;
      next(err);
    }
  });



  // get user data
router.get('/me', auth.verifyUser, (req, res, next) => {
  console.log(req.user)
  res.json({
    
    _id: req.user._id,
    fullname:req.user.fullname,
    age:req.user.age,
    gender:req.user.gender,
    username: req.user.username,
     email:req.user.email,
    password: req.user.password
  
  
  });
      //gender: req.user.gender,
});


module.exports = router;
