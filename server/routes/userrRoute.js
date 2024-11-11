import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByID,
  updateUser,
} from "../controller/userController.js";

const route = express.Router();

route.post("/user", createUser);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserByID);
route.put("/update/user/:id", updateUser);
route.delete("/delete/user/:id", deleteUser);

export default route;
