const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller'); 

console.log('Router Loaded');

router.get('/',homeController.home);
router.post('/create/',homeController.createTodo);
router.get('/delete-tasks/',homeController.deleteTodo);

module.exports = router;