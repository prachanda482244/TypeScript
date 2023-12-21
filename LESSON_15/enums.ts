
enum Roles {
    user = "user",
    admin = "admin"
}
type LoginDetails = {
    username?: string;
    email: string;
    password: string;
    role: Roles
}

const user1: LoginDetails = {
    username: 'Prachanda',
    email: 'user@gmail.com',
    password: 'something',
    role: Roles.admin
}
const user2: LoginDetails = {
    email: 'user2@gmail.com',
    password: 'something22',
    role: Roles.user
}

const isAdmin = (user: LoginDetails) => {
    const { username, role } = user;
    return role === 'admin' ? `${username} is allowed to edit the website` : 'You are not a admin to edit the website'
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
