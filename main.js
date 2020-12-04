canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 110;
rover_height = 180;
rover_x = 10;
rover_y = 10;
rover_img = "car1.png";
rover2_width = 110;
rover2_height = 200;
rover2_x = 10;
rover2_y = 310;
rover2_img = "Car2.JPG";
background_img = "racing.jpg";
function add(){
background_imgtag=new Image()
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_img;

rover_imgtag=new Image()
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_img;

rover2_imgtag=new Image()
rover2_imgtag.onload=uploadRover2;
rover2_imgtag.src=rover2_img;
}
function uploadBackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
    function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_height,rover_width);
    }
    function uploadRover2(){
        ctx.drawImage(rover2_imgtag,rover2_x,rover2_y,rover2_height,rover2_width);
        }
        
        window.addEventListener("keydown",myKeyDown);
        function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="87"){
        console.log("up");
        up2();
    }
    if (keyPressed=="83"){
        console.log("down");
        down2();
    }
    if (keyPressed=="65"){
        console.log("left");
        left2();
    }
    if (keyPressed=="68"){
        console.log("right");
        right2();
    }
    if (keyPressed=="38"){
        console.log("up");
        up();
    }
    if (keyPressed=="40"){
        console.log("down");
        down();
    }
    if (keyPressed=="37"){
        console.log("left");
        left();
    }
    if (keyPressed=="39"){
        console.log("right");
        right();
    }
        }
        function up2(){
            if (rover2_y > 0){
                rover2_y=rover2_y - 13;
                uploadBackground();
                uploadRover2();
                uploadRover();
            }
        }
        function down2(){
            if(rover2_y < 350){
                rover2_y=rover2_y + 13;
                uploadBackground();
                uploadRover2();
                uploadRover();
            }
        }
        function right2(){
            if (rover2_x < 700){
                rover2_x=rover2_x + 13;
                uploadBackground();
                uploadRover2();
                uploadRover();
            }
        }
        function left2(){
            if (rover2_x > 0){
                rover2_x=rover2_x - 13;
                uploadBackground();
                uploadRover2();
                uploadRover();
            } 
        }
    
        function up(){
            if (rover_y > 0){
                rover_y=rover_y - 13;
                uploadBackground();
                uploadRover();
                uploadRover2();
            }
        }
        function down(){
            if(rover_y < 350){
                rover_y=rover_y + 13;
                uploadBackground();
                uploadRover();
                uploadRover2();
            }
        }
        function right(){
            if (rover_x < 700){
                rover_x=rover_x + 13;
                uploadBackground();
                uploadRover();
                uploadRover2();
            }
        }
        function left(){
            if (rover_x > 0){
                rover_x=rover_x - 13;
                uploadBackground();
                uploadRover();
                uploadRover2();
            } 
        }