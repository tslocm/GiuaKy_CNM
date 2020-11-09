var controller=require('../controller/sanphamcontroller');
var express = require('express');
var router = express.Router();
module.exports=router;

router.get('/sanpham',controller.getAllSanPham);
//router.get('/linhkien/add',controller.getAddLinhKien);
//router.post('/addlinhkien',controller.addLinhKien);
router.get('/sanpham/delete/:maSanPham', controller.xoaSanPham);