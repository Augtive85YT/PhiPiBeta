const link = "https://lxdo9udo.beanweb.qzz.io.cdn.cloudflare.net/";
const aboutblank = window.open("","_blank");
const htmldata = "<iframe src='"+link+"' style='border: 0; width: 100%; height: 100%'>Your browser does not support iFrames.</iframe>";
if (aboutblank) {
    aboutblank.document.write(htmldata);
}
