// Make a function that returns the names of the rabbits.

const namesToSpecies = {
    jodie: "rabbit",
    pinky: "rabbit",
    joe: "human",
    jemima: "duck"
}

const getNamesOfRabbits = namesToSpeciesObj => {
    const namesOfRabbits = [];

    for (const property in namesToSpeciesObj) {
        if (`${namesToSpeciesObj[property]}` === "rabbit") {
            namesOfRabbits.push(`${property}`);
        }
    }

    return namesOfRabbits;
};

console.log(getNamesOfRabbits(namesToSpecies));