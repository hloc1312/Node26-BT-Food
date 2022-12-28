const { DataTypes } = require("sequelize");
// const sequelize = require(".");
const bcrypt = require("bcrypt");
module.exports = (sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id",
      },
      fullName: {
        type: DataTypes.STRING,
        field: "full_name",
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email is not format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        field: "pass_word",
        set(value) {
          const salt = bcrypt.genSaltSync();
          const hashPassword = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hashPassword);
        },
      },
    },
    {
      tableName: "users",
      timestamps: false,
      defaultScope: {
        attributes: {
          exclude: ["password"], // theo tên property
        },
      },

      // các phương thức được tự động chạy sau một hành động (create/update/delete)
      hooks: {
        // Xóa property password của record được trả ra sau khi tạo user thành công
        afterSave: (record) => {
          delete record.dataValues.password;
        },
      },
    }
  );
};
// const User = sequelize.define(
//   "User",
//   {
//     userId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       field: "user_id",
//     },
//     fullName: {
//       type: DataTypes.STRING,
//       field: "full_name",
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//       field: "pass_word",
//     },
//   },
//   {
//     tableName: "users",
//     timestamps: false,
//   }
// );

// module.exports = User;
