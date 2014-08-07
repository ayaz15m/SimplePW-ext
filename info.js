var xhr = new XMLHttpRequest();
xhr.open("GET", "http://0.0.0.0:3000/dashboard", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log("xhr", JSON.parse(xhr["response"]))
      var a = JSON.parse(xhr["response"])["dashboard"][0]["url"];
      console.log("a", a)
       $("body").append("URL: " + JSON.parse(xhr["response"])["dashboard"][0]["url"] + "  ")
       $("body").append("Username: " + JSON.parse(xhr["response"])["dashboard"][0]["username"] + "  ")
  }
}
xhr.send();
