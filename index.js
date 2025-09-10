"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

const brokenUsers = [
  { id: 1, name: "Count Dooku", age: 83 },
  { id: 2, age: 45 }, 
  { id: 3, name: "Jabba the Hutt", age: 604 },
  { id: 4, name: "Darth Maul", age: 22 },
  {id: 5, age: 900 },
  { id: 6, name: "Mace Windu", age: 53 },
  { id: 7, name: "Qui-Gon Jinn", age: 60 },
  { id: 8, age: 33 },
  { id: 9, name: "Lando Calrissian", age: 34 },
  { id: 5, age: 129 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

const namesList = document.getElementById("names-list");
for (let i = 0; i < users.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = users[i].name;
  namesList.appendChild(listItem);
}

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

const youngCharactersList = document.getElementById("young-characters-list");

users.forEach((user) => {
  if (user.age < 40) {
    console.log(user.name);

    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    youngCharactersList.appendChild(listItem);
  } 
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function nameListRenderer(array, listId) {
  const list = document.getElementById(listId);
  list.innerHTML = ""; // will clear any content already here

  array.forEach((item) => {
    if (item.name) {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      list.append(listItem);
    }
  });
}

nameListRenderer(users, "function-list");
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

// function ageListRenderer(array, ageThreshold, listId) {
//   const list = document.getElementById(listId);
//   list.innerHTML = ""; // will clear any content already here

//   array.forEach((item) => {
//     if (item.age < ageThreshold && item.name) {
//       const listItem = document.createElement("li");
//       listItem.textContent = item.name;
//       list.append(listItem);
//     }
//   });

// }

// ageListRenderer(users, 33, "age-filter-list");

// using a map and filter approach
function ageListMapRenderer(array, ageThreshold, listId) {
  const list = document.getElementById(listId);
  list.innerHTML = ""; // will clear any content already here

  const filteredOnes = array.filter(item => item.age < ageThreshold && item.name);

  const liElements = filteredOnes.map(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    return listItem;
  });

  liElements.forEach(listItem => list.append(listItem));
}

ageListMapRenderer(users, 33, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

function nameListRendererWithErrorHandling(array, listId, errorDivId) {
  const list = document.getElementById(listId);
  const errorDiv = document.getElementById(errorDivId);
  list.innerHTML = "";  // Clears content
  errorDiv.innerHTML = ""; // Clears errors

  array.forEach((item, index) => {
    if (item.name) {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      list.append(listItem);
    } else {
      const errorMessage = `Error: "name" property for item at index ${index} is missing.`;
      console.error(errorMessage);

      const errorItem = document.createElement("p");
      errorItem.textContent = errorMessage;
      errorDiv.append(errorItem);
    }
  });
}
nameListRendererWithErrorHandling(users, "error-handling-list", "broken-array-errors");

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

nameListRendererWithErrorHandling(brokenUsers, "broken-array-list", "broken-array-errors");