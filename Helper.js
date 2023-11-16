/**
 * this is the user array of objects
 * it has three user but you can make yours to be an
 * empty array for testing purpose.
 */
const users = [
    {
        "id": 1,
        "first_name": "James",
        "last_name": "Doe",
        "email": "jamesdoe@gmail.com",
        "username": "Jdoe"
    },
    {
        "id": 2,
        "first_name": "Jone",
        "last_name": "David",
        "email": "jonedavid@gmail.com",
        "username": "Jdavid"
    },
    {
        "id": 3,
        "first_name": "Ken",
        "last_name": "Ben",
        "email": "kenben@gmail.com",
        "username": "KBen"
    }
]

// function to get all users
exports.getUsers = () => {
    return users;
}

// function to create a user
exports.createUser = (user) => {
    /**
     * get the last id from get last user id
     * increment it by 1
     * save it in the user object with key id
     */
    user.id = this.getLastUserId() + 1;
    // add the new user to the user array
    users.push(user);
    /**
     * return the new user with an id this time
     * You don't need to pass id from the client end
     */
    return user;
}

// function to get the last user id
exports.getLastUserId = () => {
    /**
     * hmmmm
     * this is to access the users array with the last index
     * and get the id
     * note that array starts at index 0 while 
     * array length is from 1
     * this is the reason we have users.length - 1
     * the id is the key in that array object 
     * this return the value of that id
     */
    return users[users.length - 1].id;
}

// function to get user by id
exports.getUserById = (id) => {
    /**
     * find user id that matches the requested user id
     * find do return an object because it is strictly unique
    */
    return users.find(user => user.id == id);
}

/**
 * function to update user
 * this function accepts two parameters
 * the requested data and the id
*/
exports.updateUser = (updated_user, id) => {
    // iterate throught the users array of objects
    users.map(user => {
        // if the current user object iteration matches the requested id
        if (user.id == id) {
            // update the user variable
            user.id = updated_user.id;
            user.first_name = updated_user.first_name;
            user.last_name = updated_user.last_name;
            user.email = updated_user.email;
            user.username = updated_user.username;
        }
    });

    //return the users
    return users;
}


// function to delete user
exports.deleteUser = (id) => {
    /**
     * filter through the users object and return all users
     * that does not matches the requested id
    */
    return users.filter(user => user.id != id);
}