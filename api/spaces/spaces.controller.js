const {
  createSpace,
  getSingleSpace,
  getAllSpaces,
  getHostSpaces,
  deleteSpace,
  updateSpace,
} = require('./spaces.services');

async function getAllSpacesHandler(req, res) {
  try {
    const space = await getAllSpaces();
    return res.status(200).json(space);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleSpaceHandler(req, res) {
  const { id } = req.params;
  try {
    const space = await getSingleSpace(id);

    if (!space) {
      return res.status(404).json({ message: 'Space not found' });
    }

    return res.json(space);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createSpaceHandler(req, res) {
  const spaceData = req.body;
  const { _id } = req.user;
  try {
    const space = await createSpace({ ...spaceData, host: _id });
    return res.status(201).json(space);
  } catch (error) {
    console.log(error);
    return res.status(501).json({ error });
  }
}

async function getHostSpacesHandler(req, res) {
  try {
    const host = req.params;
    const space = await getHostSpaces(host);
    return res.status(200).json(space);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function updateSpaceHandler(req, res) {
  const { id } = req.params;
  const spaceData = req.body;

  try {
    const space = await updateSpace(id, spaceData);
    return res.status(200).json(space);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteSpaceHandler(req, res) {
  const { id } = req.params;
  try {
    const space = await deleteSpace(id);

    if (!space) {
      return res.status(400).json({ message: 'Space not found' });
    }

    return res.json(space);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllSpacesHandler,
  createSpaceHandler,
  getHostSpacesHandler,
  updateSpaceHandler,
  deleteSpaceHandler,
  getSingleSpaceHandler,
};
