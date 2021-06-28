import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 12),
    isAdmin: true,
  },
  {
    name: "Joseph",
    email: "joseph@gmail.com",
    password: bcrypt.hashSync("123456", 12),
  },
  {
    name: "Mary",
    email: "mary@gmail.com",
    password: bcrypt.hashSync("123456", 12),
  },
];

export default users;
