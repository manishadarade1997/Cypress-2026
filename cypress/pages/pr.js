// define custom tasks here
on('task', {
  fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = false; // true or false
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Data is not fetched"));
        }
      }, 2000);
    });
  }
});
      

fetchData().then((data) => {
  console.log("Data is fetched successfuly:", data);
}).catch((err) =>{
  console.log("Error: ", err);
})

