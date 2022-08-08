const Space = require('./spaces.model')

function getAllSpaces() {
  return Space.find({})
}

function getSingleSpace(id) {
  return Space.findById(id)
}

function createSpace(space) {
  return Space.create(space)
}

function updateSPace(id, space) {
  return Space.findByIdAndUpdate(id, space, { new: true })
}

function deleteSpace(id) {
  return Space.findByIdAndRemove(id)
}

exports.deleteSpace = deleteSpace
exports.getAllSpaces = getAllSpaces
exports.getSingleSpace = getSingleSpace
exports.createSpace = createSpace
exports.updateSPace = updateSPace