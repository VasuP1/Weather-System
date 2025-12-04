# Weather Early Warning System

## Project Overview
The **Weather Early Warning System** is a web application designed to analyze weather data and provide early warnings for potential weather crises. It visualizes weather trends and alerts users to critical conditions, helping to mitigate risks associated with severe weather events.

## Project Objectives
*   **Analyze Weather Data**: Process historical and real-time weather data to identify patterns.
*   **Calculate Risk Levels**: Utilize a sliding window algorithm to determine risk levels (Low, Medium, High) based on weather parameters.
*   **Visualize Trends**: Display interactive charts and visual alerts to effectively communicate weather conditions and warnings.

## Project Structure

```
/Weather-System
│
├── src/
│   ├── components/      # Reusable UI components (WeatherCard, RiskIndicator, etc.)
│   ├── data/            # Data sources and mock weather data
│   ├── utils/           # Utility functions for risk calculation and data formatting
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for the React application
│   └── index.css        # Global styles and Tailwind imports (if applicable)
│
├── public/              # Static assets
│   └── weather_app_screenshot.png
│
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

### Technologies Used
*   **React**: Frontend library for building the user interface.
*   **Vite**: Fast build tool and development server.
*   **Recharts**: Library for rendering data visualizations.
*   **Lucide React**: Icon library for UI elements.

### Required libraries:
To install all necessary dependencies, run:

```bash
npm install
```

### How to Run
Follow these steps to get the project up and running:

*   Clone or download this repository
*   Navigate to the project folder
*   Run the development server using the following commands

```bash
git clone <repository-url>
cd Weather-System
npm run dev
```

## How to Test
*   **Port Conflicts**: If port `5173` is in use, Vite will automatically try the next available port (e.g., `5174`). Check the terminal output for the correct URL.
*   **Node Version**: Ensure you are using a compatible version of Node.js (v16 or higher is recommended).
*   **Linting**: To check for code quality issues, run:
    ```bash
    npm run lint
    ```

