Travel-Diary 🌍

Travel-Diary is a full-stack web application developed as a learning project to help users record and manage their travel experiences digitally. Instead of keeping memories scattered across notes or social media, this application allows users to store their travel stories in one place along with images.

This project helped me understand real-world full-stack development, including frontend–backend integration, database handling, authentication, and deployment.

✨ Features

User authentication (login & logout)

Create and manage personal travel stories

Upload images for each travel entry using Multer

View all saved travel stories in a structured layout

Responsive design for better user experience

🛠️ Tech Stack
Frontend

React.js

HTML5

CSS3

JavaScript

Backend

Node.js

Express.js

Database

MongoDB (MongoDB Atlas)

Other Tools

Multer (for image uploads)

Axios (for API requests)

🚀 Deployment

Backend deployed on Render

Database hosted on MongoDB Atlas

Note: The application works smoothly in the local environment. However, after deployment on Render, travel stories may not display properly due to API base URL, CORS, or environment variable configuration.

⚠️ Known Issue

Travel stories are not rendered on the UI after deployment on Render

This issue is currently under investigation and likely related to production environment setup

🧑‍🎓 Learning Outcomes

Through this project, I learned:

How to build and connect frontend and backend using REST APIs

Handling file uploads in a Node.js application

Working with MongoDB and designing schemas

Managing environment variables and deployment

Debugging production issues after deployment

🔧 Local Setup

Clone the repository

git clone <repository-url>


Install dependencies

npm install


Add environment variables

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the development server

npm start

📌 Future Improvements

Fix Render deployment issue

Add edit and delete functionality for travel stories

Improve UI/UX

Add location-based filtering
