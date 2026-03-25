// Sample travel packages data
const packages = [
    {
        id: 1,
        destination: "Paris, France",
        duration: "5 Days",
        description: "Experience the magic of Paris with iconic landmarks and world-class cuisine.",
        amenities: ["Hotel", "Flights", "Tours", "Meals"],
        price: 1299,
        emoji: "🗼"
    },
    {
        id: 2,
        destination: "Tokyo, Japan",
        duration: "7 Days",
        description: "Discover the blend of ancient temples and modern technology in Tokyo.",
        amenities: ["Hotel", "Flights", "Tours", "Meals"],
        price: 1599,
        emoji: "🗾"
    },
    {
        id: 3,
        destination: "New York, USA",
        duration: "4 Days",
        description: "Explore the bustling city of New York with its iconic skyline and attractions.",
        amenities: ["Hotel", "Tours", "Broadway Show", "Meals"],
        price: 999,
        emoji: "🗽"
    },
    {
        id: 4,
        destination: "Dubai, UAE",
        duration: "6 Days",
        description: "Experience luxury and adventure in the desert oasis of Dubai.",
        amenities: ["Hotel", "Flights", "Desert Safari", "Meals"],
        price: 1399,
        emoji: "🏜️"
    },
    {
        id: 5,
        destination: "Bali, Indonesia",
        duration: "5 Days",
        description: "Relax on pristine beaches and explore ancient temples in Bali.",
        amenities: ["Hotel", "Flights", "Beach", "Spa", "Meals"],
        price: 799,
        emoji: "🏝️"
    },
    {
        id: 6,
        destination: "London, England",
        duration: "4 Days",
        description: "Visit royal palaces, museums, and enjoy authentic British tea and culture.",
        amenities: ["Hotel", "Flights", "Tours", "Meals"],
        price: 1099,
        emoji: "🏰"
    }
];

// Bookings array
let bookings = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadPackages();
    setupHamburgerMenu();
    setMinDates();
    loadBookings();
});

// Setup hamburger menu
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Load and display packages
function loadPackages() {
    const packagesGrid = document.getElementById('packagesGrid');
    packagesGrid.innerHTML = '';

    packages.forEach((pkg, index) => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';
        packageCard.style.animationDelay = `${index * 0.1}s`;
        
        packageCard.innerHTML = `
            <div class="package-image">
                ${pkg.emoji}
            </div>
            <div class="package-info">
                <div class="package-destination">${pkg.destination}</div>
                <div class="package-duration">
                    <i class="fas fa-calendar"></i> ${pkg.duration}
                </div>
                <p class="package-description">${pkg.description}</p>
                <div class="package-amenities">
                    ${pkg.amenities.map(amenity => `<span class="amenity">${amenity}</span>`).join('')}
                </div>
                <div class="package-price">
                    <span class="price">$${pkg.price}</span>
                    <button class="book-btn" onclick="openBookingModal(${pkg.id}, '${pkg.destination}', ${pkg.price})">
                        Book Now
                    </button>
                </div>
            </div>
        `;

        packagesGrid.appendChild(packageCard);
    });
}

// Set minimum dates for date inputs
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').setAttribute('min', today);
    document.getElementById('checkout').setAttribute('min', today);
}

// Search trips
function searchTrips() {
    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const passengers = document.getElementById('passengers').value;

    if (!from) {
        showToast('Please enter departure city', 'error');
        return;
    }

    if (!to) {
        showToast('Please enter destination city', 'error');
        return;
    }

    if (!checkin || !checkout) {
        showToast('Please select both check-in and check-out dates', 'error');
        return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
        showToast('Check-out date must be after check-in date', 'error');
        return;
    }

    showToast(`Searching trips from ${from} to ${to} for ${passengers} passenger(s)...`);
    
    // Scroll to packages section
    setTimeout(() => {
        document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Open booking modal
function openBookingModal(packageId, destination, price) {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    
    // Store current booking info
    modal.dataset.packageId = packageId;
    modal.dataset.destination = destination;
    modal.dataset.price = price;
    
    // Reset form
    document.querySelector('.modal-content form').reset();
}

// Close booking modal
function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Complete booking
function completeBooking(event) {
    event.preventDefault();

    const modal = document.getElementById('bookingModal');
    const name = document.getElementById('bookingName').value;
    const email = document.getElementById('bookingEmail').value;
    const phone = document.getElementById('bookingPhone').value;
    const requests = document.getElementById('bookingRequests').value;

    const booking = {
        id: Date.now(),
        packageId: modal.dataset.packageId,
        destination: modal.dataset.destination,
        price: modal.dataset.price,
        name: name,
        email: email,
        phone: phone,
        requests: requests,
        date: new Date().toLocaleDateString(),
        status: 'Confirmed'
    };

    bookings.push(booking);
    saveBookings();
    
    closeBookingModal();
    showToast('✓ Booking confirmed successfully!');
    
    // Update bookings display
    loadBookings();
}

// Load and display bookings
function loadBookings() {
    const bookingsContainer = document.getElementById('bookingsContainer');
    
    if (bookings.length === 0) {
        bookingsContainer.innerHTML = '<p class="no-bookings">No bookings yet. Start your adventure now!</p>';
        return;
    }

    bookingsContainer.innerHTML = '';
    
    bookings.forEach((booking, index) => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'booking-card';
        bookingCard.style.animationDelay = `${index * 0.1}s`;
        
        bookingCard.innerHTML = `
            <div class="booking-details">
                <h3>${booking.destination}</h3>
                <p><strong>Passenger:</strong> ${booking.name}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Price:</strong> $${booking.price}</p>
                <p><strong>Booked on:</strong> ${booking.date}</p>
                ${booking.requests ? `<p><strong>Special Requests:</strong> ${booking.requests}</p>` : ''}
            </div>
            <div>
                <span class="booking-status">${booking.status}</span>
                <button class="book-btn" onclick="cancelBooking(${booking.id})" style="margin-top: 10px; background: #ef4444;">
                    Cancel
                </button>
            </div>
        `;

        bookingsContainer.appendChild(bookingCard);
    });
}

// Cancel booking
function cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== bookingId);
        saveBookings();
        loadBookings();
        showToast('Booking cancelled successfully');
    }
}

// Handle contact form
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;

    // Simulate sending email
    console.log('Contact Form Submitted:', { name, email, message });
    
    showToast('Thank you! Your message has been sent.');
    form.reset();
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll to search section
function scrollToSearch() {
    document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
}

// Save bookings to localStorage
function saveBookings() {
    localStorage.setItem('travelBookings', JSON.stringify(bookings));
}

// Load bookings from localStorage
function loadBookingsFromStorage() {
    const stored = localStorage.getItem('travelBookings');
    if (stored) {
        bookings = JSON.parse(stored);
    }
}

// Load bookings on page load
loadBookingsFromStorage();

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookingModal();
    }
});

// Add responsive behavior for filter grid
function adjustFilterGrid() {
    const searchFilters = document.querySelector('.search-filters');
    if (window.innerWidth < 768) {
        searchFilters.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 1024) {
        searchFilters.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        searchFilters.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    }
}

window.addEventListener('resize', adjustFilterGrid);
window.addEventListener('load', adjustFilterGrid);

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease-in-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe package cards and booking cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.package-card, .booking-card, .info-card').forEach(el => {
        observer.observe(el);
    });
});
