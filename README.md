# Woud You Rather

## Table of Content
<br />

- Description

- Technologies

- Functionality

- Development Strategy

<br />

### Description

<br />

- Would You Rather, a polls app that allows the user to create new poll, answer a current poll, and explore answered polls. <br/>

- Implementation: <br />

    * Clone the repo to your local machine.
    * Open the file in your terminal
    * In your terminal, run (npm install) or (yarn install) to install the dependencies
    * After installing the dependencies, run (npm start) or (yarn start) to lunch the development version of the app.

<br /><br />

### Functionality 
<br />

- The app allows the user to:

    * Add a new poll that consists of two choices diplayed in a card with the user's name, user's avatar, and the text, "Would you rather."

    * Answer polls made by other users. Upon answering, the app displays an answered poll card with the two choices and shows which choice is the winning one by showing the percentage of votes for each choice and the number of people that answered each choice.


<br />

### Technologies

<br />

- This App is build with:
  -  React.js, frontend library.
  - Redux, for state management.
  - React-Bootstrap, CSS frame work.


### Development Strategy

<br />

- The App is build using React's class & functional components, and the connection between React and Redux is made by using two method:
  - connect() and maping state to props in case of class components
  - Redux Hooks (useDispatch, useSelector) in case of functional components
- Also routing has been done using the BrowserRouter library to add to the application website behavior while the user navigates through different routes inside the app.

