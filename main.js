const link = "https://dcjazd6t.beanweb.qzz.io.cdn.cloudflare.net/";
const htmlData = `
<head style="margin: 0; padding: 0; height: 100%; overflow: hidden;">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IXL</title>
</head>
<body>
<iframe src="${link}" style="position:fixed; top:0; left:0; width: 100%; height: 100% border:none;"></iframe>
</body>
`;
document.head.remove();
document.body.remove();
var head = document.createElement('head');
var body = document.createElement('body')
document.documentElement.innerHTML = htmlData;
console.log("IXLambda loaded successfully! :3");
