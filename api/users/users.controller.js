const {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require('./users.services')

async function getAllUsersHandler(_, res) {
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
    const profile = user.profile
    return res.json(profile)
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

async function updateUserHandler(req, res) {
  const { id } = req.params
  const userData = req.body

  try{
    const user = await updateUser(id, userData)
    return res.status(200).json(user)
  }catch (error) {
    return res.status(500).json({ error })
  }
}

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

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getSingleUserHandler
}
