// function validateForm() {
//     var name = document.forms["regForm"]["name"].value;
//     var email = document.forms["regForm"]["email"].value;
//     var mobile = document.forms["regForm"]["mobile"].value;
//     var img = document.forms["regForm"]["img"].files[0];
//     var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     var mobileRegex = /^\d{10}$/;
//     if (name == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//     if (email == "") {
//       alert("Email must be filled out");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       alert("Invalid email format");
//       return false;
//     }
//     if (mobile == "") {
//       alert("Mobile number must be filled out");
//       return false;
//     }
//     if (!mobileRegex.test(mobile)) {
//       alert("Invalid mobile number format");
//       return false;
//     }
//     if (img == "") {
//       alert("Profile image must be uploaded");
//       return false;
//     }
//     return true;
//   }
//   function submitForm() {
//     if (validateForm()) {
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//           if (xhr.status === 200) {
//             alert("Registration successful!");
//           } else {
//             alert("Registration failed. Please try again later.");
//           }
//         }
//       };
//       xhr.open("POST", "register.php", true);
//       xhr.setRequestHeader("Content-Type", "application/json");
//       var name = document.forms["regForm"]["name"].value;
//       var email = document.forms["regForm"]["email"].value;
//       var mobile = document.forms["regForm"]["mobile"].value;
//       var img = document.forms["regForm"]["img"].files[0];

//================================================

//       // var data = JSON.stringify({"name": name, "email": email, "mobile": mobile, "img": img});

//======================================================

//       var data = new FormData();
//       data.append("name", name);
//       data.append("email", email);
//       data.append("mobile", mobile);
//       data.append("img", img);
//       xhr.send(data);
//       document.forms["regForm"].reset();
//     }
//   }



function validateForm() {
  var name = document.forms["regForm"]["name"].value;
  var email = document.forms["regForm"]["email"].value;
  var mobile = document.forms["regForm"]["mobile"].value;
  var img = document.forms["regForm"]["img"].files[0];
  var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var mobileRegex = /^\d{10}$/;

  if (name.trim() === "") {
    alert("Name must be filled out");
    return false;
  }
  if (email.trim() === "") {
    alert("Email must be filled out");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }
  if (mobile.trim() === "") {
    alert("Mobile number must be filled out");
    return false;
  }
  if (!mobileRegex.test(mobile)) {
    alert("Invalid mobile number format");
    return false;
  }
  if (img === undefined) {
    alert("Profile image must be uploaded");
    return false;
  }
  return true;
}

function submitForm() {
  if (validateForm()) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again later.");
        }
      }
    };
    xhr.open("POST", "register.php", true);
    var formData = new FormData();
    formData.append("name", document.forms["regForm"]["name"].value);
    formData.append("email", document.forms["regForm"]["email"].value);
    formData.append("mobile", document.forms["regForm"]["mobile"].value);
    formData.append("img", document.forms["regForm"]["img"].files[0]);
    xhr.send(formData);
    document.forms["regForm"].reset();
  }
}
