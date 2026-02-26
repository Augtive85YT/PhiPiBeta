const link = "https://lxjo9udo.beanweb.qzz.io.cdn.cloudflare.net/";
const htmldata = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
</body>
</html>
<iframe src="${link}" style="position:fixed; top:0; left:0; width: 100%; height: 100% border:none;"></iframe>
`;
document.innerHTML = htmldata;
console.log(`Loader loaded with link: ${link}!`);
