const bcrypt = require('bcryptjs');
const {
  findUserByEmail,
  findOneUser,
  getSingleUser,
  updateUser,
} = require('../../api/users/users.services');
const { signToken } = require('../auth.service');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(404).json({ message: 'Email or password incorrect' });
    }
    const token = await signToken({ email: user.email });
    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function verifyAccountHandler(req, res) {
  const { token } = req.params;
  try {
    const user = await findOneUser({ passwordResetToken: token });

    if (!user) {
      return res.status(404).json({ message: 'Invalid token' });
    }

    if (Date.now() > user.passwordResetExpires) {
      return res.status(404).json({ message: 'Token expired' });
    }

    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.isActive = true;

    await user.save();

    const jwtoken = signToken({ email: user.email });

    return res.status(200).json({
      token: jwtoken,
      profile: user.profile,
      message: 'Account activated',
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function changePassword(req, res) {
  try {
    const { id } = req.params;
    const { oldPassword } = req.body;
    const newPassword = req.body.password;

    const user = await getSingleUser({ _id: id });

    if (!user) {
      return res.status(404).json({ message: 'Password incorrect' });
    }
    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
      return res.status(404).json({ message: 'Password incorrect' });
    }

    if (oldPassword === newPassword) {
      return res.status(400).json({ message: 'New password not allowed' });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const userPassword = await updateUser({ _id: id }, { password }, { new: true });
    return res.status(200).json({ status: true, data: userPassword });
  } catch (error) {
    return res.status(400).json({ status: false, error: 'Error Occured' });
  }
}

module.exports = {
  loginUserHandler,
  verifyAccountHandler,
  changePassword,
};
