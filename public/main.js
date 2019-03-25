function buttonClick() {
    var email = 'lindsey.mcdanel@gmail.com';
    var subject = 'Lets Work Together';
    var emailBody = 'Hello';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}


function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}


window.onload = function() {

  httpGetAsync ("/about.json", handleAboutJSON);

}


function handleAboutJSON (jsonResponse) {
  var data = JSON.parse(jsonResponse);
  console.log ("STEVE", data);
  console.log (data.name);
  document.getElementById('hello-text').innerHTML = `Hello, I am ${data.name}!`;

  var aboutDiv = document.getElementById('about-text');
  aboutDiv.innerHTML = '';
  for (let p of data.aboutParagraphs) {
    aboutDiv.innerHTML += p;
  }
}
