const express = require('express');
const router = express.Router();
const dummyUser = { email: 'asfar@gmail.com', password: '123456', name: 'Asfar Amir' };
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === dummyUser.email && password === dummyUser.password) {
    return res.status(200).json({ user: dummyUser });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
