# 🚀 RocketBudget

Welcome to **RocketBudget** – your ultimate financial management tool! With RocketBudget, take control of your finances through an intuitive platform that tracks income and expenses, calculates net balances in real-time, and visualizes financial data through interactive charts. Designed to empower and inspire, RocketBudget aims to help users make smarter financial decisions every step of the way.

---

## 🌟 Description

**RocketBudget** is an innovative and user-friendly application tailored for individuals who want to streamline their financial planning. This platform offers secure authentication, dynamic data tracking, and a sleek interface for an exceptional user experience.

### 🌟 Vision for the Future:
RocketBudget will soon integrate a **community blog feature**, enabling users to:
- Share money-saving tips.
- Discuss investment strategies.
- Collaborate on financial planning ideas.

Our goal is to build a financially supportive and insightful ecosystem where every penny counts.

---

## 📜 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

---

## ⚙️ Installation

To set up RocketBudget locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Justbeingtai/RocketBudget.git
    ```
2. Navigate to the client folder:
    ```bash
    cd RocketBudget/client
    ```
3. Install client dependencies:
    ```bash
    npm install
    ```
4. Move to the server folder and install its dependencies:
    ```bash
    cd ../server
    npm install
    ```
5. Set up the MongoDB database:
    - Create a MongoDB database.
    - Update the `.env` file with your database URI and other credentials.
6. Build the client:
    ```bash
    cd ../client
    npm run build
    ```
7. Start the server:
    ```bash
    cd ../server
    npm start
    ```
8. Access the app at `http://localhost:4000`.

---

## 🚀 Usage

RocketBudget offers seamless navigation and robust functionality:

1. **Sign Up or Log In**: Securely access your account.
2. **Track Finances**: Manage detailed records of income and expenses.
3. **Visualize Financial Health**: Leverage interactive charts and net balance calculations.
4. **Plan Smartly**: Use insights from your data to make informed financial decisions.

---

## 🖼️ Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <strong>Login Page</strong><br>
        <img src="client/src/assets/images/login.png" alt="Login Page" width="300px">
      </td>
      <td align="center">
        <strong>Signup Page</strong><br>
        <img src="client/src/assets/images/signup.png" alt="Signup Page" width="300px">
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>Dashboard</strong><br>
        <img src="client/src/assets/images/frontpage.png" alt="Dashboard" width="300px">
      </td>
      <td align="center">
        <strong>Inputs Section</strong><br>
        <img src="client/src/assets/images/inputs.png" alt="Inputs Section" width="300px">
      </td>
    </tr>
  </table>
</div>

---

## 👥 Credits

**RocketBudget** was brought to life by a dedicated team:
- [Tai Ho](https://github.com/Justbeingtai)
- Nancy
- Tyler
- Bitsiet

### 🔧 Resources and Libraries
- [React.js](https://reactjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📝 License

This project is licensed under the MIT License. Learn more on [Choose a License](https://choosealicense.com/).

---

## 🏅 Badges

![Node.js](https://img.shields.io/badge/node.js-22.10.0-green)
![React.js](https://img.shields.io/badge/react-18.2.0-blue)
![Apollo Client](https://img.shields.io/badge/apollo--client-3.5.10-purple)
![MongoDB](https://img.shields.io/badge/mongodb-5.0.8-green)

---

## 🌟 Features

- **Secure Authentication**: Log in or sign up securely.
- **Financial Tracking**: Input, update, and delete income and expenses.
- **Real-Time Insights**: Instantly calculate net balances.
- **Dynamic Visualizations**: Interactive charts for data interpretation.
- **Future Blogs**: A platform to share financial wisdom and tips.

---

## 🌐 How to Contribute

We welcome contributions to enhance RocketBudget! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add new feature"
    ```
4. Push to your branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Submit a pull request.

Read more about contributing at [Contributor Covenant](https://www.contributor-covenant.org/).

---

## 🧪 Tests

To ensure stability:

1. Install testing dependencies:
    ```bash
    npm install --save-dev jest
    ```
2. Run tests:
    ```bash
    npm test
    ```

---

RocketBudget is your partner in financial management. Join our journey and contribute to an ever-growing, supportive community! 🌠