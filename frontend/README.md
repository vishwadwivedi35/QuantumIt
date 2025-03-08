# Took the help of Open AI for this ;

# QuantumIt

QuantumIt is a full-stack authentication system built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. It supports user login, registration, JWT authentication, and secure password handling.

## Features

- User Registration & Login
- Secure JWT Authentication
- Password Hashing
- React.js Frontend UI
- MongoDB for Storage

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/vishwadwivedi35/QuantumIt.git
cd QuantumIt
```

### 2. Install Dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend/` directory and add the following:

```sh
PORT=4000
MONGO_URI=mongodb+srv://dbUser:vishwaD@cluster0.a33he.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=10c46be3dfbc6ebd6e64bd5b6cc643aedfdc2b22c249f1c04b8de924870e7af3e30f4dee8dc82dec8cdf5f1066812c276ffa8c146e3ce0a7cf8a50280523619b
```

> **Note:** Replace `<your_mongodb_connection_string>` and `<your_secret_key>` with actual values.

### 4. Run the Application

#### Start the Backend

```sh
cd backend
npm start
```

#### Start the Frontend

```sh
cd ../frontend
npm start
```

### 5. Access the Application

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- The backend runs on `http://localhost:4000`.

## API Endpoints

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| POST   | `/api/register` | User Registration      |
| POST   | `/api/login`    | User Login & JWT Token |
| GET    | `/api/profile`  | Fetch User Profile     |

## Folder Structure

```
QuantumIt/
├── backend/     # Express.js Backend
│   ├── models/  # Mongoose Models
│   ├── routes/  # Express Routes
│   ├── server.js
│   ├── .env     # Environment Variables
├── frontend/    # React.js Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
```

## Contributing

Feel free to submit issues or pull requests.

## License

MIT License
