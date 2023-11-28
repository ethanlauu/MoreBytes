<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('data.json'));

    // Get data from the form or JavaScript
    $newData = [
        'id' => $_POST['id'],
        'firstname' => $_POST['firstname'],
        'lastname' => $_POST['lastname'],
        'address' => $_POST['address'],
    ];

    // Add new data to the existing JSON data
    $data[] = $newData;

    // Encode the updated data back to JSON and save it to the file
    file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));

    // Return a response, redirect, or perform any other actions as needed
    echo 'Data saved successfully.';
}
?>
