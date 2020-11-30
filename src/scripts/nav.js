function main() {
	initNav();
}
main();

function initNav(){
	let navigationTop = document.getElementById('navigation-top');
	//CCF Logo 
	let ccfLogoDiv = document.createElement('div');
	ccfLogoDiv.setAttribute('data-contenet-field', 'site-title');
	let ccfLogoLink = document.createElement('a');
	ccfLogoLink.setAttribute('href', 'http://www.campcarefree.org/');
	let ccfLogo = document.createElement('img');
	ccfLogo.setAttribute('id', 'CCFLogoLink');
	//ccfLogo.setAttribute('src', '../media/logo.png');
	ccfLogo.setAttribute('alt', 'Camp Carefree');
	ccfLogoLink.appendChild(ccfLogo);
	ccfLogoDiv.appendChild(ccfLogoLink);
	ccfLogoDiv.style.float = 'left';
	ccfLogoDiv.style.marginLeft = '6%';
	navigationTop.appendChild(ccfLogoDiv);
	//UL and Links
	let mainNavigation = document.createElement('nav');
	mainNavigation.setAttribute('data-content-field', 'navigation');
	let ul = document.createElement('ul');
		//About
		let liAbout = document.createElement('li');
		liAbout.setAttribute('class', 'page-collection');
		let linkAbout = document.createElement('a');
		linkAbout.setAttribute('href', 'http://www.campcarefree.org/about-us');
		linkAbout.innerHTML = 'About';
		liAbout.appendChild(linkAbout);
		ul.appendChild(liAbout);
		//Campers
		let liCampers = document.createElement('li');
		liCampers.setAttribute('class', 'page-collection');
		let linkCampers = document.createElement('a');
		linkCampers.setAttribute('href', 'http://www.campcarefree.org/campers');
		linkCampers.innerHTML = 'Campers';
		liCampers.appendChild(linkCampers);
		ul.appendChild(liCampers);
		//Supporters
		let liSupporters = document.createElement('li');
		liSupporters.setAttribute('class', 'page-collection');
		let linkSupporters = document.createElement('a');
		linkSupporters.setAttribute('href', 'http://www.campcarefree.org/thanks');
		linkSupporters.innerHTML = 'Supporters';
		liSupporters.appendChild(linkSupporters);
		ul.appendChild(liSupporters);
		//Blog
		let liBlog = document.createElement('li');
		liBlog.setAttribute('class', 'page-collection');
		let linkBlog = document.createElement('a');
		linkBlog.setAttribute('href', 'http://www.campcarefree.org/blog');
		linkBlog.innerHTML = 'Blog';
		liBlog.appendChild(linkBlog);
		ul.appendChild(liBlog);
		//Store
		let liStore = document.createElement('li');
		liStore.setAttribute('class', 'page-collection');
		let linkStore = document.createElement('a');
		linkStore.setAttribute('href', 'http://www.campcarefree.org/store');
		linkStore.innerHTML = 'Store';
		liStore.appendChild(linkAbout);
		ul.appendChild(liStore);
		//Donate
		let liDonate = document.createElement('li');
		liDonate.setAttribute('class', 'page-collection');
		let linkDonate = document.createElement('a');
		linkDonate.setAttribute('href', 'http://www.campcarefree.org/help');
		linkDonate.innerHTML = 'Donate';
		linkDonate.setAttribute('id', 'donateLink');
		liDonate.appendChild(linkDonate);
		ul.appendChild(liDonate);
		//Contact
		let liContact = document.createElement('li');
		liContact.setAttribute('class', 'page-collection');
		let linkContact = document.createElement('a');
		linkContact.setAttribute('href', 'http://www.campcarefree.org/contact');
		linkContact.innerHTML = 'Contact';
		liContact.appendChild(linkContact);
		ul.appendChild(liContact);
	mainNavigation.appendChild(ul);
	mainNavigation.style.margin = "1em 0em 1em 0em";
	mainNavigation.style.padding = "1em 0em 1em 0em";
	navigationTop.appendChild(mainNavigation);
	//Some styles
	$('nav ul a').css('color', 'gray').css('padding', '1em').css('font-family', 'Arial');
	$('nav ul a').css('font-size', '14px').css('letter-spacing', '1px').css('line-height', '1.6em');
	$('nav ul a').css('text-decoration', 'none').css('text-transform', 'uppercase');
	$('nav ul li').css('list-style-type', 'none').css('display', 'inline');
	$('#donateLink').css('color', 'red');
}













