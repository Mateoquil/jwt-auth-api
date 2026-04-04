let Register = [];
let users = [];

export default {
    create: (email, password) => {
        const newUser = { email, password };
        users.push(newUser);
        return newUser;
    }
};