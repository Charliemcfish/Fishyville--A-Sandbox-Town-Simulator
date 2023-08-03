console.log("Welcome to Fishyville!");

// Story about Fishyville
console.log("\nOnce upon a time, there was a small coastal town called Fishyville.");
console.log("Fishyville was known for its vibrant community and friendly residents.");
console.log("The town had 10 colorful houses, each with its own unique charm.");
console.log("In Fishyville, 15 people lived happily, pursuing various careers and hobbies.");
console.log("Every morning, the townspeople woke up to the soothing sound of waves crashing on the shore.");
console.log("They would go to work, where engineers, teachers, doctors, artists, and many others honed their skills.");
console.log("In the evenings, they often gathered to host parties, sharing laughter and good times.");
console.log("Fishyville was a tight-knit community, and people loved visiting each other's houses, strengthening their bonds.");
console.log("As the day turned into night, the townspeople would retire to their cozy homes.");
console.log("Under the twinkling stars, they would rest, ready to embrace another joyful day in Fishyville.");
console.log("And so, the story of Fishyville continues, with its cheerful residents and the adventures that await them.");
console.log("----------------------")

// Define a function to create a person with given properties
function createPerson(name, lastName, age, money, job) {
  return {
    name: name,
    lastName: lastName,
    age: age,
    money: money,
    job: job,
  };
}

// Array to store the people living in Fishyville
const people = [
  createPerson("Charlie", "Fisher", 23, 100000, "Mayor"),
  createPerson("Jack", "Fisher", 21, 50000, "Deputy Mayor"),
  createPerson("Noogy", "Fisher", 48, 0, "Drug Dealer"),
  createPerson("Ellie", "Fisher", 22, 800, "Careworker"),
  createPerson("David", "Brown", 35, 1200, "Chef"),
  createPerson("Sophia", "Jones", 22, 500, "Student"),
  createPerson("Robert", "Miller", 45, 3000, "Businessman"),
  createPerson("Olivia", "Davis", 33, 1800, "Lawyer"),
  createPerson("William", "Garcia", 27, 900, "Programmer"),
  createPerson("Ava", "Martinez", 29, 1100, "Nurse"),
  // Add more people as needed
];

// Define a function to create a house with a given name
function createHouse(name) {
  return {
    name: name,
  };
}

// Array to store the named houses in Fishyville
const houses = [
  createHouse("Blue House"),
  createHouse("Yellow House"),
  createHouse("Green House"),
  createHouse("Red House"),
  createHouse("Purple House"),
  createHouse("Orange House"),
  createHouse("Pink House"),
  createHouse("Brown House"),
  createHouse("White House"),
  createHouse("Black House"),
  // Add more houses as needed
];

// Function to assign people randomly to houses
function assignPeopleToHouses(people, houses) {
  const shuffledPeople = [...people].sort(() => 0.5 - Math.random());
  houses.forEach((house, index) => {
    house.residents = shuffledPeople.slice(index * 1.5, (index + 1) * 1.5);
  });
}

// Function to simulate a person going to work and earning money
function sendToWork(person, salary) {
  console.log(`${person.name} ${person.lastName} is going to work...`);
  person.money += salary;
  console.log(`${person.name} ${person.lastName} earned $${salary}. Current money: $${person.money}`);
}

// Function to simulate a person going shopping
function goShopping(person, shoppingCost) {
  console.log(`${person.name} ${person.lastName} is going shopping...`);
  if (person.money >= shoppingCost) {
    person.money -= shoppingCost;
    console.log(`${person.name} ${person.lastName} spent $${shoppingCost}. Current money: $${person.money}`);
  } else {
    console.log(`${person.name} ${person.lastName} doesn't have enough money to go shopping.`);
  }
}

// Function to simulate a person hosting a party
function hostParty(person, partyCost) {
  console.log(`${person.name} ${person.lastName} is hosting a party...`);
  if (person.money >= partyCost) {
    person.money -= partyCost;
    console.log(`${person.name} ${person.lastName} spent $${partyCost} on the party. Current money: $${person.money}`);
  } else {
    console.log(`${person.name} ${person.lastName} doesn't have enough money to host a party.`);
  }
}

// Function to simulate a person visiting another person's house
function visitHouse(visitor, host) {
  console.log(`${visitor.name} ${visitor.lastName} is visiting ${host.name}'s house...`);
  console.log(`${visitor.name} ${visitor.lastName} had a great time at ${host.name}'s house.`);
}

// Call the function to assign people to houses
assignPeopleToHouses(people, houses);

