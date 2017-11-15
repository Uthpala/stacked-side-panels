Stacked Side Panels

Installation Instructions

1. clone the project
2. cd to the project
3. npm install ( you may also use yarn )
4. npm start ( you may also use yarn )

Packages used
1. Used create-react-app to create the initial project files
2. react router for the web which is react-router-dom

What I did

1. Used react router to handle the routing. The user can traverse through the browser history. This allows the back button to be implemented easily. This app also works when you click on the back button in the browser.

2. Created a Higher Order Component - A higher order component is a pure function that takes in a component and returns a component. A HOC composes the original component by wrapping it in container component. This is a commonly used pattern which allows to give additional features to the component. You may find a withSidePanel.js file in the hoc folder. This HOC gives makes the component rendered in a side panel.

This allows the child component to be more reusable you can both use the child component withSidePanel or without giving us a more reusable component. Review the Routes.js file to see the HOC in action its simple as passing the component and other properties the hoc needs.

Currently its taking in a config object which asks if you want a back button in this side panel, does this component link to another component if so the route and the text you want to be displayed is taken in.

Created two dummy components according to the usecase given a "user list" and a "add user" component
