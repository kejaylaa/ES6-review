import { Greeter, delayedMessage, fetchData, createUserMap } from './tools.js';

const greeter = new Greeter('Zedeka');
console.log(greeter.greet()); // Class

delayedMessage('This was delayed by 2 seconds!', 2000).then(console.log); // Promise

fetchData().then(data => console.log('Fetched data:', data)); // Async/Await

const users = ['Alice', 'Bob', 'Charlie'];
const userMap = createUserMap(users); // Map
userMap.forEach((user, id) => {
  console.log(`User #${id}: ${user}`);
});