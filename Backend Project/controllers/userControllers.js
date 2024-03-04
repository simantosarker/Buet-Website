const UserModel = require("./../models/User");

exports.creatUser = async (req, res) => {
  const new_data = await UserModel.create(req.body);
  try {
    res.status(200).json({
      massage: "User created successfully",
      data: new_data,
    });
  } catch (err) {
    res.status(500).json({
      massage: "User not created",
      error: err,
    });
  }
};

exports.getUser = async (req, res) => {
  const data = await UserModel.find(req.query);
  try {
    res.status(200).json({
      massage: "All user data",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      massage: "user data faild",
      error: err,
    });
  }
};

exports.userOne = async (req, res) => {
  const UserOne = await UserModel.findById(req.params.user_id);
  try {
    res.status(500).json({
      massage: "data for request id",
      data: UserOne,
    });
  } catch (err) {
    res.status(500).json({
      massage: "id not found",
      error: err,
    });
  }
};

exports.updateOne = async (req, res) => {
  const updateUser = await UserModel.findByIdAndUpdate(
    req.params.user_id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  try {
    res.status(200).json({
      massage: "User update successfully",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({
      massage: "Update Failed",
      error: err,
    });
  }
};

exports.deleteOne = async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.user_id);
  try {
    res.status(200).send("User delete successfully");
  } catch (err) {
    res.status(500).json({
      massage: "Data is not deleted",
      error: err,
    });
  }
};
