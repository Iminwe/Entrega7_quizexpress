var express = require('express');
var router = express.Router();

var quizzes = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Créditos' });
});

router.get('/quizzes', quizzes.index);

module.exports = router;
