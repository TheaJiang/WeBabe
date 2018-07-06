var slideIndex=1;
var adv_show=setInterval(carousel, 2000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById('image1').innerHTML = t;
}

function showHiddenContent(){
	document.getElementById('hidden-content').style.display='block';
	document.getElementById('adv-content').style.display='none';
}
function hideHiddenContent(){
	document.getElementById('hidden-content').style.display='none';
	document.getElementById('adv-content').style.display='block';
}

function showHiddenBookMeeting() {
	document.getElementById('hidden-book-meeting').style.display='block';
	document.getElementById('adv-content').style.display='none';
}

function hideHiddenBookMeeting() {
	document.getElementById('hidden-book-meeting').style.display='none';
	document.getElementById('adv-content').style.display='block';
}

function showHiddenSculptButt() {
	document.getElementById('sculpt-butt').style.display='block';
	document.getElementById('adv-content').style.display='none';
}

function hideHiddenSculptButt() {
	document.getElementById('sculpt-butt').style.display='none';
	document.getElementById('adv-content').style.display='block';
}

function test(){
	var ele=document.getElementById('material');
    if ( window.getComputedStyle(ele, null).getPropertyValue("display") === 'none') {
        ele.style.display = 'block';
    } else {
        ele.style.display = 'none';
    }
}

function carousel(){
	carousel_showone(slideIndex);
	console.log('slideIndex='+slideIndex);
	slideIndex++;
	if (slideIndex==5)
		slideIndex=0;
}

function carousel_showone(index){
	var slidesGroup=document.getElementById('advertisement-all').getElementsByTagName('div');
	var advLiGroup=document.getElementsByClassName('advertisement-nav')[0].getElementsByTagName('li');
	for(var i=0;i<slidesGroup.length;i++){
		slidesGroup[i].style.visibility='hidden';
		advLiGroup[i].style.backgroundColor='#fff';
	}
	var slideOffset=-500*index;
	document.getElementById('advertisement-all').style.transform='translate3d('+slideOffset+'px,0px,0px)';
	// document.getElementById('advertisement-all').style.transitionDuration='0.3s';
	slidesGroup[index].style.visibility='visible';
	advLiGroup[index].style.backgroundColor='tomato';
}

function carousel_specific_showone(index){
	clearInterval(adv_show);
	document.getElementsByClassName('advertisement-nav')[0].getElementsByTagName('li')[index].style.backgroundColor='tomato';
	carousel_showone(index);
}

function carousel_specific_showone_clear(advLiGroup,index){
	for(var i=0;i<advLiGroup.length;i++){
		advLiGroup[i].style.backgroundColor='#fff';
	}
	document.getElementsByClassName('advertisement-nav')[0].getElementsByTagName('li')[index].style.backgroundColor='tomato';
	adv_show=setInterval(carousel,2000);
}

onload=function(){
var advLiGroup=document.getElementsByClassName('advertisement-nav')[0].getElementsByTagName('li');
advLiGroup[0].addEventListener('mouseover',function(){carousel_specific_showone(0);slideIndex=1;});
advLiGroup[0].addEventListener('mouseout',function(){carousel_specific_showone_clear(advLiGroup,0)});
advLiGroup[1].addEventListener('mouseover',function(){carousel_specific_showone(1);slideIndex=2;});
advLiGroup[1].addEventListener('mouseout',function(){carousel_specific_showone_clear(advLiGroup,1)});
advLiGroup[2].addEventListener('mouseover',function(){carousel_specific_showone(2);slideIndex=3;});
advLiGroup[2].addEventListener('mouseout',function(){carousel_specific_showone_clear(advLiGroup,2)});
advLiGroup[3].addEventListener('mouseover',function(){carousel_specific_showone(3);slideIndex=4;});
advLiGroup[3].addEventListener('mouseout',function(){carousel_specific_showone_clear(advLiGroup,3)});
advLiGroup[4].addEventListener('mouseover',function(){carousel_specific_showone(4);slideIndex=0;});
advLiGroup[4].addEventListener('mouseout',function(){carousel_specific_showone_clear(advLiGroup,4)});
}
