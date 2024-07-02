const postController = (req, res, next) => {
  return res.render("posts", {
    title: "Posts",
    data: "dynamic data from the controller",
  });
};

module.exports = postController;
