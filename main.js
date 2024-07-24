document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Biomedical Engineer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function setRadialBarPercentage(selector, percentage) {
        const circle = document.querySelector(selector);
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    }

    // Define the percentages for each radial bar
    const radialBars = [
        { selector: '.path-1', percentage: 90 },
        { selector: '.path-2', percentage: 80 },
        { selector: '.path-3', percentage: 75 },
        { selector: '.path-4', percentage: 85 },
    ];

    // Set the percentages for each radial bar
    radialBars.forEach(bar => {
        setRadialBarPercentage(bar.selector, bar.percentage);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");
    // Rest of the code...
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            console.log(`Clicked link to: ${targetId}`); // Log the target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`Found target element: ${targetElement.id}`); // Log the found element ID
                const offsetTop = targetElement.offsetTop - 70; // Adjust for header height
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            } else {
                console.log(`Target element not found: ${targetId}`); // Log if the target element is not found
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const description = this.previousElementSibling; // Get the description paragraph
            const serviceMore = description.querySelector('.service-more');
            
            if (serviceMore.style.display === 'none' || serviceMore.style.display === '') {
                serviceMore.style.display = 'inline'; // Show extended description
                this.textContent = 'Show Less'; // Change button text
            } else {
                serviceMore.style.display = 'none'; // Hide extended description
                this.textContent = 'Learn More'; // Change button text
            }
        });
    });
});
