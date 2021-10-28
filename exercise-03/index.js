// Create a function that returns the names of everyone that is over the age of 18.

const people = [{
    name: "Josiah",
    age: 21
}, {
    name: "Mary-Beth",
    age: 14
}, {
    name: "Parry",
    age: 41
}, {
    name: "Phil",
    age: 25
}, {
    name: "Deepak",
    age: 21
}, {
    name: "Lupita",
    age: 12
}, {
    name: "Sara",
    age: 2
}, {
    name: "Nemo",
    age: 44
}];

const getNamesOver18 = peopleArray => {
    const temp = [];

    peopleArray.forEach(element => {
        if (element.age > 18) {
            temp.push(element.name);
        }
    });

    return temp;
};

console.log(getNamesOver18(people));