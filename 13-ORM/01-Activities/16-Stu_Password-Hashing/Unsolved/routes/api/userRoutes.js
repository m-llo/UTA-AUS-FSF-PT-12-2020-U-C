const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
// Reads all Users to find a user where the stored email address is the same as the one just entered, 
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
    //  If there is no match return error
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
// Reads the encrypted stored password, and compares it to what the user just entered using the bcrypt key
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
//  If the password doesn't match the encrypted password throw an error
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if passwords match allow the user to move on
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
//  throw server error if site doesn't respond. 
    res.status(500).json(err);
  }
});

module.exports = router;
