// Create a function that returns the names of everyone that is over the age of 18.
// Using JavaScript Array reduce() method.

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

const peopleOver18 = people.reduce((previousValue, currentValue) => {
    if (currentValue.age > 18) {
        previousValue.push(currentValue);
    }

    return previousValue;
}, []);

console.log(peopleOver18);