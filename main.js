const link = "https://dcjazd6t.beanweb.qzz.io.cdn.cloudflare.net/";
const htmlData = `
<!DOCTYPE html>
<html style="margin: 0; padding: 0; height: 100%; overflow: hidden;">
<head style="margin: 0; padding: 0; height: 100%; overflow: hidden;">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IXL</title>
</head>
<body>
<iframe src="${link}" style="position:fixed; top:0; left:0; width: 100%; height: 100% border:none;"></iframe>
</body>
</html>
`;
document.documentElement.remove();
var html = document.createElement('html');
var body = document.createElement('body');
document.body.innerHTML = htmlData;
console.log(`Loader loaded with link: ${link}!`);
