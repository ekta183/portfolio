
# 💼 Personal Portfolio Website

This is a full-stack portfolio project built using the **MERN** stack, showcasing my personal and professional work as a developer. It includes:

- **Public Portfolio Frontend** – Showcases projects, skills, resume, and includes a contact form for messaging.
- **Admin Dashboard** – A private interface to manage and view incoming messages.
- **Backend API** – Powers message handling and supports both frontend and admin functionalities.

---

## 🌐 Live Demo

- **Portfolio (Public)**: [https://portfolio-ag1m.onrender.com/](https://portfolio-ag1m.onrender.com/)
- **Backend**: [https://portfolio-backend-625e.onrender.com](https://portfolio-backend-625e.onrender.com)

---

## 📁 Project Structure

This repository is for the **frontend (public portfolio)**.

### Folder Overview

```
portfolio/
│
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── photos/           # Portfolio images
│   ├── App.js            # Main app component
│   ├── index.js          # React entry point
│   └── ...               # Styles and utilities
├── package.json
└── README.md
```

---

## ⚙️ Features

- Responsive personal portfolio design built with **React**
- Routing with **React Router v6**
- Contact form to send messages (stored in backend)
- Admin dashboard to view messages (separate private repo)
- Deployed on **Render** (Frontend & Backend)

---

## 🚀 Technologies Used

### Frontend

- React.js
- React Router DOM
- React Icons
- CSS

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)

### Deployment

- Render (both frontend and backend)

---

## 📬 Messaging Functionality

### Public Contact Route

Users can send you messages through the contact form:
```
POST /send
```
Handled via:
```js
router.post("/send", sendMessage);
```


## 📦 Installation

Clone the frontend repo and install dependencies:

```bash
git clone https://github.com/ekta183/portfolio.git
cd portfolio
npm install
npm start


---

## 📮 Backend API

- **Repository**: `portfolio-backend`
- Built with Express and MongoDB
- Contains messaging routes:
  - `POST /send` → Send message
  - `GET /getall` → View all messages (admin only)

---

## 👩‍💻 Author

**Ekta Jangir**  
📧 ekta210183@gmail.com  
🌐 [Portfolio Website](https://portfolio-ag1m.onrender.com/)

---

## 🤝 Contributing

This is a personal project, but feel free to fork it for inspiration or learning purposes. For suggestions or ideas, feel free to contact me.

---

## 📃 License

This project is under the **MIT License**. See the [LICENSE](./LICENSE) file for details (if added).
