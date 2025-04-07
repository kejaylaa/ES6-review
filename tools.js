// Class
export class Greeter {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello, ${this.name}!`;
    }
  }
  
  // Promise
  export function delayedMessage(msg, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(msg);
      }, delay);
    });
  }
  
  // Async/Await
  export async function fetchData() {
    const fakeAPI = () => new Promise((res) => setTimeout(() => res({ data: 123 }), 1000));
    const result = await fakeAPI();
    return result;
  }
  
  // Map
  export function createUserMap(users) {
    const userMap = new Map();
    users.forEach((user, index) => {
      userMap.set(index + 1, user);
    });
    return userMap;
  }