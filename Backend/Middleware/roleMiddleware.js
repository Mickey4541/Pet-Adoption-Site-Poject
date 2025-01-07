

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(req.user.role);
        /*
        The output of req.user.role while hitting the admin route is:
        The decoded user is {
        id: '677ce939fc6acb52c8793700', 
        role: 'admin',
        iat: 1736243929,
        exp: 1736251129
        }
        admin        
        */
        
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message : "Access Denied"
            })
        }
        next();
    }
}

module.exports = authorizeRoles;