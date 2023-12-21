"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    username: 'Prachanda',
    email: 'user@gmail.com',
    password: 'something',
    role: Roles.admin
};
const user2 = {
    email: 'user2@gmail.com',
    password: 'something22',
    role: Roles.user
};
const isAdmin = (user) => {
    const { username, role } = user;
    return role === 'admin' ? `${username} is allowed to edit the website` : 'You are not a admin to edit the website';
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
