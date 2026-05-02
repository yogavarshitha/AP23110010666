# 🚀 Vehicle Maintenance Scheduler & Notification System

## 📌 Project Overview
This project implements a backend system for:
- Vehicle maintenance scheduling
- Notification prioritization
- Logging middleware for API tracking

It is built using Node.js and follows a microservices-based structure.

---

## 🧩 Project Structure
AP23110010666/
│
├── logging_middleware/
│ └── logger.js
│


├── notification_app_be/
│ ├── index.js
│ └── priority.js
│


├── vehicle_maintenance_scheduler/
│ └── app.js
│


├── notification_system_design.md
├── package.json
└── README.md


---

## ⚙️ Features

### ✅ Logging Middleware
- Logs API request method, URL, and timestamp
- Reusable across services

### ✅ Notification System
- Processes notifications
- Applies priority logic (HIGH / LOW)

### ✅ Vehicle Maintenance Scheduler
- Fetches depot data using API
- Assigns maintenance priority

---

## 🔥 Technologies Used
- Node.js
- Express.js
- Axios

---

## ▶️ How to Run

```bash
npm install
node index.js

## 📊 Sample Output

Maintenance Plan:
Depot 1 → LOW priority  
Depot 2 → HIGH priority  

Top 10 Priority Notifications:
- Placement: Amazon hiring
- Event: traditional-day
...

## 📄 Documentation

Detailed system design is available in:

notification_system_design.md

It includes:
- API Design
- Database Design
- Query Optimization
- Performance Improvements
- notify_all redesign
- Priority logic explanation
