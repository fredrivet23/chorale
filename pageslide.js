function passWord() {
var testV = 1;
var pass1 = prompt('Veuillez entrer le mot de passe',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "polina") {

document.location.href="pagesslide/calendrier.html";
break ;
} 
testV+=1;
var pass1 = 
prompt('Accès interdit - Mot de passe incorrect. Veuillez réessayer.','Mot de passe');
}
if (pass1.toLowerCase()!="sesame" & testV ==3) 
history.go(-1);
return " ";
} 
function passWord2() {
var testV = 1;
var pass1 = prompt('Veuillez entrer le mot de passe',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "polina") {

document.location.href="calendrier.html";
break ;
} 
testV+=1;
var pass1 = 
prompt('Accès interdit - Mot de passe incorrect. Veuillez réessayer.','Mot de passe');
}
if (pass1.toLowerCase()!="sesame" & testV ==3) 
history.go(-1);
return " ";
} 