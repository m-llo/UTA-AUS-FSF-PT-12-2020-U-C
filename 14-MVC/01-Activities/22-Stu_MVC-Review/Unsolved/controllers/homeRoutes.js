const { User } = require('../../../16-Stu_Sessions/Unsolved/models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try{
  const userData = await User.FindAll({
    attributes: {exclude: ['password'],
     order: [['name', 'ASC']]}
  });
  
  const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage',{users});
  

}catch(error){}


});

module.exports = router;
