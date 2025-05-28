const express = require('express')
const router  = express.Router
const UserController = require('../controllers/UserController')

// Yeni Kullanıcı Kayıt Rotası
router.get('/store',UserController.create)


module.exports = {router}