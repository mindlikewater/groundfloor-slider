// Function to open Loan option
function showContent (event) {
  var target = event.target;
  var loanContent = $("#loan-content");

  if (target.id === "loan") {
    loanContent.addClass("show");
    loanContent.toggleClass("hide");
  }
};

var viewContent = $(".box");
viewContent.click(showContent);
