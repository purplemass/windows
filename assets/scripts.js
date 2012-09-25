var winObj = null;

var image_w = 321;
var image_h = 321;
var imageWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width="+image_w+",height="+image_h;

var gallery_w = 880;
var gallery_h = 500;
var galleryWindowFeatures  = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width="+gallery_w+",height="+gallery_h;

$(function()
{
    $(".image").click(function()
    {
        num = $(this).find(".number").html();
        if (num == 6)
            openImage(101);
        else if (num == 7)
            openGallery();
        else if (num == 8)
            openGalleryBehind();
        else
            openImage(num);
    });
});

function openImage(num)
{
    closeWindow();
    winObj = window.open("image.php?num="+num, "ImageWindow", imageWindowFeatures);
}

function openGallery()
{
    closeWindow();
    winObj = window.open("index.php?colour=Orange", "GalleryWindow", galleryWindowFeatures);
}

function openGalleryBehind(){
    closeWindow();
    winObj = window.open("index.php?colour=Red", "GalleryWindowBehind", galleryWindowFeatures).blur();
    window.focus();
    self.focus();
 }

function closeWindow()
{
    if (winObj != null)
        winObj.close();

    // if ( ! winObj.closed)
    //     winObj.close();
}

/*
    https://developer.mozilla.org/en-US/docs/DOM/window.open
    http://stackoverflow.com/questions/11407153/open-a-window-behind-the-current-window-using-javascript-jquery

    if(winObj == null || winObj.closed)
        winObj = window.open("image.php?num="+num, "WindowName", imageWindowFeatures);
    else
        winObj.focus();
*/