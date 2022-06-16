module.exports = (mongoose) => {
  const UsersSchema = mongoose.model(
    "user",
    mongoose.Schema(
      {
        name: {
          type: String,
          require: true,
          min: 3,
          max: 20,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          max: 50,
          unique: true,
        },
        password: {
          type: String,
          required: true,
          min: 6,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    )
  );
  return UsersSchema;
};
