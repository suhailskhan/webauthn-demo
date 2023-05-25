# webauthn-demo
This project is a simple React application that uses WebAuthn passkeys for user authentication.

## Key Files

The primary logic of the authentication system resides in two important files: `src/hooks/webAuthn.ts` and `src/App.js`.

### [src/hooks/webAuthn.ts](src/hooks/webAuthn.ts)

This file contains the core WebAuthn authentication logic. It exports several interfaces for managing WebAuthn options, as well as a `webAuthn` function that generates functions for creating and obtaining credentials. The interfaces manage different types of WebAuthn options, and the `webAuthn` function handles the core WebAuthn operations.

### [src/App.js](src/App.js)

This file is the main React component file of the application. It handles user interaction with the application interface, and uses the hooks defined in src/hooks/webAuthn.ts to register and authenticate users.

## Usage

Assuming node.js is installed, use the following command:
`npm install && npm start`

The page will then open in the default browser.

To use this application, users simply enter their login information into the input field and click 'register'. This registers their login with the WebAuthn system. During this, the browser will present a dialog asking where they would like to save their passkey, such as a supported mobile device via a QR code or locally on the same device, protected with system biometrics. Users can then click 'auth' to authenticate themselves with the system.
