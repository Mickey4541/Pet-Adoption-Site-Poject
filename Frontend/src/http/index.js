import axios from 'axios'

export const API = axios.create({
    baseURL : "http://localhost:3000/api",
    headers : {
        'Content-Type' : "application/json",
        Accept : 'application/json'
    }
})

export const APIAuthenticated = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': "application/json",
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },
});

// Add a log to check the token value
console.log(localStorage.getItem("token"));


