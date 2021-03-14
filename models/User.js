const { model, Schema } = erquire("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
