video = "";
status = "";

function preload()
{
    video= createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(600, 350)
    canvas.center();
}

function start()
{
    od = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED!";
}

function ModelLoaded()
{
    console.log("MODEL IS LOADED!");
    status = true;
    video.volume(1);
    video.speed(2);
    video.loop(1);
}

function draw()
{
    image(video,0, 0, 600, 350);

}