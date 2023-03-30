const {Router}=require('express');
const router=Router();
const { check} = require('express-validator');
const AccountCtrl= require('../controlls/CreateAccount-controll');

router.route('/')
    .get(AccountCtrl.getAll)

router.post('/register', [
    check('Username').isLength({min:3}).withMessage('Must be at least 2 chars long.'),
    check('Email').isEmail(),
    check('Password').isLength({min:3}).withMessage('Must be at least 2 chars long.')
    ], AccountCtrl.register)

router.post('/login',
[
    check('Email').isLength({ min: 2 }).withMessage('Must be at least 2 chats long.'),
    check('Password').isLength({ min: 2 }).withMessage('Must be at least 2 chars long.')
],
AccountCtrl.LoginUser)


module.exports=router;
