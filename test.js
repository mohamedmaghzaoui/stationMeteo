import http from 'k6/http';
import { check, sleep } from 'k6';


const BASE_URL = 'http://localhost:8000';  // Replace with your Symfony server URL
const USERS_COUNT = 10;  // Number of users to simulate

export let options = {
    vus: 5,  // Number of virtual users to simulate concurrently
    duration: '30s',  // Duration of the test
};

// Function to generate random usernames
function generateUsername() {
    return `user${Math.floor(Math.random() * 1000000)}`;
}

// Function to create a new user
export function createUser(username) {
    const url = `${BASE_URL}/users`;
    const payload = JSON.stringify({
        email: `${username}@example.com`,  // Assuming email format
        name: username,
        password: 'password123',  // Example password for simplicity (should be stronger in real scenarios)
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = http.post(url, payload, params);
    check(response, {
        'User created successfully': (resp) => resp.status === 200 || resp.status === 201,
    });
}

// Function to login a user
export function loginUser(username) {
    const url = `${BASE_URL}/login`;
    const payload = JSON.stringify({
        username: `${username}@example.com`,  // Assuming email format
        password: 'password123',  // Example password
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let response = http.post(url, payload, params);
    check(response, {
        'User logged in successfully': (resp) => resp.status === 200,
    });

    // Extract and return authentication token or session cookie if applicable
    return response.headers['Authorization'] || response.cookies['SESSION_ID'];
}

// Function to logout a user
export function logoutUser(authToken) {
    const url = `${BASE_URL}/logout`;
    const params = {
        headers: {
            'Authorization': authToken,  // Include authorization token or session cookie
        },
    };

    let response = http.post(url, null, params);
    check(response, {
        'User logged out successfully': (resp) => resp.status === 200,
    });
}

// Main test scenario
export default function () {
    // Create users
    for (let i = 0; i < USERS_COUNT; i++) {
        let username = generateUsername();
        createUser(username);
        sleep(1);  // Optional sleep to simulate realistic user behavior
    }

    // Login and Logout users
    for (let i = 0; i < USERS_COUNT; i++) {
        let username = `user${i + 1}`;
        let authToken = loginUser(username);
        sleep(1);  // Optional sleep to simulate realistic user behavior
        logoutUser(authToken);
        sleep(1);  // Optional sleep to simulate realistic user behavior
    }
}
