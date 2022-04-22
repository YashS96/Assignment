# Assignment
Innovacle React JS round 1 assignment

## Active url for the project :
  
https://benevolent-taffy-41791d.netlify.app/
## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls with axios
3. Communicating between parent and child component
4. Using MUI along with React
5. Using Basic React hooks

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install and Run    create-react-app
Install create-react-app npm package. Use the following command to install 
npx create-react-app <name>

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **Demographics** Component : This Component displays the predicted gender, age and nationality. This Component gets the data from parent component.

2. **SearchHistory** Component : Displays a list of serch terms.
  
3. **App** Component : This Component r. This Component gets its data from api.js file that make 3 API calls to get a list of gender, age and nationality . This Component is the parent Component of *Demographics*  and *SearchHistory* Component

#### HTTP client

**axios** library is used to make HTTP Calls to 3 exisiting APIs
  
  https://genderize.io/
  
  https://agify.io/
  
  https://genderize.io/

## Resources

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://https://mui.com/ to understand how to use MUI Components
