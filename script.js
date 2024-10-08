//https://www.w3schools.com/graphics/canvas_drawing.asp  resource!

const canvas = document.getElementById('drawing-pad');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

function startDrawing(event) {
    drawing = true;
    draw(event); 
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath(); 
}

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 5; 
    ctx.lineCap = 'round'; 
    ctx.strokeStyle = 'rgba(255, 182, 193, 0.8)';
    ctx.lineTo(event.clientX, event.clientY); 
    ctx.stroke(); 
    ctx.beginPath(); 
    ctx.moveTo(event.clientX, event.clientY);
}


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

