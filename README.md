# RESTful-API-server

**RESTful-API-server** is a backend API for a task management system that allows users to manage tasks,
assign deadlines, and mark tasks as completed.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

To get a local copy up and running follow these simple steps:

```bash
# Clone the repository
$ git clone https://github.com/princeorji/RESTful-API-server.git

# Navigate to the project directory
$ cd RESTful-API-server

# Install dependencies
$ npm install
```

Create a `.env` file in the root of the project and add your environment variables. You can use the `.env.example` file as a template:

```bash
cp .env.example .env
```

Edit the `.env` file to include your actual credentials.

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run dev
```

## API Endpoints

### Tasks

- `POST /tasks`: Create a new task.

```json
{
  "title": "Lorem Ipsum",
  "description": "Phasellus placerat consectetur arcu eu molestie",
  "dueDate": "2024-12-31",
  "status": "pending"
}
```

- `GET /tasks`: Retrieve all tasks (supports pagination)

- `GET /tasks/:id`: Retrieve a task by its ID.

- `PUT /tasks/:id`: Update an existing task by ID.

```json
{
  "status": "completed"
}
```

- `DELETE /tasks/:id`: Delete a task by ID.

### Response

The API returns standard HTTP status codes:

- `201 Created`: Task created successfully.
- `200 OK`: Task retrieved successfully.
- `422 Unprocessable Entity`: Invalid input.
- `404 Not Found`: Task not found.
- `500 Internal Server Error`: Server encountered an error.

<!-- ## Run tests

```bash
# unit tests
$ npm run test
``` -->
