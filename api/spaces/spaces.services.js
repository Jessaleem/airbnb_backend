const Space = require('./spaces.model');

function getAllSpaces() {
  return Space.find({});
}

function getSingleSpace(id) {
  return Space.findById(id)
    .populate('host');
}

function createSpace(space) {
  return Space.findById(space);
}

/* function getHostSpaces() {
  return Space.find({});
} */

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
  /*   getHostSpaces, */
  updateSpace,
  deleteSpace,
};
