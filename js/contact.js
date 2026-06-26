const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const message=document.getElementById("message").value.trim();

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const phonePattern=/^[0-9]+$/;

if(name===""||email===""||phone===""||message===""){

alert("Please fill in all fields.");

return;

}

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

if(!phonePattern.test(phone)){

alert("Phone number should contain only digits.");

return;

}

alert("Message sent successfully!");

form.reset();

});