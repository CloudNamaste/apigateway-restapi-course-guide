exports.handler = async (event) => {
    console.log(event);
    
    var result;
    
    // Business Logic for GET API Calls
    if (event.httpMethod == "GET") {
        if(event.resource == "/baseball") {
                // Code to call database and return list of scocer balls sold by store
                result  = "Returning list of all baseball bats sold by store.";
            } else if (event.resource == "/baseball/{item}") { 
                // Condition statement to check for path variables passed in url
                if (event.path == "/baseball/bats") {
                    result  = "Returning list of all baseball bats sold by store.";
                } else if (event.path == "/baseball/gloves") {
                    result  = "Returning list of all baseball  gloves sold by store.";
                } else if (event.path == "/baseball/jersey") {
                    result  = "Returning list of all baseball jerseys sold by store.";
                } else {
                    result = "This item is not sold by store.";
                }
        } else if (event.resource == "/{proxy+}") {
            if(event.path.indexOf("/baseball") !== -1) {
                if(event.path == "/baseball") {
                    // Replace with Code to call database and return list of baseball bats sold by store
                    result  = "Returning list of all baseball bats sold by store.";
                } else if (event.path == "/baseball/bats") {
                    result  = "Returning list of all baseball bats sold by store.";
                } else if (event.path == "/baseball/gloves") {
                    result  = "Returning list of all baseball gloves sold by store.";
                } else if (event.path == "/baseball/jersey") {
                    result  = "Returning list of all baseball jerseys sold by store.";
                } else {
                    result = "This item is not sold by store."
                }
            } else if(event.path.indexOf("/cricket") !== -1) {
                if (event.path == "/cricket/bats") {
                    result  = "Returning list of all cricket bats sold by store.";
                } else if (event.path == "/cricket/gloves") {
                    result  = "Returning list of all cricket boots sold by store.";
                } else if (event.path == "/cricket/jersey") {
                    result  = "Returning list of all cricket jerseys sold by store.";
                } else {
                    result = "This item is not sold by store.";
                }
            } else {
                    result = "This item is not sold by store.";
            }
        }
    }
    console.log(result);
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    
    return response;
};
