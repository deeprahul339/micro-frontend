# micro-frontend
1. Create an application folder called "micro-frontend-react."

2. To bootstrap a React micro-frontend app, navigate to the "micro-frontend-react" folder and run `npx create-mf-app`.

3. During the interactive terminal prompts, provide the following information:
   - Name: "home"
   - Project type: "Application"
   - Port number: 3000
   - Select stack: React, JavaScript, and Tailwind

4. A React micro-frontend application called "home" will be bootstrapped for you. Install the required dependencies by running `yarn install` and start the development server with `yarn start`.

5. Repeat the above steps to create another micro-frontend in a folder called "about":
   - Name: "about"
   - Project type: "Application"
   - Port number: 3001
   - Select stack: React, JavaScript, and Tailwind

6. Install the required dependencies in the "about" micro-frontend folder by running `yarn install` and start the development server with `yarn start`.

7. You should now have two micro-frontends, "home" and "about," running on different ports.

These steps guide you in setting up the initial structure for your micro-frontends using Create React App templates and configuring them to run independently.

THen create header and footer component in home and create about  component in about folder


Certainly, here are the steps from the "Adding module federation" section of the provided blog post, summarized in bullet points:

1. Open the webpack.config.js file in the "home" micro-frontend application.

2. Update the `exposes` property in the `ModuleFederationPlugin` configuration to expose the components you want to share. For example:
   ```javascript
   exposes: {
     "./Header": "./src/Header.jsx",
     "./Footer": "./src/Footer.jsx"
   }
   ```

3. Save your changes and restart the development server for the "home" micro-frontend.

4. Although the UI won't visibly change, a remote entry file (remoteEntry.js) has been created for you under the hood. You can access this file by navigating to the URL `localhost:3000/remoteEntry.js`.

5. Copy the link of the manifest file (remoteEntry.js) from your browser.

6. Open the webpack.config.js file in the "about" micro-frontend application.

7. Update the `remotes` property in the `ModuleFederationPlugin` configuration to specify that the "about" micro-frontend consumes components from the "home" micro-frontend. Use the copied link to the remote entry file. For example:
   ```javascript
   remotes: {
     home: "home@http://localhost:3000/remoteEntry.js",
   }
   ```

8. In the "about" micro-frontend, you can now import and use the shared components from the "home" micro-frontend. For example:
   ```javascript
   import Header from "home/Header";
   import Footer from "home/Footer";
   ```

9. Save your changes in the "about" micro-frontend.

10. Restart the development server for the "about" micro-frontend.

11. The shared components from the "home" micro-frontend can now be used within the "about" micro-frontend.

These steps demonstrate how to set up module federation to share components between two micro-frontends, "home" and "about."
