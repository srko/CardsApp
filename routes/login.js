if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  };

  // use schema.create to insert data into db
  User.create(userData, (err, user) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/profile');
  });
}
