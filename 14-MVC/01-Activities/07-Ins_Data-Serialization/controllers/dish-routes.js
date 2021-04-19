const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish without serializing data
// router.get('/dish/:id', async (req, res) => {
//   try {
//     const dishData = await Dish.findByPk(req.params.id);
//     console.log(dishData)
//     res.render('dish', dishData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // get one dish with serialized data
// router.get('/dish/:id', async (req, res) => {
//   try {
//   // Search the database for a dish with an id that matches params
//   const dishData = await Dish.findByPk(req.params.id);
//   console.log('dishData', dishData)
//   // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
//   const dish = dishData.get({ plain: true });
//   console.log("dish", dish)
//   // Then, the 'dish' template is rendered and dish is passed into the template.
//   res.render('dish', dish);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

// router.get('/dish/', async (req, res) => {
//   try {
//   // Search the database for a dish with an id that matches params
//   const dishData = await Dish.findAll();
//   console.log('dishData', dishData)
//   // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
//   const dish = dishData.get({ plain: true });
//   console.log("dish", dish)
//   // Then, the 'dish' template is rendered and dish is passed into the template.
//   res.render('dish', dish);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });


router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const dishData = await Dish.findAll().catch((err) => { 
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  console.log(dishes)
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', { dishes });
  });

// route to get one dish
router.get('/dish/:id', async (req, res) => {
try{ 
    const dishData = await Dish.findByPk(req.params.id);
    if(!dishData) {
        res.status(404).json({message: 'No dish with this id!'});
        return;
    }
    const dish = dishData.get({ plain: true });
    res.render('dish', dish);
  } catch (err) {
      res.status(500).json(err);
  };     
});
module.exports = router;

