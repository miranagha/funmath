//apiTest.js
const request = require('supertest');
const app = require('../app');


const user={
    "firstname":"aa1",
   "lastname":"aa1",
  "username": "rupesh1",
  "email":"aa@gmail.com",
    "password": "rupesh1"
             
  }


  // 1 -------------------- Signup Testing ---------------------------


describe('Login User with Credentials || Post s', () => {
    it('Login User with Credentials || Post s', async () => {
      const res = await request(app)
        .post('/users/signup')
        .send({
            username: 'rupesh1',
              password: 'rupesh1',
              firstname:'aa1',
              lastname:'aa1',
              email:'aa@gmail.com'

        })
        .expect(200)
      })
    })


// // 2 -------------------- Login Testing---------------------------


describe('Login User with Credentials || Post s', () => {
    it('Login User with Credentials || Post s', async () => {
      const res = await request(app)
        .post('/users/login')
        .send({
            username: 'rupesh',
              password: 'rupesh'
        })
        .expect(200)
      })
    })



// 3

describe('GET Specific News By Id from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the Post API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/usersnews/')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 4


describe('GET Specific News By Id from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the Post API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/usersnews/5f39054c41a1ef68bc9cae70')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 5


describe('GET ALl Polls from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the Post API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/userspolls')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 6


describe('GET ALl Polls By Id from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the POLLS API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/userspolls/5f39531d5ec41b0a7c2c5bff')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 7 ---------------  INcrease the VIew of Posts -----------------------


describe('INcrease the VIew of Posts  from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the News API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .put('/usersnews/5f39066541a1ef68bc9cae71')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 8 --------------------------- Increase the Polls LIke ------------------



describe('Liking The Polls just like like of other social Media from the  Database', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the POLLS API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .put('/userspolls/5f39531d5ec41b0a7c2c5bff')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});



// 9 ------------------------  Searching News By Users ---------------

describe('SSearching the News from the  Database From User Point Of View', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the News API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/usersnews/searchNews/Transfer')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});


// 10 -----------------------  Categorizing the News or Sorting BY News Type ---------------

describe('Categorizing the News or Sorting BY News Type   Database From User Point Of View', function () {

    this.timeout(3000) // all tests in this suite get 10 seconds before timeout
    it('Getting  all the News API Test ==  with 200 as response is sucessfully', function (done) {   
       
                request(app)           
            .get('/usersnews/categorize/Healths')
         .set(/json/)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
          
            .expect(function(res) {
                })
            ;
    });
});