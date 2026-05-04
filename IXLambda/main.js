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
			return;
		case "2":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/gnmath.svg");
			return;
		case "3":
    		window.open("https://dogeub.storage.googleapis.com/index.html");
			return;
		case "4":
    		window.open("https://s3.amazonaws.com/deaganfern/index.html");
			return;
		case "5":
    		window.open("https://swiftsite2312.b-cdn.net");
			return;
		case "6":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/lucide-qr.png");
			return;
		case "7":
    		window.open("https://cdn.jsdelivr.net/gh/PhiPiBeta/host/gnmath-qr.png");
			return;
		default:
			alert("Type a number.")
			return;
	}
} else {
	alert("Outsmarted by a furry? Not sorry to you, tech department.");
}
