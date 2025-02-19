# Transaction Tracking App

A simple **expense tracking app** that allows users to **add, edit, and delete transactions**, view **monthly expense charts**, and analyze spending by category. Built with **React (Vite), Tailwind CSS, shadcn/ui, Recharts, Node.js, Express, and MongoDB**.

  ## Screenshots
![App Homepage](https://github.com/R-adi/transaction-tracking-app/blob/main/frontend/src/assets/Screenshot%20(105).png?raw=true)

## 🚀 Features Breakdown

### ✅ **Add/Edit/Delete Transactions**
- Form to add transactions (amount, date, description, category).
- Ability to **edit and delete** existing transactions.
- Predefined categories (**Food, Rent, Entertainment, etc.**).

### ✅ **Transaction List View**
- Displays all transactions in a **table or list format**.
- Sorting options (**by date or amount**).

### ✅ **Monthly Expenses Bar Chart**
- Uses **Recharts** to show **monthly expenses** in a **bar chart**.

### ✅ **Category-wise Pie Chart**
- Uses **Recharts** to display **expenses breakdown** by category in a **pie chart**.

### ✅ **Dashboard with Summary Cards**
- **Total Expenses**: Shows total spending.
- **Category Breakdown**: Displays spending per category.
- **Most Recent Transactions**: Quick view of latest transactions.

### ✅ **Basic Form Validation**
- Ensures required fields (**amount, date, category**) are filled.
- Validates **date format** and **amount (must be a positive number)**.

## 🛠️ Tech Stack

### **Frontend:**
- **React** (with Vite for fast setup)
- **shadcn/ui** (for UI components)
- **Recharts** (for charts)
- **Tailwind CSS** (for styling)

### **Backend:**
- **Node.js** (with Express for API development)
- **MongoDB** (for storing transactions and categories)

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/transaction-tracking-app.git
cd transaction-tracking-app
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
#### **Create a `.env` file and add:**
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### **Run the Backend Server:**
```sh
npm start
```

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
```
#### **Run the Frontend:**
```sh
npm run dev
```

## 🚀 Deployment

### **Frontend Deployment (Vercel)**
1. Push your changes to GitHub.
2. Connect your repository to **Vercel**.
3. Click **Deploy**.

### **Backend Deployment (Render)**
1. Go to **Render.com**.
2. Create a new web service.
3. Connect your GitHub repo and set the **environment variables** (`MONGO_URI`, `PORT`).
4. Click **Deploy**.

## 📜 License
This project is **MIT licensed**.

## 📬 Contact
For any issues, feel free to open an **issue** or reach out to [codadity@gmail.com](mailto:codadity@gmail.com).

