// Task 4
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
const startX = 0
const startY = 0
const endX = 500
const endY = 500

let currentX = startX
let currentY = startY

ctx.beginPath()
ctx.moveTo(startX, startY)
ctx.lineTo(currentX, currentY)
ctx.stroke()


function drawLine() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    currentX += (endX - startX) / 100
    currentY += (endY - startY) / 100

    
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(currentX, currentY)
    ctx.lineWidth = 5
    ctx.strokeStyle = 'red'
    ctx.stroke()


    if (currentX >= endX && currentY >= endY) 
    {
    
        confirm("animation end")  
    } 
    else
    {
        
        animationId = requestAnimationFrame(drawLine)
    }
}

let animationId = requestAnimationFrame(drawLine)
