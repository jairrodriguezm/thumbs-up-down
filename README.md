# Rule of Thumb 👍👎

![Angular](https://img.shields.io/badge/Angular-14.2.0-dd0031?style=for-the-badge&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.5.0-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-14.1.0-FF5C5C?style=for-the-badge)
![SCSS](https://img.shields.io/badge/SCSS-Hot%20Pink-FF69B4?style=for-the-badge&logo=sass&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

An interactive, responsive voting application built with **Angular 14**, allowing users to express their opinions (positive or negative) on public figures from various fields including entertainment, business, politics, and the environment.

## 📖 Project Overview

**Rule of Thumb** is a modern web application designed to track public sentiment on influential figures. The application presents users with profiles of famous individuals and allows them to vote on whether they have a positive or negative view of them.

The project demonstrates advanced Angular concepts, including component architecture, reactive programming with RxJS, state management, and seamless integration with a mock backend using `json-server`.

## ✨ Key Features

- **Interactive Voting System:** Users can cast positive or negative votes for various public figures.
- **Real-time Data Mocking:** Utilizes `json-server` to simulate a REST API for fetching and updating voting data.
- **Responsive Design:** Built with a scalable SCSS architecture ensuring a flawless experience across desktop, tablet, and mobile devices.
- **Modern UI Components:** Integrates **PrimeNG** for polished and accessible UI elements.
- **Reactive Architecture:** Leverages **RxJS** observables for handling asynchronous data streams and state changes efficiently.
- **Smooth Animations:** Implements Angular animations for a dynamic and engaging user experience.

## 🛠️ Tech Stack

- **Framework:** Angular 14
- **Styling:** SCSS (Sass), PrimeNG
- **Reactivity:** RxJS
- **Mock Backend:** JSON Server
- **Date Parsing:** Moment.js
- **Testing:** Karma & Jasmine

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/en/) (v14.x or higher recommended)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rule-of-thumb
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

This application requires both the frontend Angular development server and the backend JSON server to be running simultaneously.

1. **Start the Mock Backend (JSON Server):**
   In your terminal, run the following command to serve the data from `db.json`:
   ```bash
   npm run json-run
   ```
   The API will be available at `http://localhost:3000/`.

2. **Start the Angular Development Server:**
   Open a new terminal window/tab and run:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve -o
   ```
   The application will automatically open in your default browser at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🏗️ Architecture Highlights

- **Component-Based Architecture:** The UI is broken down into reusable, maintainable Angular components.
- **Services:** API interactions and shared business logic are encapsulated within Angular services.
- **Interfaces & Enums:** Strong typing is enforced throughout the application using TypeScript interfaces and enumerations for robustness.
- **Pipes:** Custom and built-in pipes are used for data transformation in templates.
- **Environment Variables:** Configuration is managed via environment files for easy switching between development and production setups.

## 🧪 Testing

To ensure code quality and prevent regressions, the project is configured with Jasmine and Karma for unit testing.

- **Run Unit Tests:**
  ```bash
   npm run test
  ```
  This will execute the unit tests via [Karma](https://karma-runner.github.io) and open a browser window displaying the test results.

## 📦 Build

Run the following command to build the project for production:

```bash
npm run build
```
The build artifacts will be optimized and stored in the `dist/` directory, ready to be deployed to any static hosting service.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#) if you want to contribute.

---
*Generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.*
