// Make the names start with a capital letter.
// {
//     rabbit: ["Jodie", "Pinky"],
//     human: ["Joe"],
//     duck: ["Jemima"]
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
                namesOfRabbits.push(key.charAt(0).toUpperCase() + key.slice(1));
                speciesToNames[value] = namesOfRabbits;
                // speciesToNames[value] = [...namesOfRabbits];
            } else if (value === "human") {
                namesOfHumans.push(key.charAt(0).toUpperCase() + key.slice(1));
                speciesToNames[value] = namesOfHumans;
                // speciesToNames[value] = [...namesOfHumans];
            } else {
                namesOfDucks.push(key.charAt(0).toUpperCase() + key.slice(1));
                speciesToNames[value] = namesOfDucks;
                // speciesToNames[value] = [...namesOfDucks];
            }
        });

    return speciesToNames;
};

console.log(getSpeciesToNames(namesToSpecies));