// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-stat").on("click", function(event) {
      var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");
        console.log("test");
  
      var newEatenState = {
        devoured: newEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("burger.js");
  
      var newBurger = {
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  