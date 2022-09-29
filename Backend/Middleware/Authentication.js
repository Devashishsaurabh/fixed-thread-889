const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("Login to see the content");
  }
  const user_token = req.headers.authorization.split(" ")[1];
  jwt.verify(user_token, process.env.TOKEN_KEY, function (err, decoded) {
    if (err) {
      return res.send("please Login");
    }
    console.log(decoded);
    req.body.email = decoded.email;
    req.body.userId = decoded.userId;
    next();
  });
};
module.exports = authentication;
