const express = require('express')
const userController = require('../Controllers/usercontroller')
const projectController = require('../Controllers/projectController')
const router = new express.Router()
const jwtMiddleware  = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

// register

router.post('/register',userController.register)

// login

router.post('/login',userController.login)

// add project
router.post("/add-project",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

// get all project
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

// get user project
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

// get home project
router.get('/home-projects',projectController.getHomeProjects)

// edit project
router.put('edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

// remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

// update user
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


// export router
module.exports = router