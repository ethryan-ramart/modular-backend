const { Router } = require("express");
const {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", usersGet);

router.post("/", usersPost);

router.put("/", usersPut);

router.delete("/", usersDelete);

router.patch("/", usersPatch)

module.exports = router;
