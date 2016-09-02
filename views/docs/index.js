module.exports = {
    
    whoopsIForgotToDocumentAllMyEndpoints: true, // I liked this name ;)
    message: "Welcome to Sera's personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/serabakpak/express-personal-api/blob/master/README.md", 
    baseUrl: "https://fathomless-plains-84466.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/destinations", description: "List all travel destinations I would like to visit one day."}, 
      {method: "POST", path: "/api/destinations", description: "E.g. Create a new travel destination."} 
    ]
  }