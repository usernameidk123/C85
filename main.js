canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

nasa_mars_images_array=["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);

roverwidth=100;
roverheight=90;

background_image=nasa_mars_images_array[random_number];
console.log("background_image= "+background_image);
rover_image="rover.png";

rover_X=10;
rover_Y=10;

function add(){
    background_img1=new Image();
    background_img1.onload=uploadBackground;
    background_img1.src=background_image;

    rover_img1=new Image();
    rover_img1.onload=uploadRover;
    rover_img1.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_img1,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img1,rover_X,rover_Y,roverwidth,roverheight);
    }

    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed=='38'){
            console.log("up key is pressed");
            up();
        }
        if(keypressed=='40'){
            console.log("down key is pressed");
            down();
        }
        if(keypressed=='37'){
            console.log("left key is pressed");
            left();
        }
        if(keypressed=='39'){
            console.log("right key is pressed");
            right();
        }

    }

    function up(){
    if(rover_Y>=0){
    rover_Y=rover_Y-10;
    console.log("when up arrow is pressed, x= "+rover_X+"and y= "+rover_Y);
    uploadBackground();
    uploadRover();
    }

    }

    function down(){
        if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("when down arrow is pressed, x= "+rover_X+"and y= "+rover_Y);
        uploadBackground();
        uploadRover();
        }
    
        }

        function left(){
            if(rover_X>=0){
            rover_X=rover_X-10;
            console.log("when left arrow is pressed, x= "+rover_X+"and y= "+rover_Y);
            uploadBackground();
            uploadRover();
            }
        
            }

            function right(){
                if(rover_X<=700){
                rover_X=rover_X+10;
                console.log("when left arrow is pressed, x= "+rover_X+"and y= "+rover_Y);
                uploadBackground();
                uploadRover();
                }
            
                }