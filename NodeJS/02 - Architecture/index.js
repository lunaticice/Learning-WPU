// Synchronous

// const getUserSync = (id) => {
//   const name = id === 1 ? 'Luna' : 'Lorelei';
//   return { id, name };
// };

// const firstUser = getUserSync(1);
// console.log(firstUser);

// const secondUser = getUserSync(2);
// console.log(secondUser);

// const hello = 'Hello World!';
// console.log(hello);

// Asynchronous

const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const name = id === 1 ? 'Luna' : 'Lorelei';
    callback({ id, name });
  }, time);
};

const firstUser = getUser(1, (result) => {
  console.log(result);
});
const secondUser = getUser(2, (result) => {
  console.log(result);
});

const hello = 'Hello World!';
console.log(hello);
