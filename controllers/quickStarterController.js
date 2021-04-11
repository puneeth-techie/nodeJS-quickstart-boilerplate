import createError from "http-errors";

const home = async (req, res, next) => {
  res.render("home");
};

export { home };
