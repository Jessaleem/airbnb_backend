const crypto = require('crypto');
const {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require('./users.services');
const { sendNodemailer } = require('../../utils/mail');

async function getAllUsersHandler(_, res) {
  try {
    const user = await getAllUsers();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { profile } = user;
    return res.json(profile);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createUserHandler(req, res) {
  const userData = req.body;

  try {
    const hash = crypto.createHash('sha256')
      .update(userData.email)
      .digest('hex');

    userData.passwordResetToken = hash;
    userData.passwordResetExpires = Date.now() + 3_600_000 * 3;
    const user = await createUser(userData);
    // Send email to user
    const message = {
      from: '"no-replay" <airbclone@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: 'Please meditate', // Subject line
      text: 'At leats 30 min daily', // plain text body
      html: `
      <h1>Om Namo Narayanaya</h1>
      <a href="http://localhost:3000/verifyAccount/${hash}" target="_blank" rel="no referer"> Register </a>
      `, // html body
    };

    await sendNodemailer(message);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateUserHandler(req, res) {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await updateUser(id, userData);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getSingleUserHandler,
};
