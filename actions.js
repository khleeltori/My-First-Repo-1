const express = require('express');
const router = express.Router();

router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:"Welcome to my api"
        
    });
});
router.get('/ff',(req,res) => {
    return res.status(200).json({
        message:10*10
        
    });
});

module.exports = router;// هي اهم نقطة في بناء الموقع ولا يجب نسيها