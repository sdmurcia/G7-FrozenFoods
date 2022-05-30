function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/users/signIn');
	}
	next();
}

module.exports = authMiddleware;