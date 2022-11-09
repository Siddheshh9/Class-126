rightWristY = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(425, 425);
    canvas.center();

    video = createCapture();
    video.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED")
}

function gotPoses(results) {
    rightWristY = results[0].pose.rightWrist.y;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWrist Y = " +leftWristY+ "RightWrist Y = " +rightWristY);
}