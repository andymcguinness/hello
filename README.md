# Hello - an API Example

Welcome to the new-and-improved 'Hello' application! This application has been upgraded to include a NodeJS backend with Express routing, and it includes a hookup to a MongoDB database hosted in the netosphere.

## TOC

1. Getting Started
2. Structural Code Considerations
3. By-Section Breakdown of Frontend Code
4. General Backend Notes
5. Closing Notes

## 1. Getting Started

This project now relies on NodeJS to provide a backend -- so it's important that you get Node set up on your machine. See the [official site](http://nodejs.org/) for documentation about getting set up on your machine.

Additionally, this project requires access to a Unix command line -- we need NodeJS' CLI to fire up the server. I'm a Mac person, so I'm not exactly sure how that would work on a Windows machine... sorry about that!

### Step 1

Install Node and its command-line interface. These will both be required! Additionally, make sure you have the Node Package Manager installed -- [npm](https://www.npmjs.org/).

### Step 2

Clone this repository to your local machine. `cd` into the directory where it's located in a Unix terminal.

### Step 3

Run `npm install` -- this will install all of the project's required dependencies and put them into a folder called "node_modules".

### Step 4

Take the MongoLab information given to you and put it in the server.js file on line 29.

### Step 5

Run "node server.js" from the command line -- you should see a message that says "firing on port 8080".

### Step 6

Head on over to localhost:8080 and you should see our shiny new application!

## 2. Structural Code Considerations

As you examine this code, it's worth keeping a few things in mind:

**Backend**
* server.js is the main NodeJS/Express file for the application -- if you just want to examine the frontend, please ignore it!
* as expected, the /backend/ folder contains the rest of the backend
* package.json is also part of the backend --  not much to it, anyhow

**Frontend**
* pieces of the hello application are spread into semantically-named (I hope) folders, with each name at least giving a hint about what it does
* common contains the common factory -- essentially, this is the largest part of our model layer
* feeds contains files being pulled into the about page

## 3. By-Section Breakdown of Frontend Code

Let's now look in-depth at the code powering the frontend.

### index.html

This file is the backbone (no pun intended) of our application. It pulls in all of our JavaScript resources, and provides the "ui-view" area where the ui-router will inject each page's content. From the dependencies here, you can see we're including two resources outside of angular: the ui-router, and angular-resource. These are both essentially "plugins" that will help power up our application.

### app.js

This file is the rest of the skeleton (to index.html's spine) of the application. Here, we define the module that will contain all of our application code, `hello`, and begin linking this to it.

Some notes:

* $stateProvider and $urlRouterProvider are ui-router components
* the about state and the user states both have nested states -- or states that get pulled into states the same way that the main state gets injected into the index.html file

### about

This folder contains all of the code required to run the /about/ state. The controller, AboutCtrl, makes two AJAX calls to get JSON data using Angular's built-in AJAX wrapper, $http. This data is then assigned to a $scope variable for use in the partial-about-*.html partials. Like the index.html file, the partial-about.html contains a ui-view div, for injecting which of the two subviews you want active.

### common

This folder, and the file within, is a near-replica of the code being used in the current codebase. The ResourceFcty file defines an Angular factory, which is a pattern of Angular module intended to pull data from elsewhere, or to generate data. As the controller is never supposed to create any or pull in any data, factories and services often do the heavy lifting. This ResourceFcty is a very templated example of a $resource call (yet another wrapper for AJAX calls) -- basically, we're not specifying any routes, but are allowing the calling function to tell the ResourceFcty what to request, and from where. $resource provides a ton of built-in functionality -- namely the 4 RESTful methods -- and returns not just promises, but objects. We're calling the /v1/ route, as that's been specified in our application as the API routing. This does not correlate to a folder, but has been specified on the backend as a signal for an API  call.

### feeds

Mentioned briefly earlier -- simply two files containing JSON objects to be included on the /about/ nested states.

### home

This folder contains the required pieces for the /home/ route -- the homepage of our mini-site. There's nothing much to this controller or partial.

### user

This folder contains all the logic for our /user/ state -- and, by proxy, all of the logic for pulling in users, and submitting new ones. There are two nested states: one to view all current users in our database, and one to add a new user to our database. Inside the UserCtrl, you will see that we are including the ResourceFcty as a dependency; we then create a new instance of the ResourceFcty (specifically for the 'users' resource -- ie, specifically for that routing on our API), and define a function called save() that will get triggered by a button on the partial-user-new.html file. This function sets two parameters for the 'users' ResourceFcty instance, then calls $resource's $save() method, which fires off a PUT request to whatever route we specified -- as you can trace in the Network tab in Chrome Dev Tools, this goes to /v1/users/, AKA what we've defined on the backend to handle this particular request. The data gets taken by the backend router, and is submitted to our MongoDB instance in the netosphere through Express and Mongoose. (This is not the case in the current codebase -- just this demo.) Switching over to the /users/users nested state fires a query() request to the /v1/users/ route -- AKA a GET request, which is handled by our backend router. This queries our MongoDB database via Mongoose, and the data is wired back to our application via Express. It's then output using Angular's awesome ngRepeat directive.


========

That's the brunt of the frontend!

## 4. General Backend Notes

Should you remain curious about the backend, a few explanations:

* Express naturally relies on ejs or Jade templating, so in our server.js file, we have to tell it that we're using static html -- and link it to the current directory. This allows all of our partials to be served up without any further backend intervention.
* All of the interactions with our MongoDB database are handled by Mongoose -- it makes it unbelievably simple to create a model, wire that model into the application, and then save data via that model to our database.

## 5. Closing Notes

Now that you've read through the high-level explanation of what's happening, have a look at the code -- it's all documented. You should be able to follow the flow of data through the application; if it's not clear, please let me know and I'll clarify.

Happy coding!
