# Whistle Assessment

A responsive React.js web application developed from the provided Figma design. The project recreates the required landing page sections while maintaining visual consistency across desktop and mobile devices. The application follows a component-based architecture using React Functional Components and dynamic data rendering.

---

## Project Overview

This project was built as part of a frontend assessment task. The objective was to recreate the provided Figma design as closely as possible while ensuring responsiveness, clean code structure, and dynamic data handling.

The website includes:

* Header Section
* Hero Section
* Dream Team Section
* Results Section
* Why Whistle Section
* FAQ Section
* Footer Section

All sections are fully responsive and optimized for both desktop and mobile screens.

---

## Tech Stack

* React.js
* JavaScript (ES6+)
* CSS3
* React Hooks
* React Icons
* Vite

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd whistle-assessment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

### 4. Create Production Build

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## API / Data Source

The assessment included API endpoints for fetching data. However, the data returned by the provided APIs did not correspond to the content and structure displayed in the Figma design.

To accurately recreate the UI while still demonstrating dynamic rendering, mock JSON data was created and used as the application's data source.

The mock data is stored locally and rendered dynamically using React hooks (`useState` and `useEffect`), simulating a real-world API integration workflow.

Example:

```javascript
useEffect(() => {
  setData(mockData);
}, []);
```

---

## Features

### Responsive Design

* Desktop View
* Tablet View
* Mobile View

### Component-Based Architecture

* Reusable React Functional Components
* Separation of concerns
* Easy maintenance and scalability

### Dynamic Content Rendering

* Data-driven UI using JSON
* React Hooks for state management
* Dynamic card rendering

### Interactive UI

* FAQ Accordion
* CTA Buttons
* Optimized Layout Structure

---

## React Concepts Used

* Functional Components
* useState Hook
* useEffect Hook
* Props
* Conditional Rendering
* Component Reusability
* Dynamic Data Mapping

Example:

```javascript
{
  results.map((item) => (
    <ResultCard key={item.id} {...item} />
  ));
}
```

---

## Approach

The project was developed using React Functional Components and a modular component-based architecture. Each section from the Figma design was implemented as a separate reusable component to improve maintainability and readability.

Since the provided API data did not match the content shown in the Figma screens, mock JSON data was used to replicate the required content while still demonstrating dynamic data rendering techniques. React hooks were utilized for state management and lifecycle handling, and responsive CSS techniques were applied to ensure a consistent user experience across desktop and mobile devices.

---

## Assumptions

* Exact content displayed in the Figma design was prioritized over the provided API response structure.
* Mock JSON data was used to maintain design accuracy and dynamic rendering requirements.
* The application focuses on frontend implementation and UI responsiveness.