// Example usage:
houses.forEach((house, index) => {
  console.log(`House: ${house.name}`);
  house.residents.forEach((resident, i) => {
    console.log(
      `  ${i + 1}. ${resident.name} ${resident.lastName}, Age: ${resident.age}, Money: $${resident.money}, Job: ${resident.job}`
    );
  });
  console.log("---------------------");
});


// Function to increase everyone's money by 250 units on payday
function payDay() {
  console.log("It's payday in Fishyville! Everyone is getting their earnings...");
  people.forEach((person) => {
    person.money += 250;
  });
}

// Array to represent the different seasons in Fishyville
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
let currentSeasonIndex = 0; // Initialize with Spring (index 0)

// Function to change the season in Fishyville
function changeSeason() {
  currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
  const currentSeason = seasons[currentSeasonIndex];
  console.log(`It's now ${currentSeason} in Fishyville. Charlies got his cock out`);
}

// THINGS TO DO IN FISHVILLE! 
//---------------------------

// sendToWork(people[0], 200); // Send the first person in the people array to work and give them a salary of $200
// goShopping(people[1], 50); // Person 1 goes shopping with a cost of $50
//hostParty(people[2], 100); // Person 2 hosts a party with a cost of $100
// visitHouse(people[3], houses[0].residents[0]); // Person 3 visits the house of the first resident of the first house 

// payDay(); // Increase everyone's money by 250 units on payday

// changeSeason(); // Change the season in Fishyville
// changeSeason(); // Change the season again (it will cycle through the seasons)

//changeToNight(); // Change the time of day to night
//goToBed(people[1]); // Person 2 goes to bed at night
//wakeUp(people[0]); // Person 1 wakes up in the morning

// Your existing JavaScript code goes here...

// ...

// Function to update the description element with the given text
function updateDescription(text) {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = text;
}

// Function to get a random person from the people array
function getRandomPerson() {
  const randomIndex = Math.floor(Math.random() * people.length);
  return people[randomIndex];
}

// Function to get a random house from the houses array
function getRandomHouse() {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}


// THINGS TO DO IN FISHVILLE! 
//---------------------------
// Uncomment and modify the following code to activate functions on button clicks

document.getElementById("sendToWorkBtn").addEventListener("click", function () {
  const randomPerson = getRandomPerson();
  sendToWork(randomPerson, 200);
  updateDescription(`${randomPerson.name} ${randomPerson.lastName} is going to work as the ${randomPerson.job}.`);
});

document.getElementById("goShoppingBtn").addEventListener("click", function () {
  const randomPerson = getRandomPerson();
  const shoppingCost = Math.floor(Math.random() * 100) + 1; // Random cost between 1 and 100
  goShopping(randomPerson, shoppingCost);
  updateDescription(`${randomPerson.name} ${randomPerson.lastName} is going shopping and spent $${shoppingCost}.`);
});

document.getElementById("hostPartyBtn").addEventListener("click", function () {
  const randomPerson = getRandomPerson();
  const partyCost = Math.floor(Math.random() * 200) + 1; // Random cost between 1 and 200
  hostParty(randomPerson, partyCost);
  updateDescription(`${randomPerson.name} ${randomPerson.lastName} is hosting a party and spent $${partyCost}.`);
});

document.getElementById("visitHouseBtn").addEventListener("click", function () {
  const randomVisitor = getRandomPerson();
  const randomHouse = getRandomHouse();
  visitHouse(randomVisitor, randomHouse.residents[0]);
  updateDescription(`${randomVisitor.name} ${randomVisitor.lastName} is visiting ${randomHouse.name}'s house.`);
});

document.getElementById("payDayBtn").addEventListener("click", function () {
  payDay();
  updateDescription("It's payday in Fishyville! Everyone got their earnings increased by $250.");
});

document.getElementById("changeSeasonBtn").addEventListener("click", function () {
  changeSeason();
  const currentSeason = seasons[currentSeasonIndex];
  updateDescription(`It's now ${currentSeason} in Fishyville.`);
});



// Function to play the background music on page load
function playBackgroundMusic() {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
}

// Function to choose a random date (day, month, year)
function chooseRandomDate() {
  const randomYear = Math.floor(Math.random() * 100) + 1970; // Random year between 1970 and 2069
  const randomMonth = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
  const daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1; // Random day between 1 and the number of days in the month

  return {
    day: randomDay,
    month: randomMonth,
    year: randomYear,
  };
}

// Function to display the date in a human-readable format
function displayDate(date) {
  return `${date.month}/${date.day}/${date.year}`;
}

