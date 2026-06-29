# User Panel (panelKarbaran) React + Vite

A simple user management panel built with **React** and **Vite**, using **Firebase Realtime Database** for storing and managing data.

🔗 **Live Demo:** [https://xrfanx.github.io/panelKarbaran/](https://xrfanx.github.io/panelKarbaran/)

---

## ✨ Features

- View the list of users in a table (styled with Bootstrap)
- **Add** a new user
- **Edit** an existing user's information (first name, last name, email) through a modal
- **Delete** a user with a confirmation modal
- Real-time data fetching and updates using Firebase Realtime Database

---

## 🛠 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Bootstrap](https://react-bootstrap.netlify.app/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)

---

## 🚀 Running the Project Locally

```bash
# Clone the repository
git clone https://github.com/xrfanx/panelKarbaran.git

# Go into the project folder
cd panelKarbaran

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📦 Build & Deploy

To create a production build:

```bash
npm run build
```

To deploy to GitHub Pages:

```bash
npm run deploy
```

---

## ⚠️ Note

This project was built for learning/practice purposes, and its Firebase database is currently configured with open read/write access (anyone can read, write, or delete data). For real-world or production use, make sure to configure proper [Security Rules](https://firebase.google.com/docs/database/security).

---

## 📄 License

This project is open for anyone to use for learning purposes.
