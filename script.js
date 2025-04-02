window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let homeSection = document.querySelector(".home-section");
    let aboutSection = document.querySelector(".about-section");

    // Move Home Section Up
    if (scrollPosition > 50) {
        homeSection.style.transform = "translateY(-100vh)";
    } else {
        homeSection.style.transform = "translateY(0)";
    }

    // Show About Section when it comes into view
    if (scrollPosition > window.innerHeight / 2) {
        aboutSection.classList.add("visible");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("tech-expo-timeline");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("opacity-100");
            }
        });
    }, { threshold: 0.1 });
    observer.observe(section);
});
const timelineData = [
    // Day 1
    {
        date: 'April 11, 2025',
        time: '10:00 AM',
        title: 'Project Exhibition',
        venue: 'Room 217',
        audience: '3rd & 4th Year (All Branches)'
    },
    {
        date: 'April 11, 2025',
        time: '10:00 AM',
        title: 'Hacknovate',
        venue: 'Room 117',
        audience: '1st & 2nd Year'
    },
    {
        date: 'April 11, 2025',
        time: '10:00 AM',
        title: 'Robomania',
        venue: '-',
        audience: '2nd & 3rd Year (CSE, IT, AIML, AIDS, CSE-CS)'
    },
    {
        date: 'April 11, 2025',
        time: '11:00 AM - 12:00 PM',
        title: 'Poetic Resonance',
        venue: '-',
        audience: '2nd & 3rd Year (CSE, IT, AIML, AIDS, CSE-CS)'
    },
    {
        date: 'April 11, 2025',
        time: '12:30 PM - 2:30 PM',
        title: 'Technical Quiz',
        venue: '-',
        audience: '1st & 2nd Year'
    },
    // Day 2
    {
        date: 'April 12, 2025',
        time: '10:00 AM - 1:00 PM',
        title: 'Cyber Games',
        venue: 'CSE & IT Labs',
        audience: 'Open to All'
    },
    {
        date: 'April 12, 2025',
        time: '10:00 AM - 1:00 PM',
        title: 'Coding Battle',
        venue: 'CSE & IT Labs',
        audience: 'Open to All'
    },
   
    {
        date: 'April 12, 2025',
        time: '3:00 PM Onwards',
        title: 'Valedictory Session',
        venue: 'Room 101',
        audience: ''
    }
];

function createCalendarSVG() {
    return `
        <div class="calendar-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="calendar-icon">
                <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h5v5H7v-5z"/>
            </svg>
        </div>
    `;
}

function createTimelineItems() {
    const timeline = document.querySelector('.timeline');

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                ${createCalendarSVG()}
            </div>
            <div class="timeline-content">
                <h3 class="text-xl font-bold">${item.date}</h3>
                <p class="time">${item.time}</p>
                <p class="event-title">${item.title}</p>
                <p class="venue">Venue: ${item.venue}</p>
                <p class="audience">Audience: ${item.audience}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });

    // Scroll-based animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Initialize timeline on page load
document.addEventListener('DOMContentLoaded', createTimelineItems);
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200); // Delay each card animation
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active-dot");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 4000); // Auto-slide every 4s

showSlide(currentIndex);





// Get the modal
const modal = document.getElementById("registerModal");
        
// Get the button that opens the modal
const registerLink = document.getElementById("register-link");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the Register link, open the modal
registerLink.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let lastScrollY = window.scrollY;
const scrollDownText = document.querySelector(".scroll-down");

window.addEventListener("scroll", function () {
  if (window.scrollY < lastScrollY) {
    // Scrolling Up → Hide the text
    scrollDownText.classList.add("hidden");
  } else {
    // Scrolling Down → Show the text
    scrollDownText.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});


document.addEventListener("click", function () {
    const notificationContainer = document.querySelector(".notification-container");
    if (notificationContainer) {
        notificationContainer.style.opacity = "0";
        setTimeout(() => {
            notificationContainer.style.display = "none";
        }, 300);
    }
});
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}
document.getElementById("register-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("registerModal").style.display = "block";
});
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("registerModal").style.display = "none";
});
window.onclick = function(event) {
    if (event.target == document.getElementById("registerModal")) {
        document.getElementById("registerModal").style.display = "none";
    }
}