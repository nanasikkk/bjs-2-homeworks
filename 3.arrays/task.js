function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}


console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0 || !users.some(user => user.gender === gender)) {
        return 0;
    }
    
    const filteredUsers = users.filter(user => user.gender === gender);
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    
    return totalAge / filteredUsers.length;
}

const people = [
  {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
  {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
  {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
  {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
  {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
  {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
  {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender:"мужской"}
];

console.log(getUsersNamesInAgeRange(people, "мужской")); // 29.6
console.log(getUsersNamesInAgeRange(people, "женский")); // 24.4
console.log(getUsersNamesInAgeRange([], "мужской")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0