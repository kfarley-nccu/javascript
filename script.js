/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content    */

/*if(window.screen.width < 1100){
	document.getElementById("my-eol-tour").remove();	
}*/

/*window.onload = function() {
	  if((location.href=='https://myeol.nccu.edu/') || (location.href=='http://nccuintdev.prod.acquia-sites.com/') || (location.href=='http://nccuint.dev.dd:8083/'))
	  {
		  
		if(document.getElementById("user-login-form")==null)
		{	
		if(document.URL.indexOf("#")==-1)
        {
            // Set the URL to whatever it was plus "#".
            url = document.URL+"#";
            location = "#";

            //Reload the page
            location.reload(true);
			
	  }
	  
	  }}
    
}*/


var ia1=document.getElementById("a1");
var ia2=document.getElementById("a2");
var ia3=document.getElementById("a3");
var ia4=document.getElementById("a4");
var ia11=document.getElementById("a11");
var ibtnSettings=document.getElementById("btnSettings");
var imyDropdown=document.getElementById("myDropdown");
var imyeoltour=document.getElementById("my-eol-tour");
var ibtnAgree=document.getElementById("btnAgree");

if(window.innerWidth < 1100)
{ 
	if(imyeoltour){
	imyeoltour.remove();	
	}
}


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

if(ibtnSettings){

ibtnSettings.addEventListener("click", showSettings);
function showSettings() {
	/*var bannerssbBlock = document.getElementById("block-eol-bannerssbformblock");*/
	var mysettingsBlock = document.getElementById("block-eol-mysettingsformblock");
	if (mysettingsBlock.style.display !== "block") {
		mysettingsBlock.style.display = "block";
	} else {
		mysettingsBlock.style.display = "none";
	}
}
}

/* ----Close forum popup block---- */


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
	if(imyeoltour)
	{
		imyeoltour.style.outline = "none";
	}
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

if(ibtnAgree){

ibtnAgree.addEventListener("click", closePopup);

function closePopup(){
                var mypopup = document.getElementById("spb-block-agreement-2");
                mypopup.style.display = "none";
}
}

function librarySearch() {
	libraryQuery = document.getElementById("library-search-articles").value;
	window.open("https://nccu.summon.serialssolutions.com/#!/search?ho=t&l=en&q=" + libraryQuery);
}

/*
jQuery(document).ready(function(){
	console.log('start');
	commentReply = jQuery(".comment-reply a");
	commentReply.attr("data-toggle", "modal");
	commentReply.data("data-toggle", "modal");
	console.log('done');
});
*/

jQuery(document).ready(function () {
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	if (window.location.hash && isChrome) {
		setTimeout(function () {
			var hash = window.location.hash;
			window.location.hash = "";
			window.location.hash = hash;
		}, 100);
	}
});