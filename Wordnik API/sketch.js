//http://api.wordnik.com/v4/word.json/fuel/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
//This projects opens associated words relating to a query
//http://developer.wordnik.com/docs.html#!/word/getExamples_get_0
var url1 = "http://api.wordnik.com/v4/word.json/";
var word = "fuel";
var url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var link;
function setup() {
  noCanvas();
  link = createA('#', word);
  link.mousePressed(askWordnik);
}
function askWordnik () {
   loadJSON(url1 + word + url2, gotData);
}


function gotData(data) {
 // println(data);
 // link.html(data[2].words[0]);
  //link.html(data[5].words[1]);
  
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  word = data[index1].words[index2];
  link.html(word);
}

