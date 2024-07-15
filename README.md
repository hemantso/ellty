# React Checkbox App

This project is a simple React application that demonstrates custom checkboxes with hover and click functionality.

## Features

- Toggle checkboxes for "All pages" and individual "Page X".
- Hover effects to indicate the state changes.
- Click to toggle checkbox selection.
- Uses TypeScript for type safety.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local development environment.
- npm or yarn package manager installed.
- Basic understanding of React and TypeScript.

## Installation

To install the dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hemantso/ellty
   cd ellty
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

   or using yarn:

   ```bash
   yarn
   ```

## Usage

To start the development server and run the application:

```bash
npm start
```

or

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

The project structure is organized as follows:

```
ellty/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── CustomCheckbox.tsx
│   │   └── CustomCheckbox.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── ...
│
├── package.json
└── ...
```

## Component Details

### CustomCheckbox Component

The `CustomCheckbox` component is responsible for rendering a custom styled checkbox with hover and click effects.

### App Component

The `App` component is the main entry point of the application. It manages the state for checkboxes and hover effects, and renders the checkbox components.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.