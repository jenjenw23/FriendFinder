var friendsArray = require("../data/friend.js");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });


  // app.post("/api/tables", function(req, res) {
    
  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
};
