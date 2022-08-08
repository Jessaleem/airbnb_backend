const User = require('./users.model')

function getAllUsers() {
  return User.find({})
}

function getSingleUser(id) {
  return User.findById(id)
}

function createUser(user) {
  return User.create(user)
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true })
}

function deleteUser(id) {
  return User.findByIdAndRemove(id)
}

exports.deleteUser = deleteUser
exports.getAllUsers = getAllUsers
exports.getSingleUser = getSingleUser
exports.createUser = createUser
exports.updateUser = updateUser
