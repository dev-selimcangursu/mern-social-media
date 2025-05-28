const express = require('express')
const router = express.Router();  
const UserController = require('../controllers/UserController')

// Yeni Kullanıcı Kayıt Rotası
router.post('/store', UserController.create);
// Kullanıcı Giriş Rotası
router.post('/login',UserController.login);

module.exports = router;