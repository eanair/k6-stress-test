fetch('https://d3dg4ckxgnsman.cloudfront.net/service', {
    headers: {
       'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImFjY291bnQiOiJhZG1pbiIsImlhdCI6MTczMDE4NTkyOCwiZXhwIjoxNzMwMTg5NTI4fQ.a5-Q9NH8_uqPCyCMFYdcPp2hBzG_gz9AN6CwAt60XDA'
       
    },
    method: 'GET',
})
    .then(response => {
      console.log(response.status);
      return response.text()})
    .then(data => console.log(data));


//     fetch('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC', {
//     headers: {
//        'Content-Type': 'application/json',
//             'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiYWNjb3VudCI6IlJBUEhBU19BRE1JTiIsIndlYl9wZXJtaXNzaW9uIjowLCJpYXQiOjE3MzAxODExMzQsImV4cCI6MTczMjc3MzEzNH0.LwzOlXhU6HAEyEPIHwvJS4V-ATwaT4_pntPSxUnve-8'
       
//     },
//     method: 'GET',
// })
//     .then(response => {
//       console.log(response.status);
//       return response.text()})
//     .then(data => console.log(data));
