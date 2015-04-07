core = {};

//Modules
core.http = {};
core.animation = {};
core.html = {};

//Module: http;
core.http.construct = function(){
  
  this.xmlhttp = new XmlHttpRequest();
  this.state = 0;
  
}
