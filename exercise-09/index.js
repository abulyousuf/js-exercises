// Make a function that takes a species (human, rabbit or duck) and returns the names of that value.

const getNamesOfSpecies = species => {
    const namesToSpecies = {
        jodie: "rabbit",
        pinky: "rabbit",
        joe: "human",
        jemima: "duck"
    };

    const namesOfSpecies = [];

    Object.entries(namesToSpecies)
        .forEach(([key, value]) => {
            if (value === species) {
                namesOfSpecies.push(key);
            }
        });

    return namesOfSpecies;
};

// Argument: human, rabbit or duck

console.log(getNamesOfSpecies("rabbit"));