const User = require("../models/user");

const profileController = (req, res, next) => {
  res.send("<h2>Profile route</h2>");
};

const signInController = (req, res) => {
  res.render("signin", {
    title: "Codeial | Sign in",
    error: "",
  });
};

const signUpController = (req, res) => {
  res.render("signup", {
    title: "Codeial | Sign up",
    error: "",
  });
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    const isExistingUser = await User.find({ email });
    if (isExistingUser) {
      res.render("signup", {
        title: "Codeial | Sign up",
        error: "User already exist with same email",
      });
    } else {
      await User.create(request.body);
    }
  } else {
    res.render("signup", {
      title: "Codeial | Sign up",
      error: "all fields are required",
    });
    return res.redirect("back");
  }
};

const createSession = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = User.find({ email });
    const isPasswordMatching = user.password === password;
    if (isPasswordMatching) {
      res.cookie("name", user.name);
      res.cookie("email", user.email);
    } else {
      res.render("signin", {
        title: "Codeial | Sign in",
        error: "Invalid username or password",
      });
      x;
    }
  } else {
    res.render("signin", {
      title: "Codeial | Sign in",
      error: "all fields are required",
    });
    return res.redirect("back");
  }
};

module.exports = {
  profileController,
  signInController,
  signUpController,
  createUser,
  createSession,
};
