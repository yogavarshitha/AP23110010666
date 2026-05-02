const axios = require("axios");
const logRequest = require("../logging_middleware/logger");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5b2dhdmFyc2hpdGhhX2thdHRhQHNybXNwLmVkdS5pbiIsImV4cCI6MTc3NzcwNTMyNSwiaWF0IjoxNzc3NzA0NDI1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjJmZTg5YTctOGJhZi00YTQzLWE5NWUtMGJhODA2ZGY2MGVkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieW9nYXZhcnNoaXRoYSIsInN1YiI6ImFiNWU3ZGQ0LWYxYzQtNDhlMy04OTJhLTliZTI3NDQxYjQ1MyJ9LCJlbWFpbCI6InlvZ2F2YXJzaGl0aGFfa2F0dGFAc3Jtc3AuZWR1LmluIiwibmFtZSI6InlvZ2F2YXJzaGl0aGEiLCJyb2xsTm8iOiJhcDIzMTEwMDEwNjY2IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiYWI1ZTdkZDQtZjFjNC00OGUzLTg5MmEtOWJlMjc0NDFiNDUzIiwiY2xpZW50U2VjcmV0IjoiU0h0cVJQRGJjZ2Z2REZtZyJ9.7pSRXhe4O65BiMfthTOhroZSbHFWu2EuOiuwBpI_Tn0";

const API_URL = "http://20.207.122.201/evaluation-service/depots";

async function scheduleMaintenance() {
  logRequest("GET", API_URL);

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    const depots = response.data.depots;

    console.log("\n🚗 Maintenance Plan:\n");

    depots.forEach(depot => {
      let priority = depot.MechanicHours > 100 ? "HIGH" : "LOW";

      console.log(`Depot ${depot.ID} → ${priority} priority`);
    });

  } catch (error) {
    console.log("ERROR ❌");
    console.log(error.response?.data || error.message);
  }
}

scheduleMaintenance();