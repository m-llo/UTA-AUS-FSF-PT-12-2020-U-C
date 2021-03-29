const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Location.BelongstoMany(Traveller, {
  foreignKey: 'traveller_id',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Traveller.hasMany(Trips, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Trips.belongsToMany(Traveller, {
  foreignKey: 'traveller_id',
});

Location.hasMany(Trips,{
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

module.exports = { Traveller, Location, Trips };