import bcrypt from 'bcryptjs';

const users =[
    {
        name : 'ram',
        email : "ram@gmail.com",
        password:bcrypt.hashSync("12345678"),
        },
    {
    name : 'raj',
    email : "raj@gmail.com",
    password: bcrypt.hashSync("12345678"),
    },
  
]

export default users