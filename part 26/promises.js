function thisTakesSomeTime() {
  const giveError = false;
  return new Promise(function (resolve, reject) {
    setTimeout(handleGetData, 3000);

    function handleGetData() {
      if (!giveError)
        resolve({
          name: "John Doe",
          items: ["thsirt", "jeans"],
        });
      else
        reject({
          code: "connection-lost",
        });
    }
  });
}

// thisTakesSomeTime()
//   .then(function (data) {
//     document.write(
//       "Name: " + data.name + ". Amount of items bought: " + data.items.length
//     );
//   })
//   .catch(function (err) {
//     console.log("We got an error with the code: " + err.code);
//   });

console.log("Start");

async function getTheData() {
  try {
    const data = await thisTakesSomeTime();
    document.write(
      "Name: " + data.name + ". Amount of items bought: " + data.items.length
    );
  } catch (err) {
    console.log("We got an error with the code: " + err.code);
  }
}
getTheData();

console.log("do something else");

for (let i = 0; i < 5; i++) {
  console.log(i);
}
