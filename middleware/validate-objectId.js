const mongoose = require("mongoose");

function validateObjectId(req, res, next) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ObjectId" });
  }
  next();
}

module.exports = validateObjectId;
