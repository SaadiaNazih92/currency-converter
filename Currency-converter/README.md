# 💱 Currency Converter - Capstone Project

**Live Demo:** [Click here to view the App on Vercel](https://currency-converter-one-mu.vercel.app/)

## 📝 Project Overview

This project is a modern **Single Page Application (SPA)** designed to convert currencies in real-time. It was built to demonstrate proficiency in Frontend development, specifically focusing on state management, API integration, and responsive UI design.

The application features a custom "Earth-tone" design (Ochre/Green), distinct from standard Bootstrap/Material styles, showcasing the power of **Tailwind CSS**.

### 🚀 Key Features
- **Real-time Conversion:** Fetches live exchange rates via *ExchangeRate-API*.
- **Smart UI:** Dynamic inputs that update calculations instantly.
- **Swap Functionality:** A dedicated button to instantly swap source and target currencies.
- **Custom Design:** A unique, responsive interface built with a specific color palette.
- **Robust Error Handling:** Visual feedback for network or API errors.

---

## 🛠 Tech Stack

I chose a modern, high-performance stack for this project:

- **Core:** [React](https://react.dev/) (v18)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Migrated from JS for type safety)
- **Build Tool:** [Vite](https://vitejs.dev/) (chosen for superior speed over CRA)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Component Structure

The project follows a modular component-based architecture in `src/components`:

1.  **`CurrencySelector.tsx`**
    - A reusable dropdown component used for both "From" and "To" selections.
    - Fully typed interface for props.

2.  **`AmountInput.tsx`**
    - A controlled input component for handling numeric user input.

3.  **`ConversionResult.tsx`**
    - Displays the calculated result and the current exchange rate.
    - Uses conditional rendering to handle loading/empty states.

4.  **`App.tsx` (The Brain)**
    - Manages global state (`useState`) for amounts, currency codes, and rates.
    - Handles side effects (`useEffect`) to fetch data from the API.
    - Contains the conversion logic and the "Swap" function.

---

## 📔 Logbook: Development & Troubleshooting

This project served as a realistic simulation of a dev environment. Below is a log of key challenges encountered and resolved:

### 1. Environment Setup (Windows/PowerShell)
* **Issue:** `npx tailwindcss init -p` failed with path errors on Windows.
* **Solution:** Manually configured `tailwind.config.js` and `postcss.config.js` instead of relying on the CLI automation.

### 2. Dependency Conflicts (Tailwind v4 vs v3)
* **Issue:** NPM installed an experimental version of Tailwind that conflicted with PostCSS.
* **Solution:** Forced a downgrade to the stable industry standard (`npm install -D tailwindcss@3.4.17`) to restore stability.

### 3. File Corruption (ENOENT)
* **Issue:** The `package.json` reference was lost during a folder move.
* **Solution:** Re-initialized the project structure using Vite to ensure a clean slate.

### 4. Migration to TypeScript
* **Issue:** Initially started as `.jsx`, but required stricter type safety.
* **Solution:** Renamed all components to `.tsx`, added Interfaces for Props and API responses, and fixed strict null checks in `main.tsx`.

### 5. Deployment
* **Platform:** Deployed to Vercel via CLI.
* **Challenge:** Ensuring the build command (`vite build`) ran correctly in the cloud environment compared to the local server.

---

## ⚙️ Installation and Setup

If you want to run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SaadiaNazih92/currency-converter.git](https://github.com/SaadiaNazih92/currency-converter.git)
    cd currency-converter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Click the link shown in the terminal (usually `http://localhost:5173`).

---

**Author:** Saadia Nazih