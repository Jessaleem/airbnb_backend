const {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
} = require('./users.services')

async function getAllUsersHandler(req, res) {
  try {
    const user = await getAllUsers()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function getSingleUserHandler(req, res) {
  const { id } = req.params
  try {
    const user = await getSingleUser(id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function createUserHandler(req, res) {
  const userData = req.body

  try {
    const user = await createUser(userData)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

function updateUserHandler(req, res) {}

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await deleteUser(id)

    if (!user) {
      return res.status(400).json({message: 'User not found'})
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

exports.getSingleUserHandler = getSingleUserHandler
exports.getAllUsersHandler = getAllUsersHandler
exports.createUserHandler = createUserHandler
exports.deleteUserHandler = deleteUserHandler
exports.updateUserHandler = updateUserHandler
