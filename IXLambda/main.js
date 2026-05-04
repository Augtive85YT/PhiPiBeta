if (navigator.userAgent.match(/Mac/i)) {
	const result = prompt(
		`Made by a furry! :3 (Haters will be ignored >:3)
		Select a Website (Type Number):
			Lucide (Best Proxy and Games): 1
			GN-Math (Games): 2
			DogeUB: 3
			Fern: 4
			Infamous: 5
			Share Lucide QR: 6
			Share GN-Math QR: 7
		`
	);
	switch (result) {
		case "1":
			window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/lucide.svg");
			break;
		case "2":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/gnmath.svg");
			break;
		case "3":
    		window.open("https://dogeub.storage.googleapis.com/index.html");
			break;
		case "4":
    		window.open("https://s3.amazonaws.com/deaganfern/index.html");
			break;
		case "5":
    		window.open("https://swiftsite2312.b-cdn.net");
			break;
		case "6":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/lucide-qr.png");
			break;
		case "7":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/gnmath-qr.png");
			break;
		default:
			alert("Type a number.")
			break;
	}
} else {
	alert("Outsmarted by a furry? Not sorry to you, tech department.");
}
