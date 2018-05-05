var express = require('express');
const {models} = require('../models/index');
const Sequelize = require('sequelize');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.use(express.static(__dirname + '/public'));

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Créditos' });

});

router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll({})
  	.then(quizzes => {
  		//res.send(' Lista de Quizzes' + quizzes);
  		res.render('quizzes/index', { title: 'Quizzes', quizzes: quizzes});
 	 });
  

});

//const indexController = (req, res, next) => {
//	res.render('credits', { title: 'Creditos' });
//};

module.exports = router;
