fetch("http://192.168.20.61:13004/api/log/native", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
})
  .then((response) => {
    console.log(response.status);
    return response.text();
  })
  .then((data) => console.log(data));
