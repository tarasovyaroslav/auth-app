# Microfrontends Test Project

This project is a test project for learning microfrontends. It contains a login and register page, each implemented as a separate frontend application using TypeScript, React, Redux Toolkit, and SCSS.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   `git clone https://github.com/tarasovyaroslav/auth-app.git`
2. Navigate to the project directory:
   `cd auth-app`
3. Install dependencies:
   `npm install`
4. Start the development server:
   `npm start`

This will start the development server for both the login and register pages. You can access them at the following URLs:

- Login: http://localhost:3000/login
- Register: http://localhost:3000/register

## Architecture

This project uses a microfrontends architecture, where each page is implemented as a separate frontend application. The login page is implemented using React, Redux Toolkit, and SCSS. The register page is implemented using React, Redux Toolkit, and SCSS.

The microfrontends are loaded dynamically using a JavaScript module loader, such as Webpack. This allows for easy deployment and scaling of the individual frontend applications.

## Technologies Used

- TypeScript
- React
- Redux Toolkit
- SCSS
- Webpack

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
