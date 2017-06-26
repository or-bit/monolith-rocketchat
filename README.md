This is the Meteor package that helps you connect Monolith framework created apps
in Rocket.Chat.

***All commands below require a terminal.***

# Installation
## 1. Install rocket.chat (MAC OSX / LINUX)
  -  `curl https://install.meteor.com/ | sh`
  -  `git clone git@github.com:RocketChat/Rocket.Chat.git`
  -  `cd Rocket.chat`
  -  `meteor npm install`

## 2. Install this integration package
  From Rocket.Chat root source folder:
  -  `git clone https://github.com/or-bit/monolith-rocketchat.git packages/monolith`
  -  create appropriate routes.js file (look at the paragraph below)
  -  `meteor add monolith`

# How do you use this package?
From Rocket.Chat root source folder:
-  navigate to packages/monolith-rocketchat
-  create a file named "routes.js"
-  inside "routes.js" you must write 2 objects:  
    1  `url` (type `String`)  
    2  `routes` (type `Object`)

The url string is the base url of your webapp, for example: "http://my-heroku-app.herokuapp.com".

The routes object must be an object with this structure:
  ```
  routes = {
    "commandUsedToInvokeBubble#1": {
      "route": "endpointForBubble#1",
    },
    "commandUsedToInvokeBubble#2": {
      "route": "endpointForBubble#2",
    },
    ...
  };
  ```

If you're still in doubt, you can take a look at the routes-example.js file in this repository.
