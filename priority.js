const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5b2dhdmFyc2hpdGhhX2thdHRhQHNybXNwLmVkdS5pbiIsImV4cCI6MTc3NzcwNDczOSwiaWF0IjoxNzc3NzAzODM5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOGYzMjcxNmItMTIwMi00NTMwLTkxYjctOWI1NzRlM2VhZGEwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieW9nYXZhcnNoaXRoYSIsInN1YiI6ImFiNWU3ZGQ0LWYxYzQtNDhlMy04OTJhLTliZTI3NDQxYjQ1MyJ9LCJlbWFpbCI6InlvZ2F2YXJzaGl0aGFfa2F0dGFAc3Jtc3AuZWR1LmluIiwibmFtZSI6InlvZ2F2YXJzaGl0aGEiLCJyb2xsTm8iOiJhcDIzMTEwMDEwNjY2IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiYWI1ZTdkZDQtZjFjNC00OGUzLTg5MmEtOWJlMjc0NDFiNDUzIiwiY2xpZW50U2VjcmV0IjoiU0h0cVJQRGJjZ2Z2REZtZyJ9.cKqXDzuVgBGrt57f3krb-NAOUfB1JbtM34nN5BS9__Y";
const API_URL = "http://20.207.122.201/evaluation-service/notifications";

async function getPriorityNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    let data = response.data.notifications;

    // Sort by impact (desc) and timestamp (desc)
    data.sort((a, b) => {
      if (b.impact !== a.impact) {
        return b.impact - a.impact;
      }
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    const top10 = data.slice(0, 10);

    console.log("🔥 TOP 10 PRIORITY NOTIFICATIONS:");
    console.log(top10);

  } catch (err) {
    console.log("ERROR:", err.message);
  }
}

getPriorityNotifications();