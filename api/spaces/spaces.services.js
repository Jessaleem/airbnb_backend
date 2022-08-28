const Space = require('./spaces.model');

function getAllSpaces() {
  return Space.find({});
}

function getSingleSpace(id) {
  return Space.findById(id)
    .populate({ path: 'users', select: 'role' });
}

function createSpace(space) {
  return Space.create(space);
}

function updateSpace(id, space) {
  return Space.findByIdAndUpdate(id, space, { new: true });
}

function deleteSpace(id) {
  return Space.findByIdAndRemove(id);
}

module.exports = {
  getAllSpaces,
  getSingleSpace,
  createSpace,
  updateSpace,
  deleteSpace,
};
