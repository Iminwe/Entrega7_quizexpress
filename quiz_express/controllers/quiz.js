var models = require('../models').models;

exports.index = async function(req, res, next) {
    let quizzes = await models.Quiz.findAll();
    res.render('quizzes/index', { 
        title: 'Lista de Quizzes', 
        quizzes: quizzes});
};
