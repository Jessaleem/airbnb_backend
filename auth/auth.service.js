/* eslint-disable no-underscore-dangle */
const jsonToken = require('jsonwebtoken');
const { findUserByEmail } = require('../api/users/users.services');

async function signToken(payload) {
  const token = await jsonToken.sign(
    payload,
    process.env.JSW_KET_WORD,
    { expiresIn: '1h' },
  );
  return token;
}

async function verfyToken(token) {
  try {
    const payload = await jsonToken.verify(token, process.env.JSW_KET_WORD);
    return payload;
  } catch {
    return null;
  }
}

async function isAuthenticated(req, res, next) {
  const authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  const decoded = await verfyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { email } = decoded;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}

function verifyRole(roles) {
  return async (req, res, next) => {
    try {
      const { role } = req.user;
      if ([].concat(roles).includes(role)) {
        next();
      } else {
        res.status(409);
        res.send({ error: 'Not authorized' });
      }
    } catch (error) {
      res.status(409);
      res.send({ error: 'Not authorized' });
    }
  };
}

module.exports = {
  signToken,
  verfyToken,
  isAuthenticated,
  verifyRole,
};
