// Make a function that returns this structure:
// {
//     rabbit: ["jodie", "pinky"],
//     human: ["joe"],
//     duck: ["jemima"]
// }

const namesToSpecies = {
    jodie: "rabbit",
    pinky: "rabbit",
    joe: "human",
    jemima: "duck"
}

const getSpeciesToNames = namesToSpeciesObj => {
    const speciesToNames = {};
    const namesOfRabbits = [];
    const namesOfHumans = [];
    const namesOfDucks = [];

    Object.entries(namesToSpeciesObj)
        .forEach(([key, value]) => {
            if (value === "rabbit") {
                namesOfRabbits.push(key);
                speciesToNames[value] = namesOfRabbits;
                // speciesToNames[value] = [...namesOfRabbits];
            } else if (value === "human") {
                namesOfHumans.push(key);
                speciesToNames[value] = namesOfHumans;
                // speciesToNames[value] = [...namesOfHumans];
            } else {
                namesOfDucks.push(key);
                speciesToNames[value] = namesOfDucks;
                // speciesToNames[value] = [...namesOfDucks];
            }
        });

    return speciesToNames;
};

console.log(getSpeciesToNames(namesToSpecies));