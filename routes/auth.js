const router = require('express').Router()
const user = require('../models/user')
router.post('/register', async(req,res) =>{
    const user = new user({
        name: req.body.name,
        address: req.body.address,
        lastname: req.body.lastname,
        age: req.body.age,
        password: 'password'
    })
    try {
        const saveUser = await user.save()
        res.json({
            error: null,
            data: saveUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
    res.json({
        error:null,
        data: 'datos'
    })
})

module.exports = router