<?php

//     $data = file_get_contents("php://input");
// $registration = json_decode($data, true);


// if (file_exists("registrations.json")) {
//     $registrations = json_decode(file_get_contents("registrations.json"), true);


// } else {
//     $registrations = array();
// }

// $registrations[] = $registration;
// file_put_contents("registrations.json", json_encode($registrations));
// http_response_code(200);
// echo "Registration successful!";


//==============================================================================

// if (isset($_FILES['img']) && $_FILES['img']['error'] == UPLOAD_ERR_OK) {
//   $name = $_FILES['img']['name'];
//   $temp_file = $_FILES['img']['tmp_name'];
//   $uploadDir = 'uploads/';
//   $uploadFile = $uploadDir . basename($_FILES['img']['name']);

//   if (move_uploaded_file($_FILES['img']['tmp_name'], $uploadFile)) {
//     $data = file_get_contents("php://input");
//     $registration = json_decode($data, true);

//     if (file_exists("registrations.json")) {
//         $registrations = json_decode(file_get_contents("registrations.json"), true);

//     } else {
//         $registrations = array();
//     }

//     $registrations[] = array(
//         'name' => $registration['name'],
//         'email' => $registration['email'],
//         'mobile' => $registration['mobile'],
//         'img' => $name
//     );

//     file_put_contents("registrations.json", json_encode($registrations));
//     http_response_code(200);
//     echo "Registration successful!";
//   } else {
//     http_response_code(500);
//     echo "Failed to upload image.";
//   }
// } else {
//   http_response_code(400);
//   echo "No image was uploaded.";
// }

//================================================================================


if (isset($_FILES['img']) && $_FILES['img']['error'] == UPLOAD_ERR_OK) {
  $name = $_FILES['img']['name'];
  $temp_file = $_FILES['img']['tmp_name'];
  $uploadDir = 'uploads/';
  $uploadFile = $uploadDir . basename($_FILES['img']['name']);

  if (move_uploaded_file($_FILES['img']['tmp_name'], $uploadFile)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $img = $_FILES['img']['name'];

    if (file_exists("registrations.json")) {
        $registrations = json_decode(file_get_contents("registrations.json"), true);

    } else {
        $registrations = array();
    }

    $registrations = array(
        'name' => $name,
        'email' => $email,
        'mobile' => $mobile,
        'img' => $img
    );
    
    array_push($registration,$registrations);
    file_put_contents("registrations.json", json_encode($registrations));
    http_response_code(200);
    echo "Registration successful!";
  } else {
    http_response_code(500);
    echo "Failed to upload image.";
  }
} else {
  http_response_code(400);
  echo "No image was uploaded.";
}
?>


