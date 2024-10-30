fetch('http://192.168.20.61:8080/api/user/login', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
        account: 'RAPHAS_ADMIN',
        password: 'RAPHAS_ADMIN'
    })
})
    .then(response => {
      console.log(response.status);
      return response.text()})
    .then(data => console.log(data));
