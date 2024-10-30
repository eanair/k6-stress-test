import http from "k6/http";

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "5s",
      preAllocatedVUs: 100,
      maxVUs: 100,
    },
  },
};

// export default function () {
//     const response = http.get('http://192.168.20.61:13004/api/user',{
//     // const response = http.get('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC',{
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiYWNjb3VudCI6IlJBUEhBU19BRE1JTiIsIndlYl9wZXJtaXNzaW9uIjowLCJpYXQiOjE3MzAxODExMzQsImV4cCI6MTczMjc3MzEzNH0.LwzOlXhU6HAEyEPIHwvJS4V-ATwaT4_pntPSxUnve-8'
//         }
//     });
//     console.log(response.status, response.body);
// }

// export default function () {
//     const response = http.get('http://192.168.20.61:13004/docs',{
//     // const response = http.get('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC',{
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiYWNjb3VudCI6IlJBUEhBU19BRE1JTiIsIndlYl9wZXJtaXNzaW9uIjowLCJpYXQiOjE3MzAxODExMzQsImV4cCI6MTczMjc3MzEzNH0.LwzOlXhU6HAEyEPIHwvJS4V-ATwaT4_pntPSxUnve-8'
//         }
//     });
//     console.log(response.status, response.body);
// }

// export default function () {
//     const response = http.get('https://d1q7z4sdcpsdsq.cloudfront.net',{
//     // const response = http.get('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC',{
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiYWNjb3VudCI6IlJBUEhBU19BRE1JTiIsIndlYl9wZXJtaXNzaW9uIjowLCJpYXQiOjE3MzAxODExMzQsImV4cCI6MTczMjc3MzEzNH0.LwzOlXhU6HAEyEPIHwvJS4V-ATwaT4_pntPSxUnve-8'
//         }
//     });
//     console.log(response.status, response.body);
// }

// export default function () {
//     const response = http.get('https://d3dg4ckxgnsman.cloudfront.net/service',{
//     // const response = http.get('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC',{
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImFjY291bnQiOiJhZG1pbiIsImlhdCI6MTczMDE4NTkyOCwiZXhwIjoxNzMwMTg5NTI4fQ.a5-Q9NH8_uqPCyCMFYdcPp2hBzG_gz9AN6CwAt60XDA'
//         }
//     });
//     console.log(response.status, response.body);
// }

export default function () {
  const response = http.get("http://192.168.20.61:13004/api/log/native", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.status, response.body);
}

// export default function () {
//     const response = http.post('http://192.168.20.61:13004/api/log',JSON.stringify({
//         service: "string",
//         company_id: 16,
//         event: "string",
//         classification: 0
//     }),{
//     // const response = http.get('http://192.168.20.61:8080/api/user?page=1&take=10&searchText=&searchColumn=&orderColumn=created_at&orderBy=DESC',{
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiYWNjb3VudCI6IlJBUEhBU19BRE1JTiIsIndlYl9wZXJtaXNzaW9uIjowLCJpYXQiOjE3MzAxODExMzQsImV4cCI6MTczMjc3MzEzNH0.LwzOlXhU6HAEyEPIHwvJS4V-ATwaT4_pntPSxUnve-8'
//         }
//     });
//     console.log(response.status, response.body);
// }
