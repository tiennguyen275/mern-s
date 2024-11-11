import User from "../model/userModel.js";

// create user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const savedData = await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json({ massage: "User created successfully" });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userExists);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};
