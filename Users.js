// import express
const express = require('express');

// define router from express router
const router = express.Router();

/**
 * all logics are done in the helper function 
 * to make the code neater and easy to read
 * this is our we solve a problem by creating problems. LOL
 * this is not a standard, you can define your own structure also
 * and we move.
 */
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('./Helper');

// endpoint to get all users
router.get('/users', (req, res) => {
    /**
     * call the get users function to get all users
     * store the response/result from get users to a user variable
     */
    const users = getUsers();
    
    // return the users to the client
    res.send(users);
});

// endpoint to create/add a user
router.post('/users', (req, res) => {
    /**
     * call the create user function
     * pass the request body as an argument
     * store the result in new_user variable
     */
    const new_user = createUser(req.body)

    // return the new_user data to the client with the generated id
    res.send(new_user);
});

// endpoint to get a user by id
router.get('/users/:id', (req, res) => {
    // store the id gotten from the request params in user_id variable
    const user_id = req.params.id;
    /**
     * call get user by id function 
     * pass the user_id as an argument to the function
     * store the result in a user variable
     */
    const user = getUserById(user_id);

    // return the user as a response to the client
    res.send(user);
});

// endpoint to update a user
router.put('/users/:id', (req, res) => {
    // store the id gotten from the request params in user_id variable
    const user_id = req.params.id;
    /**
     * store the request body in an update_user_data variable
     * this is optional
    */
    const update_user_data = req.body;
    /**
     * call the update user endpoint
     * pass update_user_data and user_id as arguments
     * store the result in user variable
     */
    const user = updateUser(update_user_data, user_id);

    // return the user as a response to the client
    res.send(user);
});


// endpoint to delete a user
router.delete('/users/:id', (req, res) => {
    // store the id gotten from the request params in user_id variable
    const user_id = req.params.id;
    /**
     * call the delete user function
     * pass the user_id as an argument
     * store the result in user variable
     */
    const user = deleteUser(user_id);

    /**
     * return the left over users to the client after deleting
     * this can be modified to return a success message only
    */
    res.send(user);
});

/**
 * this is used to export the file
 * so that it can be accessible in other places
 * you imported it
 */
module.exports = router;