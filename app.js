//first adventurer
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: {
    name: 'Leo',
    type: 'Cat'
    },
    companion: {
        name: 'Frank.',
        type: 'Flea.'
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
  }
};

//Loop to console.log all items in robins inventory
const inventorylist = (person) => {
    person.inventory.forEach(item => {
        console.log(item)
    });
};
//checking if loop works
inventorylist(adventurer);
