    // Task 2
    const redRange = document.getElementById('redRange')
    const greenRange = document.getElementById('greenRange')
    const blueRange = document.getElementById('blueRange')
    const displayText = document.getElementById('displayText')

    
    function colorChange()
    {
        const redColor = redRange.value
        const greenColor = greenRange.value
        const blueColor = blueRange.value

        displayText.style.color = `rgba(${redColor}, ${greenColor}, ${blueColor}, 1)`
    }

    redRange.addEventListener('input', colorChange)
    greenRange.addEventListener('input', colorChange)
    blueRange.addEventListener('input', colorChange)

    colorChange()