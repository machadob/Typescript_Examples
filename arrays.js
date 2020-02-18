var hobbies = ["Cooking", "Tennis", "Reading", "Running"];
hobbies.forEach(function (element) {
    console.log(element);
});
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
