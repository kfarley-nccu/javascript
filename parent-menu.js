var ia1=document.getElementById("a1");
var ia2=document.getElementById("a2");
var ia3=document.getElementById("a3");
var ia4=document.getElementById("a4");
var ia11=document.getElementById("a11");
var imyDropdown=document.getElementById("myDropdown");


if(ia3){
ia3.addEventListener("click", dropdownToggle);

function dropdownToggle() {
	document.getElementById("block-exposedformacquia-searchpage-2").style.display = "none";
	document.getElementById("block-eol-account-menu").style.display = "none";
    document.getElementById("myDropdown").classList.toggle("show");
}
}
if(ia4){
ia4.addEventListener("click", showSearch);

function showSearch(){
	document.getElementById("myDropdown").classList.remove("show");
	document.getElementById("block-eol-account-menu").style.display = "none";
  var x = document.getElementById("block-exposedformacquia-searchpage-2");
	if(x.style.display !== "block") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}
}

/*Show and hide Account Menu block*/

if(ia2){

ia2.addEventListener("click", showAccountMenu);
function showAccountMenu() {
	
	document.getElementById("myDropdown").classList.remove("show");
	document.getElementById("block-exposedformacquia-searchpage-2").style.display = "none";
	var y = document.getElementById("block-eol-account-menu");
	if(y.style.display !== "block") {
		y.style.display = "block";
	}
	else {
		y.style.display = "none";
	}
}
}


/* Takes to Outlook */
if(ia1){
ia1.addEventListener("click", empemailClick);
function empemailClick(){
	document.getElementById("block-exposedformacquia-searchpage-2").style.display = "none";
	document.getElementById("block-eol-account-menu").style.display = "none";
	document.getElementById("myDropdown").classList.remove("show");
    window.open('https://outlook.office365.com/owa/?realm=AD.NCCU.EDU&amp;exsvurl=1&amp;ll-cc=1033&amp;modurl=0', '_blank');
}
}

/* Takes to Gmail */

if(ia11){
ia11.addEventListener("click", studentemailClick);
function studentemailClick(){
	document.getElementById("block-exposedformacquia-searchpage-2").style.display = "none";
	document.getElementById("block-eol-account-menu").style.display = "none";
	document.getElementById("myDropdown").classList.remove("show");
    window.open('http://mail.eagles.nccu.edu', '_blank');
}
}

document.addEventListener("mouseover", mouseUpDown);
function mouseUpDown() {
	if(ia1){
		ia1.style.outline = "none";
	}
	if(ia11){
		ia11.style.outline = "none";
	}
	if(ia2){
		ia2.style.outline = "none";
	}
	if(ia3){
		ia3.style.outline = "none";
	}
	if(ia4){
		ia4.style.outline = "none";
	}
}

