function checkForm() {
   let fullName = document.getElementById("fullName");
   let email = document.getElementById("email");
   let password = document.getElementById("password");
   let conPassword = document.getElementById("passwordConfirm");
   let formErrors = document.getElementById("formErrors");

   let errors = [];
   const reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   const lowerReg = /[a-z]/;
   const upperReg = /[A-Z]/;
   const numRegex = /[0-9]/;

   fullName.classList.remove("error");
   email.classList.remove("error");
   password.classList.remove("error");
   conPassword.classList.remove("error");

   if(fullName.value.length < 1){
      errors.push("Missing full name.");
      fullName.classList.add("error");
   }

   

   if(!reEmail.test(email.value)){
      errors.push("Invalid or missing email address.");
      email.classList.add("error");
   }
   if(password.value.length<10 || password.value.length >20){
      errors.push("Password must be between 10 and 20 characters.");
      password.classList.add("error");
   }
   if(!lowerReg.test(password.value)){
      errors.push("Password must contain at least one lowercase character.");
      password.classList.add("error");
   }
   if(!upperReg.test(password.value)){
      errors.push("Password must contain at least one uppercase character.");
      password.classList.add("error");
   }
   if(!numRegex.test(password.value)){
      errors.push("Password must contain at least one digit.");
      password.classList.add("error");
   }
   if(password.value!==conPassword.value){
      errors.push("Password and confirmation password don't match.");
      conPassword.classList.add("error");
   }

   if(errors.length > 0){
      formErrors.classList.remove("hide");

      let ul = document.createElement("ul");

      errors.forEach(function(error){
         let li = document.createElement("li");
         li.innerHTML = error;
         ul.appendChild(li);
      });
      formErrors.innerHTML= '';
      formErrors.appendChild(ul);
   }
   else {
      formErrors.classList.add("hide");
   }
}






document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   event.preventDefault();
});

