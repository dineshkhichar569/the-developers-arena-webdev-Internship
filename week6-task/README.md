# Week 6 – Advanced JavaScript & APIs

## What I Learned

This week, I learned how to work with asynchronous JavaScript and how real-world applications communicate with external services using REST APIs.  
I understood how to fetch, process, and display API data, handle errors, and persist user preferences using Local Storage.

Application screenshots are stored inside:  
**screenshots/**

---

## Key Concepts

- ⏳ Asynchronous JavaScript (Promises, async/await)
- 🌐 REST APIs and HTTP methods
- 📦 JSON data handling and parsing
- 💾 Local Storage and Session Storage
- 📁 JavaScript modules and code organization
- 🚨 Error handling and debugging

---

## What I Did

- Fetched data from a public weather API using async/await  
- Built a Weather Dashboard Application  
- Displayed current weather information dynamically  
- Implemented city search functionality  
- Stored user preferences (last searched city) in Local Storage  
- Handled loading states and API errors gracefully  
- Organized JavaScript code using modules  
- Tested API requests using browser DevTools  

---

## Algorithms & Logic Used

**🌐 API Fetch Logic**  
Used `fetch()` with async/await to retrieve weather data from OpenWeatherMap API.

**🚨 Error Handling**  
Checked HTTP response status and displayed user-friendly error messages.

**💾 Local Storage Persistence**  
Saved user-selected city in Local Storage and loaded it on page refresh.

**🔁 Data Parsing**  
Extracted and formatted required data from JSON response.

**🧩 Modular Code Structure**  
Separated API logic, storage logic, and UI logic into different JavaScript files.

---

## Testing Evidence

**API Fetch Test**  
- Expected: Weather data fetched for valid city  
- Result: ✔️ Passed  

**Invalid City Test**  
- Expected: Error message shown  
- Result: ✔️ Passed  

**Local Storage Test**  
- Expected: Last searched city saved and restored  
- Result: ✔️ Passed  

**Page Reload Test**  
- Expected: Weather data loads from saved city  
- Result: ✔️ Passed  

**Responsive Layout Test**  
- Expected: App works on mobile and desktop  
- Result: ✔️ Passed  

---

## Project

**Goal:** Build a Weather Dashboard Application.

**Features Implemented:**

- Search weather by city name  
- Display temperature, weather condition, humidity, and wind speed  
- Store user’s last searched city  
- Error handling for invalid API responses  
- Clean and responsive UI  

---

## Folder Structure

```bash
repo/
– week6-task/
– index.html
– css/
– styles.css
– js/
– api.js
– storage.js
– app.js
– screenshots/
– README.md

```

---

## Step-by-Step Installation & Configuration Guide

1. Clone the repository
```bash 
   git clone https://github.com/dineshkhichar569/the-developers-arena-webdev-Internship/tree/ede4d8b3f2af9ec03348f256483bc4884090f707/week6-task
   ```

2. Navigate to the project directory  

3. Open `index.html` in your browser  

---

## Step-by-Step Guide

**Day 1 – API Fundamentals**  
Learned REST APIs, JSON structure, and HTTP methods.

**Day 2 – Async JavaScript**  
Practiced Promises and async/await.

**Day 3 – API Integration**  
Connected application with OpenWeatherMap API.

**Day 4 – Data Display**  
Displayed weather data dynamically on UI.

**Day 5 – Local Storage**  
Saved and loaded user preferences.

**Day 6 – Advanced Features**  
Added search functionality and error handling.

**Day 7 – Polish**  
Improved UI, handled edge cases, and tested application.

---

## Resources I Used

- JavaScript MDN Docs  
- OpenWeatherMap API Documentation  
- freeCodeCamp – JavaScript  

---

## Author

**Dinesh Khichar**  
B.Tech CSE | DIT University, Dehradun  
📧 dinesh.khichar.work@gmail.com  
💻 https://github.com/dineshkhichar569  
🌐 https://dineshportfolios.site  

---

## License

This project is made for learning and practice during my web development journey.