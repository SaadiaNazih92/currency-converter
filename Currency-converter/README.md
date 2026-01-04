**Currency Converter - Capstone Project**

1. Project Setup and Technologies
For this project, I chose a modern, high-performance stack:

React: UI library for managing components and state.

Vite: Next-generation build tool, chosen for its superior speed compared to Create React App.

Tailwind CSS: Utility-first CSS framework for fast, responsive styling.

2. Logbook: Setup and Troubleshooting
During the initial development environment setup, I encountered and resolved several technical challenges. Here are the details of the errors and the solutions applied:

Problem 1: Path incompatibility on Windows with npx
Error: When running npx tailwindcss init -p, the terminal (PowerShell) returned the error "could not determine executable to run." This is a known path management issue on some Windows configurations.

Solution: Instead of relying on npx's automation, I opted for manual configuration. I manually created the tailwind.config.js and postcss.config.js files in the project root, inserting the standard configuration code.

Problem 2: Project Directory Corruption (ENOENT)
Error: During troubleshooting, the project folder lost reference to the package.json file, causing the error ENOENT: no such file or directory.

Solution: I performed a thorough cleanup. I exited the corrupted directory and initialized a new, clean project (capstone-converter) with Vite, ensuring the underlying structure was intact before proceeding.

Problem 3: Tailwind CSS/PostCSS Version Conflict
Error: After installation, Vite returned an error: It looks like you're trying to use tailwindcss directly as a PostCSS plugin.

Cause: NPM downloaded the latest "experimental" or alpha version of Tailwind (v4+), which changed the PostCSS integration architecture, rendering my configuration files obsolete.

Solution: I forced a downgrade to the stable, industry-standard version. I uninstalled the problematic version and specifically installed version 3.4 (npm install -D tailwindcss@3.4.17), restoring compatibility with the standard configuration.

Current Status
The environment is now stable, the Vite development server is active (npm run dev), and Tailwind CSS is properly integrated and working.


## 📝 Project Overview
The application allows users to select two currencies (source and target), enter an amount, and immediately see the converted value. The data is retrieved dynamically via an external API.

### 🚀 Implemented Features
- **API Integration:** Retrieve real-time exchange rates via *ExchangeRate-API*.
- **State Management:** Use of `useState` and `useEffect` to manage data, loading, and automatic calculations.
- **Reusable Components:** Modular architecture with separate React components.
- **Responsive Design:** Modern and adaptable interface (Mobile/Desktop) built with **Tailwind CSS**.
- **Error Handling:** Visual feedback in case of network or API issues.

## 🛠 Technologies Used
- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)
- **API:** ExchangeRate-API

## 📂 Component Structure
The project is organized in the `src/components` folder:

1. **`ValutaSelector.jsx`**
- "Dumb" (presentational) component for the drop-down menu.
- Reused twice (for the "From" currency and the "To" currency).
- Receives the list of currencies and manages the selection change.

2. **`QuantitaInput.jsx`**
- Controlled input for entering the numeric amount.
- Prevents the entry of negative values.

3. **`ConversionResult.jsx`**
- Displays the final result of the calculation.
- Uses *conditional rendering* (appears only if there is a valid result).

4. **`App.jsx` (Main Logic)**
- The "brain" of the application.
- Contains the `fetch` API calls.
- Manages the mathematical conversion logic.

## ⚙️ Installation and Startup

1. Clone the repository.
2. Install the dependencies:
```bash
npm install