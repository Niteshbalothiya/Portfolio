var i = 0;
var txt = ['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', ]; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var textIndex = 0;
var deleting = false;

function typeWriter() {
    var element = document.getElementById("text-typewriter");
    if (deleting) {
        // Handle deleting effect
        if (i > 0) {
            element.innerHTML = txt[textIndex].substring(0, i-1);
            i--;
            setTimeout(typeWriter, speed / 2); // Faster delete speed
        } else {
            deleting = false;
            textIndex = (textIndex + 1) % txt.length; // Move to the next text
            setTimeout(typeWriter, speed); // Pause before typing next text
        }
    } else {
        // Handle typing effect
        if (i < txt[textIndex].length) {
            element.innerHTML = txt[textIndex].substring(0, i+1);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            deleting = true;
            setTimeout(typeWriter, speed * 2); // Pause before starting to delete
        }
    }
}

typeWriter();