// TODO: Add a comment describing what kind of function this is
// This is a constructor
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// This allows the  printStats function to be added to the Character constructor and can then be attached to any character and called. 
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// This function observes the hit points for a character and reports if they are dead or alive
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// this method allows a character to attack another character and cause damagae by reducing hitpoints by the stregnth amount
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// This function allows a charcter object to be modified once this method is called. 
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// The stats for the warrior character
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// if warrior is alive or dead depending on the attack. in this case warrior is alive
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// rouge will have new stats incrased to 24, 25, 75
rogue.printStats();

warrior.levelUp();

warrior.attack(rogue);

rogue.attack(warrior);

warrior.attack(rogue);
warrior.attack(rogue);
warrior.attack(rogue);

rogue.isAlive();
warrior.isAlive();

rogue.printStats();
warrior.printStats();

rogue.attack(warrior);
rogue.attack(warrior);
warrior.attack(rogue);

rogue.isAlive();
warrior.isAlive();

rogue.printStats();
warrior.levelUp();
warrior.printStats();


