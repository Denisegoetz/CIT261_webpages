const myCanvas = document.getElementById('myCanvas');



function draw() {
   var c = myCanvas.getContext('2d'); 
   c.fillStyle = 'rgba(255, 25, 52, 0.8)';
    
            /* x, y, width, height      Cooridinates are from top left corner of screen*/    
   c.fillRect(20, 10, 80, 140);s
}


function draw2() { 
   var c = myCanvas.getContext('2d'); 
   c.fillStyle = 'rgba(150, 99, 200, 0.5)';
   c.beginPath();
   c.arc(190,110,40,0,2*Math.PI);
   c.stroke();
   c.fill();
}

function draw3() { 
   var c = myCanvas.getContext('2d'); 
   c.beginPath();
   c.moveTo(50, 280);
   c.lineTo(100, 200);
   c.strokeStyle = "#fa34a3";
   c.stroke();
}

function draw4() { 
   var c = myCanvas.getContext('2d'); 
   c.beginPath();
   c.moveTo(100, 200);
   c.lineTo(200, 280);
   c.strokeStyle = "#fa34a3";
   c.stroke();
}

function draw5() { 
   var c = myCanvas.getContext('2d'); 
   c.beginPath();
   c.moveTo(200, 280);
   c.lineTo(50, 280);
   c.strokeStyle = "#fa34a3";
   c.stroke();

}