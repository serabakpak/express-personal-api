module.exports = {
    
    message: "Welcome to Sera's personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/serabakpak/express-personal-api/blob/master/README.md", 
    baseUrl: "https://fathomless-plains-84466.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "GET", path: "/api/destinations", description: "List all travel destinations I would like to visit one day."}, 
      {method: "GET", path: "/api/destinations/:id", description: "Show one travel destination."}, 
      {method: "POST", path: "/api/destinations", description: "Create a new travel destination."},
      {method: "PUT", path: "/api/destinations/:id", description: "Edit the description for a particular destination."} ,
      {method: "DELETE", path: "/api/destinations/:id", description: "Delete a travel destination."}  
    ]
  }