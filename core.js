core = function(){
  this.http = {};
  this.http.construct = function(){
    this.xmlhttp = new XmlHttpRequest();
    this.state = 0;
  }
  
  this.html = {};
  
};

