const { createAnimal, getallAnimals, deleteAnimal, updateAnimal, getSingleAnimal } = require('../../Controllers/Admin/Product/productController')
const isAuthenticated = require('../../Middleware/isAuthenticated')
const restricTo = require('../../Middleware/restrictTo')
const catchAsync = require('../../Services/catchAsync')

const router = require('express').Router()

const upload = require("../../Middleware/multerConfig");


router.route('/').post(isAuthenticated, restricTo('admin'), upload.single('animalImage'), catchAsync(createAnimal)).get(catchAsync(getallAnimals))

router.route("")

router.route('/:id')
.get(catchAsync(getSingleAnimal))
.delete(isAuthenticated, restricTo('admin'), catchAsync(deleteAnimal))
.patch(isAuthenticated, restricTo('admin'), upload.single('animalImage'), catchAsync(updateAnimal))

module.exports = router 
