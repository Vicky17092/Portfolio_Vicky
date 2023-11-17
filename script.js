document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace the file path with the actual path to your CV file
    var cvFilePath = 'Vicky_Kumar_Resume.pdf';

    // Create an anchor element
    var link = document.createElement('a');

    // Set the href attribute to the file path
    link.href = cvFilePath;

    // Set the download attribute to specify the filename
    link.download = 'Vicky_Kumar_Resume.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});
