var routes = function(app) {

  app.get("/", function(req, res) {
    res.send(
      "<h1>CloudNamaste - HTTP Integration Demo</h1>"
    );
  });

  //get request
  app.get("/echo", function(req, res) {
    console.log(req["route"]);
    let response = new Object();;
    response["response"] = "GET request!";
    response["headers"] = req.headers
    response["path"] = req.route.path
    response["method"] = req.route.method
    response["method"] = req.query
    return res.send(response);
  });

  //post request
  app.post("/echo", function(req, res) {
    let response = new Object();
    response["response"] = "POST request";
    response["body"] = req.body;
    response["headers"] = req.headers
    response["path"] = req.route.path
    response["method"] = req.route.method
    response["query"] = req.query
    
    return res.send(response);
  });

  //put request
  app.put("/echo", function(req, res) {
    let response = new Object();
    response["response"] = "PUT request";
    response["body"] = req.body;
    response["headers"] = req.headers
    response["path"] = req.route.path
    response["method"] = req.route.method
    response["query"] = req.query
    
    return res.send(response);
  });

  //delete request with query parameter
  app.delete("/echo", function(req, res) {
    let response = new Object();
    response["response"] = "DELETE request";
    response["body"] = req.body;
    response["headers"] = req.headers
    response["path"] = req.route.path
    response["method"] = req.route.method
    response["query"] = req.query
    
    return res.send(response);
  });
};

module.exports = routes;
