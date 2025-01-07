const express = require("express")
const router = express.Router()
const verifyToken = require("../Middleware/authMiddleware")
const authorizeRoles = require("../Middleware/roleMiddleware")

//Only admin can access this router:::
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.status(200).json({
        message : "Welcome Admin"
    })
})




// Only user can access this router:::
//we can authorize like this: ("admin","user") both to user and admin.
router.get("/user", verifyToken, authorizeRoles("admin","user"), (req, res) => {
    res.status(200).json({
        message : "Welcome user"
    })
})


module.exports = router