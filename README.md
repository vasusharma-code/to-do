# 📌 Advanced React To-Do App with Authentication & API Integration

## 🚀 Project Overview
This is an **advanced To-Do application** built using **React, Redux, and Tailwind CSS**. It includes authentication (mock login/logout), external API integration (weather data), and task prioritization, ensuring an enhanced user experience.

---
## 📋 Features

✅ **User Authentication** (Mock login/logout using Redux)
✅ **Task Management** (Add, Delete, Prioritize tasks)
✅ **Persistent Storage** (Tasks saved in local storage)
✅ **API Integration** (Fetch weather data for outdoor tasks)
✅ **Responsive UI** (Tailwind CSS for a modern and mobile-friendly design)
✅ **Protected Routes** (Only logged-in users can access tasks)

---
## 🏗️ Folder Structure
```
📦 advanced-todo-app  
 ┣ 📂 src  
 ┃ ┣ 📂 components  
 ┃ ┃ ┣ 📜 TaskInput.jsx  
 ┃ ┃ ┣ 📜 TaskList.jsx  
 ┃ ┃ ┣ 📜 TaskItem.jsx  
 ┃ ┣ 📂 pages  
 ┃ ┃ ┣ 📜 Home.jsx  
 ┃ ┃ ┣ 📜 Login.jsx  
 ┃ ┣ 📂 redux  
 ┃ ┃ ┣ 📜 taskSlice.js  
 ┃ ┃ ┣ 📜 authSlice.js  
 ┃ ┃ ┣ 📜 store.js  
 ┃ ┣ 📂 services  
 ┃ ┃ ┣ 📜 api.js  
 ┃ ┣ 📂 styles  
 ┃ ┃ ┣ 📜 global.css  
 ┃ ┣ 📜 App.jsx  
 ┃ ┣ 📜 main.jsx  
 ┣ 📜 package.json  
 ┣ 📜 README.md  
```
---
## ⚙️ Installation & Setup

### 🔹 Prerequisites
Ensure you have **Node.js** and **npm/yarn** installed.

### 🔹 Clone the Repository
```sh
$ git clone https://github.com/vasusharma-code/to-do
$ cd advanced-todo-app
```

### 🔹 Install Dependencies
```sh
$ npm install  # OR yarn install
```

### 🔹 Run the Application
```sh
$ npm run dev  # OR yarn dev
```

---
## 🌐 API Integration (Weather Data)
This app fetches **real-time weather data** from OpenWeather API for high-priority tasks.

### 📌 Steps to Use the API:
1. **Get an API Key** from [OpenWeather](https://openweathermap.org/api)
2. Replace `YOUR_WEATHER_API_KEY` in `src/services/api.js`
3. Restart the application

---
## 🎨 UI/UX with Tailwind CSS
The app is designed with **Tailwind CSS** for a sleek, modern, and fully responsive layout.

---
## 🚀 Deployment (Vercel/Netlify)
To deploy the app:
1. **Build the project**:
```sh
$ npm run build  # OR yarn build
```
2. **Deploy on Vercel**:
```sh
$ npm i -g vercel
$ vercel
```

OR deploy on **Netlify** by linking the repository.

---
## 🏆 Evaluation Criteria
✅ **Functionality** – Features should work as expected  
✅ **Code Quality** – Clean, modular, and follows best practices  
✅ **Design & UX** – Responsive, visually appealing, and user-friendly  
✅ **API Integration** – Successfully fetches and displays external data  


---
## 📞 Contact
For any queries or suggestions, feel free to reach out! 😊