// Function to update the date every second
function updateDateEverySecond() {
  const dateElement = document.getElementById("currentDate");

  // Choose a random date initially
  let currentDate = chooseRandomDate();
  dateElement.textContent = displayDate(currentDate);

  // Update the date every second
  setInterval(() => {
    currentDate.day++;
    if (currentDate.day > new Date(currentDate.year, currentDate.month, 0).getDate()) {
      currentDate.day = 1;
      currentDate.month++;
      if (currentDate.month > 12) {
        currentDate.month = 1;
        currentDate.year++;
      }
    }

    dateElement.textContent = displayDate(currentDate);
  }, 1000);
}

// Update the date every second
updateDateEverySecond();

// Function to display everyone's information
function displayPeopleInfo() {
  const peopleInfoContainer = document.getElementById("peopleInfo");

  // Clear previous content
  peopleInfoContainer.innerHTML = "";

  // Create a list to hold the people's information
  const peopleList = document.createElement("ul");

  // Loop through the people array and create list items for each person
  people.forEach((person) => {
    const personItem = document.createElement("li");
    personItem.textContent = `${person.name} ${person.lastName}, Job: ${person.job}, Money: $${person.money}`;
    peopleList.appendChild(personItem);
  });

  // Append the list to the container
  peopleInfoContainer.appendChild(peopleList);
}

// Function to update the people's information every second
function updatePeopleInfoEverySecond() {
  // Call the displayPeopleInfo() function initially
  displayPeopleInfo();

  // Update the people's information every second
  setInterval(() => {
    displayPeopleInfo();
  }, 1000);
}

// Call the function to start updating the people's information every second
updatePeopleInfoEverySecond();

// Function to set every person's money to 0 (Bankrupt)
function bankruptPeople() {
  people.forEach((person) => {
    person.money = 0;
  });

  // After bankrupting, update the displayed people's information
  displayPeopleInfo();

  // Display message in the description div
  updateDescription("OH NO EVERYONES BROKE!!!");
}

// Event listener for the "Bankrupt" button
const bankruptButton = document.getElementById("BankruptBtn");
bankruptButton.addEventListener("click", bankruptPeople);

// Function to remove all people (BOOM)
function boomPeople() {
  // Remove all people from the array
  people.length = 0;

  // Update the displayed people's information (now empty)
  displayPeopleInfo();

  // Display message in the description div
  updateDescription("Everyone is dead!");

  // Change the background to the fire-elmo.gif
  document.body.style.backgroundImage = "url('https://gifdb.com/images/high/earth-exploding-boom-explosion-clouds-cartoon-lc4pn901xd9w7k0b.gif')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
}

// Event listener for the "💣BOOM💣" button
const boomButton = document.getElementById("BoomBtn");
boomButton.addEventListener("click", boomPeople);


// Function to play the music
function playMusic() {
  const audio = new Audio("music.mp3");
  audio.play();
}

// Event listener for the "Play Music" button
const playMusicButton = document.getElementById("playMusicBtn");
playMusicButton.addEventListener("click", playMusic);

// Global variable to store the currently playing audio
let currentAudio = null;

// Function to play the "music.mp3" audio
function playMusic() {
  if (currentAudio) {
    currentAudio.pause();
  }
  const audio = new Audio("music.mp3");
  audio.play();
  currentAudio = audio;
}

// Function to play the "music2.mp3" audio
function playMusic2() {
  if (currentAudio) {
    currentAudio.pause();
  }
  const audio = new Audio("music2.mp3");
  audio.play();
  currentAudio = audio;
}

// Function to change the background to night and display the sleep message
function changeToNightMode() {
  // Change the background to the night gif
  document.body.style.backgroundImage = "url('https://media.tenor.com/R2zqycugcuQAAAAC/pixel-night.gif')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  // Pause the "music.mp3" audio
  if (currentAudio) {
    currentAudio.pause();
  }

  // Play the "music2.mp3" audio
  playMusic2();

  // Display the sleep message in the description div
  updateDescription("Everyone in Fishyville is fast asleep 💤", "description2");
}

// Function to change the background to the original URL and display the wake-up message
function changeToDayMode() {
  // Change the background back to the original URL
  document.body.style.backgroundImage = "url('https://i.redd.it/z8rmqihs77391.gif')";

  // Pause the "music2.mp3" audio
  if (currentAudio) {
    currentAudio.pause();
  }

  // Play the "music.mp3" audio
  playMusic();

  // Display the wake-up message in the description div
  updateDescription("Everyone in Fishyville is well rested and ready for the day!", "description2");
}

// Event listener for the "🌙" button
const nightModeButton = document.getElementById("NightModeBtn");
nightModeButton.addEventListener("click", changeToNightMode);

// Event listener for the "☀️" button
const dayModeButton = document.getElementById("DayModeBtn");
dayModeButton.addEventListener("click", changeToDayMode);
