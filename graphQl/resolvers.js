const { User } = require("../models")
module.exports = {
    Query: {
        getUsers: async () => {
            try {
                const users = await User.findAll()
                return users
            }
            catch (err) {
                return (err.message)
            }
        }
    }
};