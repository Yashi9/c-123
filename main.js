function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(700,100);
    

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model is intialized");
}

function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length>0)
    {
        console.log(results);

        console.log("rightWrist X  = " +results[0].pose.rightWrist.x+"rightWrist Y = " +results[0].pose.rightWrist.y);
        console.log("leftWrist X  = " +results[0].pose.leftWrist.x+"leftWrist Y = " +results[0].pose.leftWrist.y);
    }


}

function draw()
{
    background("#fffab3");
}