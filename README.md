# Task Management CRUD API

A simple RESTful CRUD API built with **Node.js** and **Express.js**. This project was created as a backend assignment to demonstrate how to create, read, update, and delete tasks using an in-memory array. Swagger is used for API documentation and testing.

## Features

- Hello World server
- Get all tasks
- Get a task by ID
- Create a new task
- Update an existing task
- Delete a task
- Proper HTTP status codes
- Swagger API documentation

## Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- Swagger JSDoc

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-management-api.git
```

2. Open the project folder:

```bash
cd task-management-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node index.js
```

The server will run at:

```
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get a task by ID |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Request Examples

### Create a Task

**POST** `/tasks`

```json
{
  "title": "Learn Express"
}
```

### Update a Task

**PUT** `/tasks/1`

```json
{
  "title": "Learn Express.js",
  "done": true
}
```

## Swagger Documentation

After starting the server, open:

```
http://localhost:3000/api-docs
```

Swagger provides an interactive interface to test all API endpoints.

## HTTP Status Codes

- **200 OK** – Request successful
- **201 Created** – Task created successfully
- **400 Bad Request** – Invalid request data
- **404 Not Found** – Task not found

## Project Structure

```
task-management-api/
│── node_modules/
│── index.js
│── package.json
│── package-lock.json
└── README.md
```

## Notes

- This project stores data in memory using a JavaScript array.
- No database is used.
- Data will be reset whenever the server is restarted.

## Author

**Zainab Bilal**

Backend Assignment – CRUD API using Express.js