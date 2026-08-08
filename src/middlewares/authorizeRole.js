
const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(401).json({ error: 'Unauthorized: No user role found' });
        }

        const { role } = req.user;
        if (!allowedRoles.includes(role)) {
            return res.status(403).json({ 
                error: 'Forbidden: You do not have permission to access this resource' 
            });
        }

        next();
    };
};

export default authorizeRole;