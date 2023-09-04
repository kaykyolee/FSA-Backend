const express = require ('express');
const router= express.Router();

//GET /api/health
router.get('/health',(req,res,next)=>{
    res.send('OK');
});

//ROUTER: api/todayslist
router.use('./todayslists',require('./todayslists'));

module.exports=router;
