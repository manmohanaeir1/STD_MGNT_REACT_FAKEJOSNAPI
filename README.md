# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
 

 ## Overview
The `App` component defines the routing structure for the application. It uses the `BrowserRouter`, `Routes`, and `Route` components from `react-router-dom` to map different URL paths to their respective React components.

## Routes Defined

### 1. **Root Route (`/`)**
- **Path**: `/`
- **Component Rendered**: `StudentTable`
- **Purpose**: Displays the main page with a table of students.

---

### 2. **Create Student Route (`/student/create`)**
- **Path**: `/student/create`
- **Component Rendered**: `CreateStudent`
- **Purpose**: Provides a form to add a new student to the system.

---

### 3. **Edit Student Route (`/student/edit/:std_id`)**
- **Path**: `/student/edit/:std_id`
- **Component Rendered**: `EditStudent`
- **Purpose**: Allows editing the details of a specific student. The `:std_id` parameter represents the ID of the student to be edited.

---

### 4. **View Student Route (`/student/view/:std_id`)**
- **Path**: `/student/view/:std_id`
- **Component Rendered**: `EditStudent` (currently)
- **Purpose**: Intended for viewing the details of a specific student. However, it currently uses the `EditStudent` component, which may need to be replaced with a dedicated `ViewStudent` component.

---