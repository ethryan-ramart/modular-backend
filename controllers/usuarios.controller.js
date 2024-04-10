const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({
    msg: "get API - controller",
  });
};

const usersPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post API - controller",
    body
  });
};

const usersPut = (req, res = response) => {
  res.json({
    msg: "put API - controller",
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

const usersPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
};
