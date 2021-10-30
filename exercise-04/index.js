// Create a function that makes a fruit salad from 3 fruits.

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
    const fruitSalad = [];
    let count = 0;

    for (const property in foodObj) {
        // console.log(`${property}: ${foodObj[property]}`);

        if (`${foodObj[property]}` === "fruit") {
            // console.log(`${property}`);

            if (count === 3) {
                return fruitSalad;
            }

            fruitSalad.push(`${property}`);
            count++;
        }
    }
};

console.log(makeFruitSalad(food));