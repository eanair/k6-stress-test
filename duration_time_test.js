import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 100, 
    duration: '1s', 
};

export default function () {
    const response = http.post('http://192.168.20.61:8080/api/user/login', JSON.stringify({
        account: 'RAPHAS_ADMIN',
        password: 'RAPHAS_ADMIN'
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.status, response.body);
    sleep(1);
}
