// Create a function that makes a fruit salad from 3 fruits.

// The fruitSalad function should return different fruit salads each time
// not just the first three fruits.

const food = {
    mint: "herb",
    apple: "fruit",
    carrot: "vegetable",
    banana: "fruit",
    radish: "vegetable",
    potato: "vegetable",
    leek: "vegetable",
    basil: "herb",
    oregano: "herb",
    thyme: "herb",
    mango: "fruit",
    persimmon: "fruit",
    grapes: "fruit",
    orange: "fruit",
    cauliflower: "vegetable",
    broccoli: "vegetable",
    cucumber: "vegetable",
    kumquat: "fruit"
};

const makeFruitSalad = foodObj => {
    const fruits = [];
    const fruitSalad = [];
    const randomNumbers = [];
    let count = 0;

    for (const property in foodObj) {
        if (`${foodObj[property]}` === "fruit") {
            fruits.push(`${property}`);
        }
    }

    for (let i = 0; i < fruits.length; i++) {
        const randNum = Math.floor(Math.random() * fruits.length);

        if (count === 0) {
            randomNumbers.push(randNum);
            fruitSalad.push(fruits[randNum]);
            count++;
        } else if (count < 3) {
            if (!randomNumbers.includes(randNum)) {
                randomNumbers.push(randNum);
                fruitSalad.push(fruits[randNum]);
                count++;
            }
        } else {
            return fruitSalad;
        }
    }
};

console.log(makeFruitSalad(food));