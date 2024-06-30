document.getElementById("signInButton").addEventListener("click", function () {
  var signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
  signInModal.show();
});

document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Sign In Successful!");
    var signInModal = bootstrap.Modal.getInstance(
      document.getElementById("signInModal")
    );
    signInModal.hide();
  });
