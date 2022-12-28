const bcryptjs = require('bcryptjs');
const users = [
  {
    name: 'Irshad Khan',
    email: 'irshad@admin.com',
    password: bcryptjs.hashSync('password',10),
    isAdmin: true
  },
  {
    name: 'Husssain Khan',
    email: 'hussain@user.com',
    password: bcryptjs.hashSync('password',10),
  },
  {
    name: 'Hassan Khan',
    email: 'hassan@user.com',
    password: bcryptjs.hashSync('password',10),
  },
]

module.exports = users;
