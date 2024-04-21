// const baseUrl = "http://localhost:8001/api/v1";                // mongo compass
const baseUrl= "https://logistics-server.onrender.com/api/v1";



const header = {
    "Content-type": "application/json",
authorization:`bearer ${localStorage.getItem("accessToken")}`
}