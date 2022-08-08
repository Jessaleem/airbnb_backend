const {
  createSpace,
  getAllSpaces,
  getSingleSpace,
  deleteSpace,
} = require('./spaces.services')

async function getAllSpacesHandler(req, res) {
  try {
    const space = await getAllSpaces()
    return res.status(200).json(space)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function getSingleSpaceHandler(req, res) {
  const { id } = req.params
  try {
    const space = await getSingleSpace(id)

    if (!space) {
      return res.status(404).json({ message: 'Space not found' })
    }

    return res.json(space)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function createSpaceHandler(req, res) {
  const spaceData = req.body

  try {
    const space = await createSpace(spaceData)
    return res.status(201).json(space)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

function updateSpaceHandler(req, res) {}

async function deleteSpaceHandler(req, res) {
  const { id } = req.params;
  try {
    const space = await deleteSpace(id)

    if (!space) {
      return res.status(400).json({message: 'Space not found'})
    }

    return res.json(space)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

exports.getSingleSpaceHandler = getSingleSpaceHandler
exports.getAllSpacesHandler = getAllSpacesHandler
exports.createSpaceHandler = createSpaceHandler
exports.deleteSpaceHandler = deleteSpaceHandler
exports.updateSpaceHandler = updateSpaceHandler
