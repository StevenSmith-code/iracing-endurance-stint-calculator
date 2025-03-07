# iRacing Endurance Stint Calculator

The iRacing Endurance Stint Calculator is a web-based application designed to assist teams in planning and managing their stints during endurance races. It provides precise calculations for stint lengths, fuel consumption, and driver scheduling to optimize race strategies.

## Features

- **Stint Length Calculation**: Determine optimal stint durations based on average lap times, fuel consumption rates, and pit stop durations.
- **Fuel Management**: Calculate required fuel per stint and overall race to prevent underfilling or overfilling.
- **Driver Scheduling**: Plan driver rotations considering availability, maximum allowable drive times, and preferred stint sequences.
- **Dynamic Adjustments**: Update strategies in real-time to accommodate unforeseen events such as accidents, weather changes, or unscheduled pit stops.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 7 or higher)
- Docker (for database setup)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/StevenSmith-code/iracing-endurance-stint-calculator.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd iracing-endurance-stint-calculator
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up the database**:
   Ensure Docker is running and execute:
   ```bash
   docker-compose up -d
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

## Usage

1. **Input Race Details**:
   - Enter total race duration, track information, and car specifications.

2. **Driver Information**:
   - Add driver names, availability times, and preferred stint lengths.

3. **Strategy Calculation**:
   - The calculator will generate an optimal stint schedule, including pit stop timings and fuel requirements.

4. **Adjustments**:
   - During the race, input actual stint completion times to allow the calculator to adjust subsequent stints dynamically.

## Contributing

Contributions are welcome! Please fork the repository and create a new branch for any feature or bug fix. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

Inspired by existing tools and community discussions, such as:

- **Endurance Manager Utility**: A comprehensive stint planning tool for endurance races. ([revolutionsimracing.com](https://revolutionsimracing.com/threads/endurance-manager-utility.2395/?utm_source=chatgpt.com))
- **Endurance Strategist for iRacing**: Aims to provide features similar to various Excel/Google Sheet race planners. ([github.com](https://github.com/geeves/endurance-strategist?utm_source=chatgpt.com))
- **Stint Calculator (Google Sheets)**: A spreadsheet designed to calculate optimal race strategies based on fuel levels and tire wear. ([overtake.gg](https://www.overtake.gg/threads/stint-calculator-google-sheets.168295/?utm_source=chatgpt.com))

These resources have significantly contributed to the development of this application.

