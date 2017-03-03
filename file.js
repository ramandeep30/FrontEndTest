$(document).ready(function () {
   
    $(document).ajaxStart(function(){
      $("#avatar").attr("src","src/progress.gif");
    }).ajaxStop(function(){
      console.log("Ajax Stopped.")
    }).ajaxSuccess(function(){
      console.log("Ajax Success")
    }).ajaxComplete(function(){
      console.log("Ajax Completed")
    })

    $("#get-data").on("click",function(){
      $.ajax({
        url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
        success: function(data){
          console.log(data)          
          $("#identity-number").text("User id is : "+ data.ID);
          $("#name").text("User name is : "+ data.name);
          $("#description").text("Description is : "+ data.description);


        },
        error: function(){
          $("#user-image").attr("src","no-user.png");
          $("#user-name").text("User not found");
        }
      })
    })

});