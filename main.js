let myImage = document.querySelector('img');

myImage.onclick=function(){
	let mySrc=myImage.getAttribute('src');
	if (mySrc==="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"){
		myImage.setAttribute('src',"https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
	}else{

		myImage.setAttribute('src',"https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
	}
}