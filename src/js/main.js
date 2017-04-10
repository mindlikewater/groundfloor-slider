// Function to open Loan option
function showContent (event) {
  var target = event.target;
  var loanContent = $("#loan-content");

  if (target.id === "loan") {
    loanContent.toggleClass("hide");
  }
};

var viewContent = $(".box");
viewContent.click(showContent);

function expandEdit (event) {
  var loanEdit = $("#loan-edit");
  var save = $("#save-button");

  loanEdit.toggleClass("hide");
  save.toggleClass("hide");
};

var editPropertyDetails = $("#edit-button");
editPropertyDetails.click(expandEdit);
