<?php
 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   // Retrieve the data from the request
   $data = $_POST['data'];

   // Specify the file path and name
   $filePath = 'log.txt';

   // Open the file for writing
   $file = fopen($filePath, 'w');

   if ($file) {
     // Write the data to the file
     fwrite($file, $data);

     // Close the file
     fclose($file);

     // Send a response indicating success
     echo 'File saved successfully';
   } else {
     // Send a response indicating an error occurred
     echo 'Error opening file';
   }
 }
?>
