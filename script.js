const packages = [
    {
        id: 1,
        route: "Mumbai to Goa",
        destination: "Goa Coast and Panaji Heritage",
        state: "Goa",
        theme: "coast",
        duration: "5 days",
        bestSeason: "Nov to Mar",
        budgetMin: 22000,
        budgetMax: 45000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        description: "A city-to-shore route using real Goa highlights: Panaji, Fontainhas, Sao Tome, Palolem, Benaulim, and coastal activities.",
        amenities: ["Panaji", "Fontainhas", "Palolem", "Benaulim"],
        highlights: ["Fontainhas and Sao Tome heritage quarter", "Panaji city base", "South Goa beaches"],
        facts: ["Panaji became the official capital of Portuguese territories in India in 1843.", "Fontainhas and Sao Tome are old residential quarters in Panaji.", "Palolem and Benaulim are recognised Goa beach stops."],
        sourceName: "Incredible India - Goa",
        sourceUrl: "https://www.incredibleindia.gov.in/en/goa"
    },
    {
        id: 2,
        route: "Delhi to Jaipur",
        destination: "Royal Rajasthan Trail",
        state: "Rajasthan",
        theme: "heritage",
        duration: "4 days",
        bestSeason: "Oct to Mar",
        budgetMin: 18000,
        budgetMax: 38000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        description: "A real heritage route around Jaipur's most documented monuments, bazaars, and old-city architecture.",
        amenities: ["Hawa Mahal", "Amber Fort", "Old City", "Bazaars"],
        highlights: ["Hawa Mahal", "Amber Fort", "Jaipur heritage walk"],
        facts: ["Rajasthan Tourism describes Hawa Mahal as one of Jaipur's iconic attractions.", "Amber Fort is one of the best-known fort complexes around Jaipur.", "Winter is the most comfortable season for Rajasthan sightseeing."],
        sourceName: "Rajasthan Tourism - Hawa Mahal",
        sourceUrl: "https://www.tourism.rajasthan.gov.in/hawa-mahal.html"
    },
    {
        id: 3,
        route: "Kochi to Alappuzha",
        destination: "Kerala Backwater Reset",
        state: "Kerala",
        theme: "wellness",
        duration: "6 days",
        bestSeason: "Sep to Mar",
        budgetMin: 28000,
        budgetMax: 65000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
        description: "A real Kerala route centred on Fort Kochi and Alappuzha backwaters, with official houseboat guidance.",
        amenities: ["Houseboat", "Backwaters", "Fort Kochi", "DTPC counter"],
        highlights: ["Alappuzha houseboats", "Kerala backwaters", "Fort Kochi add-on"],
        facts: ["Kerala Tourism notes that Alappuzha alone has as many as 500 houseboats.", "Kerala Tourism points travelers to the DTPC House Boat Pre-paid Counter.", "Houseboats are a familiar sight on Kerala backwaters."],
        sourceName: "Kerala Tourism - Houseboats",
        sourceUrl: "https://www.keralatourism.org/houseboat/"
    },
    {
        id: 4,
        route: "Bengaluru to Coorg",
        destination: "Coffee Hills and Coast",
        state: "Karnataka",
        theme: "mountains",
        duration: "5 days",
        bestSeason: "Oct to May",
        budgetMin: 20000,
        budgetMax: 42000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=900&q=80",
        description: "A Western Ghats route built around Kodagu coffee country, Abbey Falls, Madikeri, and forested highlands.",
        amenities: ["Kodagu", "Abbey Falls", "Coffee", "Madikeri"],
        highlights: ["Abbey Falls", "Coffee estates", "Raja's Seat"],
        facts: ["Karnataka Tourism describes Coorg as rolling hills, dense forests, and aromatic coffee plantations.", "Abbey Falls is a popular waterfall in Kodagu district.", "Kodagu has no railway station; nearby railheads include Mysuru, Hassan, Mangaluru, Thalassery, and Kannur."],
        sourceName: "Karnataka Tourism - Coorg",
        sourceUrl: "https://karnatakatourism.org/destinations/coorg/"
    },
    {
        id: 5,
        route: "Kolkata to Sundarbans",
        destination: "Mangrove Wildlife Cruise",
        state: "West Bengal",
        theme: "wildlife",
        duration: "3 days",
        bestSeason: "Nov to Feb",
        budgetMin: 12000,
        budgetMax: 28000,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=900&q=80",
        description: "A mangrove and river route for travelers who want a shorter wildlife-oriented plan from Kolkata.",
        amenities: ["Boat route", "Mangroves", "Birding", "Permits"],
        highlights: ["Mangrove creeks", "Watchtower circuits", "Village stay options"],
        facts: ["Sundarbans travel requires attention to forest permits and boat operations.", "Winter is generally the easier wildlife season in eastern India.", "Use official West Bengal tourism resources for current route guidance."],
        sourceName: "West Bengal Tourism",
        sourceUrl: "https://www.wbtourism.gov.in/"
    },
    {
        id: 6,
        route: "Chennai to Mamallapuram and Puducherry",
        destination: "Coromandel Food and Shore",
        state: "Tamil Nadu",
        theme: "food",
        duration: "4 days",
        bestSeason: "Oct to Mar",
        budgetMin: 16000,
        budgetMax: 36000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        description: "A real coastal heritage route linking Chennai, Mamallapuram's Shore Temple, Tamil food, and Puducherry-style extensions.",
        amenities: ["Shore Temple", "Mamallapuram", "Coastal food", "Puducherry add-on"],
        highlights: ["Shore Temple", "Five Rathas", "Coastal food trail"],
        facts: ["Tamil Nadu Tourism describes Mamallapuram as a historic town with monuments, temples, and UNESCO World Heritage Sites.", "The Shore Temple complex was designated as a UNESCO World Heritage Site with other Mamallapuram monuments.", "Tamil Nadu Tourism lists Chennai International Airport as about 55 km away and November to February as the best time to visit."],
        sourceName: "Tamil Nadu Tourism - Shore Temple",
        sourceUrl: "https://www.tamilnadutourism.tn.gov.in/destinations/mamallapuram-shore-temple"
    },
    {
        id: 7,
        route: "Guwahati to Kaziranga",
        destination: "Assam Wildlife and Tea",
        state: "Assam",
        theme: "wildlife",
        duration: "5 days",
        bestSeason: "Nov to Apr",
        budgetMin: 30000,
        budgetMax: 70000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
        description: "A real Northeast wildlife route built around Kaziranga National Park, tea landscapes, and Assam tourism lodges.",
        amenities: ["Kaziranga", "Safari", "Tea", "Assam lodges"],
        highlights: ["Kaziranga safari", "Tea garden add-on", "Brahmaputra route"],
        facts: ["Assam Tourism identifies Kaziranga as home to the great Indian one-horned rhinoceros.", "Kaziranga was declared a UNESCO World Heritage Site in 1985.", "Assam Tourism lists state-run lodges at Kohora."],
        sourceName: "Assam Tourism - Kaziranga",
        sourceUrl: "https://assamtourism.gov.in/Kaziranga1.php"
    },
    {
        id: 8,
        route: "Ahmedabad to Kutch",
        destination: "White Rann Festival Trip",
        state: "Gujarat",
        theme: "heritage",
        duration: "5 days",
        bestSeason: "Nov to Feb",
        budgetMin: 25000,
        budgetMax: 75000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=900&q=80",
        description: "A real Kutch winter route around the White Rann, Dhordo, crafts, folk culture, and Rann Utsav season.",
        amenities: ["White Rann", "Dhordo", "Crafts", "Rann Utsav"],
        highlights: ["White Rann", "Dhordo", "Craft villages"],
        facts: ["Kachchh district describes the Rann as famous for white salty desert sand.", "The Government of Gujarat holds Rann Utsav every year from December to February.", "The White Rann is one of Gujarat's best-known winter travel landscapes."],
        sourceName: "Kachchh District - White Rann",
        sourceUrl: "https://kachchh.nic.in/tourist-place/white-rann-of-kachchh/"
    },
    {
        id: 9,
        route: "Delhi to Rishikesh",
        destination: "Ganga Adventure Reset",
        state: "Uttarakhand",
        theme: "mountains",
        duration: "4 days",
        bestSeason: "Sep to Jun",
        budgetMin: 14000,
        budgetMax: 42000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        description: "A real Rishikesh route for Ganga aarti, rafting zones, yoga stays, cafe walks, and Garhwal add-ons.",
        amenities: ["Ganga aarti", "Rafting", "Yoga", "Garhwal"],
        highlights: ["Ganga aarti", "Rafting", "Ashram walks"],
        facts: ["Uttarakhand Tourism's Rishikesh itinerary includes river aarti.", "The official itinerary references rafting on the Ganga stretch from Kaudiyala to Rishikesh.", "Rishikesh is a practical base for Garhwal spiritual and adventure routes."],
        sourceName: "Uttarakhand Tourism - Rishikesh PDF",
        sourceUrl: "https://uttarakhandtourism.gov.in/sites/default/files/itineraries-pdf/Itinerary%20Rishikesh.pdf"
    }
];

const festivalIdeas = {
    jan: "January: choose Jaipur and Kutch for literature, craft, desert nights, and crisp winter sightseeing.",
    mar: "March: Mathura, Vrindavan, Jaipur, and Goa work well for Holi, spring food, and beach evenings.",
    aug: "August: Kerala is lush for Onam season, backwaters, Ayurveda, and green monsoon landscapes.",
    oct: "October: Kolkata and Mysuru shine with Durga Puja, Dasara, palace lighting, food walks, and culture.",
    dec: "December: Goa, Pondicherry, Kochi, and Shillong are strong for Christmas markets, music, cafes, and coast weather."
};

let currentUser = null;
let bookings = [];
let wishlist = [];
let itineraries = [];
let authMode = "login";
let activePackages = [...packages];
let compareIds = [];

document.addEventListener("DOMContentLoaded", () => {
    loadAppState();
    loadPackages(packages);
    setupHamburgerMenu();
    setMinDates();
    updateUIForAuthState();
    updateSeasonGuide();
    calculateBudget(false);
    document.getElementById("checkin").addEventListener("change", updateSeasonGuide);
});

function rupee(value) {
    return `Rs.${Number(value).toLocaleString("en-IN")}`;
}

function durationDays(pkg) {
    return Number.parseInt(pkg.duration, 10) || 0;
}

function mapsUrl(pkg) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pkg.route + " " + pkg.destination)}`;
}

function getRoutePlan(pkg) {
    const highlights = pkg.highlights.length ? pkg.highlights : pkg.amenities;
    return Array.from({ length: durationDays(pkg) || 3 }, (_, index) => {
        const focus = highlights[index % highlights.length];
        if (index === 0) return `Arrive on the ${pkg.route} corridor, check in, and keep the evening light around ${focus}.`;
        if (index === durationDays(pkg) - 1) return `Wrap up with ${focus}, buffer time for local transport, and depart without a rushed checkout.`;
        return `Use the day for ${focus}, local food, and one flexible backup based on weather and opening hours.`;
    });
}

function getTransportNotes(pkg) {
    const notes = {
        Goa: ["Nearest major air gateway: Goa airports; use local taxis or self-drive only where legal.", "For South Goa beaches, keep transfer buffers from Panaji or airport zones."],
        Rajasthan: ["Delhi to Jaipur works by train, bus, private cab, or flight.", "Use local autos/cabs around Jaipur; check monument timings before leaving."],
        Kerala: ["Kochi is a practical flight and rail gateway.", "For Alappuzha houseboats, use official DTPC guidance and confirm boarding point."],
        Karnataka: ["Kodagu has no railway station; plan road transfer from Mysuru, Mangaluru, Hassan, Kannur, or Bengaluru.", "Hill roads need daylight buffers during heavy rain."],
        "West Bengal": ["Kolkata is the practical gateway; Sundarbans travel usually needs road plus boat coordination.", "Check forest permissions and boat timings before departure."],
        "Tamil Nadu": ["Chennai is the gateway; Mamallapuram is reachable by the East Coast Road corridor.", "Puducherry add-on works best with a road transfer."],
        Assam: ["Guwahati and Jorhat are common gateways for Kaziranga circuits.", "Safari zones and timings should be checked with official/local operators."],
        Gujarat: ["Bhuj is the nearest city for White Rann access.", "Rann Utsav season needs advance stay and permit checks."],
        Uttarakhand: ["Delhi to Rishikesh works by road and rail connections via Haridwar.", "Rafting depends on season, river conditions, and operator permissions."]
    };
    return notes[pkg.state] || ["Check official tourism guidance before booking transport.", "Keep a buffer for local transfers."];
}

function loadAppState() {
    currentUser = JSON.parse(localStorage.getItem("ctsUser") || "null");
    bookings = JSON.parse(localStorage.getItem("ctsBookings") || "[]");
    wishlist = JSON.parse(localStorage.getItem("ctsWishlist") || "[]");
    itineraries = JSON.parse(localStorage.getItem("ctsItineraries") || "[]");
}

function saveAppState() {
    localStorage.setItem("ctsUser", JSON.stringify(currentUser));
    localStorage.setItem("ctsBookings", JSON.stringify(bookings));
    localStorage.setItem("ctsWishlist", JSON.stringify(wishlist));
    localStorage.setItem("ctsItineraries", JSON.stringify(itineraries));
}

function openAuthModal(mode) {
    authMode = mode;
    const isSignup = mode === "signup";
    document.getElementById("authTitle").textContent = isSignup ? "Create Account" : "Login";
    document.getElementById("authSubtitle").textContent = isSignup ? "Save real routes, budgets, source links, and wishlists." : "Welcome back to City to Shore.";
    document.getElementById("nameGroup").classList.toggle("hidden", !isSignup);
    document.getElementById("authSubmitBtn").textContent = isSignup ? "Sign Up" : "Login";
    document.getElementById("authSwitchText").textContent = isSignup ? "Already have an account?" : "New here?";
    document.getElementById("authSwitchBtn").textContent = isSignup ? "Login" : "Sign Up";
    showModal("authModal");
}

function closeAuthModal() {
    hideModal("authModal");
}

function toggleAuthMode() {
    openAuthModal(authMode === "login" ? "signup" : "login");
}

function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById("authEmail").value.trim();
    const nameInput = document.getElementById("authName").value.trim();
    currentUser = {
        name: nameInput || email.split("@")[0],
        email
    };
    saveAppState();
    closeAuthModal();
    updateUIForAuthState();
    showToast(`Welcome, ${currentUser.name}. Your India travel desk is ready.`);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("ctsUser");
    updateUIForAuthState();
    showToast("Logged out successfully.");
}

function updateUIForAuthState() {
    document.querySelector(".auth-btns").classList.toggle("hidden", Boolean(currentUser));
    document.querySelector(".user-profile").classList.toggle("hidden", !currentUser);
    document.querySelectorAll(".user-logged-in").forEach((item) => item.classList.toggle("hidden", !currentUser));
    document.getElementById("dashboard").classList.toggle("hidden", !currentUser);
    document.getElementById("bookings").classList.toggle("hidden", Boolean(currentUser));

    if (currentUser) {
        document.getElementById("userNameDisplay").textContent = currentUser.name;
        updateDashboard();
    }
}

function loadPackages(list) {
    const grid = document.getElementById("packagesGrid");
    activePackages = applySort(list);
    document.getElementById("resultCount").textContent = list.length === packages.length ? "Showing all packages" : `${list.length} package${list.length === 1 ? "" : "s"} found`;

    if (!activePackages.length) {
        grid.innerHTML = `<p class="no-bookings">No packages matched. Try a different city, theme, or budget.</p>`;
        return;
    }

    grid.innerHTML = activePackages.map((pkg) => {
        const saved = wishlist.includes(pkg.id);
        const comparing = compareIds.includes(pkg.id);
        return `
            <article class="package-card" id="route-${pkg.id}">
                <div class="package-image">
                    <img src="${pkg.image}" alt="${pkg.destination}">
                    <button class="wishlist-btn ${saved ? "active" : ""}" type="button" onclick="toggleWishlist(${pkg.id})" aria-label="Save ${pkg.destination}">
                        <i class="${saved ? "fas" : "far"} fa-heart"></i>
                    </button>
                </div>
                <div class="package-info">
                    <div class="tag-row">
                        <span class="package-badge">${pkg.theme}</span>
                        <span class="package-badge">${pkg.state}</span>
                    </div>
                    <h3>${pkg.destination}</h3>
                    <p class="package-description">${pkg.description}</p>
                    <div class="package-meta">
                        <span><i class="fas fa-route"></i> ${pkg.route}</span>
                        <span><i class="fas fa-calendar-days"></i> ${pkg.duration}</span>
                        <span><i class="fas fa-star"></i> ${pkg.rating}</span>
                        <span><i class="fas fa-cloud-sun"></i> ${pkg.bestSeason}</span>
                    </div>
                    <div class="package-amenities">
                        ${pkg.amenities.map((item) => `<span class="amenity">${item}</span>`).join("")}
                    </div>
                    <div class="fact-list">
                        ${pkg.facts.map((fact) => `<span>${fact}</span>`).join("")}
                    </div>
                    <a class="source-link" href="${pkg.sourceUrl}" target="_blank" rel="noopener">
                        <i class="fas fa-arrow-up-right-from-square"></i> Source: ${pkg.sourceName}
                    </a>
                    <div class="card-actions">
                        <button class="outline-btn" type="button" onclick="openDetails(${pkg.id})"><i class="fas fa-circle-info"></i> Details</button>
                        <button class="outline-btn ${comparing ? "active" : ""}" type="button" onclick="toggleCompare(${pkg.id})"><i class="fas fa-scale-balanced"></i> Compare</button>
                    </div>
                    <div class="package-price">
                        <div>
                            <span class="price">${rupee(pkg.budgetMin)} - ${rupee(pkg.budgetMax)}</span>
                            <span class="per-person">planning budget range</span>
                        </div>
                        <button class="book-btn" type="button" onclick="openBookingModal(${pkg.id})">Save Plan</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
    updateCompareTray();
}

function applySort(list) {
    const sortBy = document.getElementById("sortBy")?.value || "recommended";
    const sorted = [...list];
    if (sortBy === "budgetLow") sorted.sort((a, b) => a.budgetMin - b.budgetMin);
    if (sortBy === "budgetHigh") sorted.sort((a, b) => b.budgetMax - a.budgetMax);
    if (sortBy === "duration") sorted.sort((a, b) => durationDays(a) - durationDays(b));
    if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
}

function sortPackages() {
    loadPackages(activePackages);
}

function searchTrips(event) {
    if (event) event.preventDefault();
    const from = document.getElementById("from").value.trim().toLowerCase();
    const to = document.getElementById("to").value.trim().toLowerCase();
    const theme = document.getElementById("theme").value;
    const budget = document.getElementById("budgetRange").value;

    const filtered = packages.filter((pkg) => {
        const text = `${pkg.route} ${pkg.destination} ${pkg.state} ${pkg.description} ${pkg.highlights.join(" ")}`.toLowerCase();
        const fromMatch = !from || pkg.route.toLowerCase().includes(from);
        const toMatch = !to || text.includes(to);
        const themeMatch = theme === "all" || pkg.theme === theme;
        const budgetMatch = budget === "all" || pkg.budgetMin <= Number(budget);
        return fromMatch && toMatch && themeMatch && budgetMatch;
    });

    loadPackages(filtered);
    document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
    showToast(filtered.length ? `Found ${filtered.length} route option${filtered.length === 1 ? "" : "s"}.` : "No matching package found.");
}

function quickFilter(theme) {
    document.getElementById("theme").value = theme;
    searchTrips();
}

function resetSearch() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("theme").value = "all";
    document.getElementById("budgetRange").value = "all";
    loadPackages(packages);
    showToast("Search reset.");
}

function openDetails(id) {
    const pkg = packages.find((item) => item.id === id);
    const plan = getRoutePlan(pkg);
    const transport = getTransportNotes(pkg);
    document.getElementById("detailsContent").innerHTML = `
        <div class="detail-hero">
            <img src="${pkg.image}" alt="${pkg.destination}">
            <div>
                <p class="eyebrow">${pkg.state} | ${pkg.theme}</p>
                <h2>${pkg.destination}</h2>
                <p>${pkg.description}</p>
                <div class="package-meta">
                    <span><i class="fas fa-route"></i> ${pkg.route}</span>
                    <span><i class="fas fa-calendar-days"></i> ${pkg.duration}</span>
                    <span><i class="fas fa-cloud-sun"></i> ${pkg.bestSeason}</span>
                    <span><i class="fas fa-indian-rupee-sign"></i> ${rupee(pkg.budgetMin)} - ${rupee(pkg.budgetMax)}</span>
                </div>
                <div class="card-actions">
                    <button class="book-btn" type="button" onclick="openBookingModal(${pkg.id})">Save Plan</button>
                    <a class="outline-btn" href="${mapsUrl(pkg)}" target="_blank" rel="noopener"><i class="fas fa-map-location-dot"></i> Open Map</a>
                    <a class="outline-btn" href="${pkg.sourceUrl}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Official Source</a>
                    <button class="outline-btn" type="button" onclick="copyRouteLink(${pkg.id})"><i class="fas fa-link"></i> Copy Link</button>
                </div>
            </div>
        </div>
        <div class="detail-grid">
            <div class="detail-box">
                <h3>Day Plan</h3>
                <ul>${plan.map((item, index) => `<li><strong>Day ${index + 1}:</strong> ${item}</li>`).join("")}</ul>
            </div>
            <div class="detail-box">
                <h3>Transport Notes</h3>
                <ul>${transport.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
            <div class="detail-box">
                <h3>Source Facts</h3>
                <ul>${pkg.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
            </div>
        </div>
    `;
    showModal("detailsModal");
}

function toggleCompare(id) {
    if (compareIds.includes(id)) {
        compareIds = compareIds.filter((item) => item !== id);
    } else {
        if (compareIds.length >= 3) {
            showToast("You can compare up to 3 routes at once.", "error");
            return;
        }
        compareIds.push(id);
    }
    loadPackages(activePackages);
    updateCompareTray();
}

function updateCompareTray() {
    const tray = document.getElementById("compareTray");
    const names = compareIds.map((id) => packages.find((pkg) => pkg.id === id)?.destination).filter(Boolean);
    tray.classList.toggle("hidden", names.length === 0);
    document.getElementById("compareNames").textContent = names.length ? names.join(" vs ") : "Choose up to 3 routes.";
}

function clearCompare() {
    compareIds = [];
    loadPackages(activePackages);
    updateCompareTray();
}

function openCompareModal() {
    if (!compareIds.length) {
        showToast("Choose at least one route to compare.", "error");
        return;
    }
    const selected = compareIds.map((id) => packages.find((pkg) => pkg.id === id)).filter(Boolean);
    document.getElementById("compareContent").innerHTML = `
        <div class="compare-grid">
            ${selected.map((pkg) => `
                <article class="compare-card">
                    <h3>${pkg.destination}</h3>
                    <p><strong>Route:</strong> ${pkg.route}</p>
                    <p><strong>Duration:</strong> ${pkg.duration}</p>
                    <p><strong>Budget:</strong> ${rupee(pkg.budgetMin)} - ${rupee(pkg.budgetMax)}</p>
                    <p><strong>Best season:</strong> ${pkg.bestSeason}</p>
                    <p><strong>Rating:</strong> ${pkg.rating}</p>
                    <ul>${pkg.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
                    <button class="book-btn" type="button" onclick="openBookingModal(${pkg.id})">Save Plan</button>
                </article>
            `).join("")}
        </div>
    `;
    showModal("compareModal");
}

function copyRouteLink(id) {
    const url = `${location.href.split("#")[0]}#route-${id}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showToast("Route link copied."));
    } else {
        showToast("Route link: " + url);
    }
}

function updateSeasonGuide() {
    const value = document.getElementById("checkin").value;
    const guide = document.getElementById("seasonGuide");
    if (!value) {
        guide.textContent = "Choose a start date to see monsoon, winter, or summer travel tips.";
        return;
    }
    const month = new Date(value).getMonth() + 1;
    if ([6, 7, 8, 9].includes(month)) {
        guide.textContent = "Monsoon pick: Kerala, Coorg, Goa, and Rishikesh are lush, but keep beach and hill-road buffers.";
    } else if ([10, 11, 12, 1, 2].includes(month)) {
        guide.textContent = "Peak India season: Rajasthan, Kutch, Goa, Kaziranga, and Pondicherry are excellent choices.";
    } else {
        guide.textContent = "Warm season: prefer hills, wildlife lodges, early morning heritage walks, and coast stays with shade breaks.";
    }
}

function toggleWishlist(id) {
    if (!currentUser) {
        openAuthModal("login");
        showToast("Login to save packages.", "error");
        return;
    }
    wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
    saveAppState();
    loadPackages(activePackages);
    updateDashboard();
    showToast(wishlist.includes(id) ? "Package saved to wishlist." : "Package removed from wishlist.");
}

function openBookingModal(id) {
    if (!currentUser) {
        openAuthModal("login");
        showToast("Login to save a real trip plan.", "error");
        return;
    }
    const pkg = packages.find((item) => item.id === id);
    const travelers = Number(document.getElementById("passengers").value || 1);
    const startDate = document.getElementById("checkin").value || "Flexible";
    const totalMin = pkg.budgetMin * travelers;
    const totalMax = pkg.budgetMax * travelers;
    const modal = document.getElementById("bookingModal");
    modal.dataset.packageId = String(id);
    modal.dataset.totalMin = String(totalMin);
    modal.dataset.totalMax = String(totalMax);
    modal.dataset.startDate = startDate;
    document.getElementById("bookingName").value = currentUser.name;
    document.getElementById("bookingEmail").value = currentUser.email;
    document.getElementById("bookingSummary").innerHTML = `
        <strong>${pkg.destination}</strong>
        <p>${pkg.route} | ${pkg.duration} | ${travelers} traveler${travelers === 1 ? "" : "s"} | Start: ${startDate}</p>
        <p>Planning budget: <strong>${rupee(totalMin)} - ${rupee(totalMax)}</strong></p>
        <p>Official resource: <a href="${pkg.sourceUrl}" target="_blank" rel="noopener">${pkg.sourceName}</a></p>
        <p>This saves a local plan only. It does not claim a confirmed hotel, ticket, safari, or payment.</p>
    `;
    showModal("bookingModal");
}

function closeBookingModal() {
    hideModal("bookingModal");
}

function completeBooking(event) {
    event.preventDefault();
    const modal = document.getElementById("bookingModal");
    const pkg = packages.find((item) => item.id === Number(modal.dataset.packageId));
    bookings.push({
        id: Date.now(),
        packageId: pkg.id,
        destination: pkg.destination,
        route: pkg.route,
        date: modal.dataset.startDate,
        totalMin: Number(modal.dataset.totalMin),
        totalMax: Number(modal.dataset.totalMax),
        phone: document.getElementById("bookingPhone").value,
        requests: document.getElementById("bookingRequests").value.trim(),
        status: "Saved Plan"
    });
    saveAppState();
    closeBookingModal();
    updateDashboard();
    showToast("Trip plan saved locally. Use the official source link for live booking details.");
    event.target.reset();
}

function updateDashboard() {
    if (!currentUser) return;
    document.getElementById("totalBookings").textContent = bookings.length;
    document.getElementById("wishlistCount").textContent = wishlist.length;
    document.getElementById("tripsPlanned").textContent = itineraries.length;

    const bookingList = document.getElementById("dashboardBookings");
    bookingList.innerHTML = bookings.length ? bookings.map((booking) => {
        const min = booking.totalMin || booking.total || 0;
        const max = booking.totalMax || booking.total || 0;
        const pkg = packages.find((item) => item.id === booking.packageId);
        return `
        <div class="dashboard-booking-item">
            <div>
                <strong>${booking.destination}</strong>
                <p>${booking.route} | ${booking.date} | ${rupee(min)} - ${rupee(max)}</p>
            </div>
            <div class="dashboard-actions">
                <span class="booking-status">${booking.status}</span>
                ${pkg ? `<button class="outline-btn" type="button" onclick="openDetails(${pkg.id})">Details</button>` : ""}
                <button class="outline-btn" type="button" onclick="removeSavedPlan(${booking.id})">Remove</button>
            </div>
        </div>
    `;
    }).join("") : `<p class="no-bookings">No saved trip plans yet.</p>`;

    updateWishlistUI();
    updateItineraryUI();
}

function removeSavedPlan(id) {
    bookings = bookings.filter((booking) => booking.id !== id);
    saveAppState();
    updateDashboard();
    showToast("Saved trip plan removed.");
}

function exportDashboard() {
    if (!currentUser) {
        openAuthModal("login");
        return;
    }
    const lines = [
        `City to Shore export for ${currentUser.name}`,
        `Generated: ${new Date().toLocaleString()}`,
        "",
        "Saved trip plans:",
        bookings.length ? bookings.map((booking, index) => {
            const pkg = packages.find((item) => item.id === booking.packageId);
            const min = booking.totalMin || booking.total || 0;
            const max = booking.totalMax || booking.total || 0;
            return `${index + 1}. ${booking.destination} | ${booking.route} | ${booking.date} | ${rupee(min)} - ${rupee(max)} | Source: ${pkg ? pkg.sourceUrl : "N/A"}`;
        }).join("\n") : "No saved trip plans.",
        "",
        "Itinerary:",
        itineraries.length ? itineraries.map((item, index) => `${index + 1}. ${item.destination}: ${item.activity}`).join("\n") : "No itinerary items.",
        "",
        "Wishlist:",
        wishlist.length ? wishlist.map((id) => packages.find((pkg) => pkg.id === id)?.destination).filter(Boolean).join(", ") : "Wishlist is empty."
    ];
    const text = lines.join("\n");
    const modalHtml = `
        <h2>Exported Travel Desk</h2>
        <p>This is generated from locally saved data in your browser.</p>
        <div class="export-box">${text}</div>
        <div class="card-actions">
            <button class="book-btn" type="button" onclick="copyExportText()">Copy Export</button>
            <button class="outline-btn" type="button" onclick="window.print()">Print</button>
        </div>
    `;
    document.getElementById("detailsContent").innerHTML = modalHtml;
    document.getElementById("detailsModal").dataset.exportText = text;
    showModal("detailsModal");
}

function copyExportText() {
    const text = document.getElementById("detailsModal").dataset.exportText || "";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast("Export copied."));
    } else {
        showToast("Select the export text and copy it.");
    }
}

function switchTab(id) {
    document.querySelectorAll(".tab-btn").forEach((button) => button.classList.toggle("active", button.dataset.tab === id));
    document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.toggle("active", pane.id === id));
}

function createPlan() {
    const destination = document.getElementById("planDestination").value.trim();
    const activity = document.getElementById("planActivity").value.trim();
    if (!destination || !activity) {
        showToast("Add both route and activity.", "error");
        return;
    }
    itineraries.push({ id: Date.now(), destination, activity });
    document.getElementById("planDestination").value = "";
    document.getElementById("planActivity").value = "";
    saveAppState();
    updateDashboard();
    showToast("Itinerary item added.");
}

function updateItineraryUI() {
    const list = document.getElementById("itineraryList");
    list.innerHTML = itineraries.length ? itineraries.map((item, index) => `
        <div class="itinerary-item">
            <strong>Day ${index + 1}: ${item.destination}</strong>
            <p>${item.activity}</p>
            <button type="button" class="reset-btn" onclick="deletePlan(${item.id})">Remove</button>
        </div>
    `).join("") : `<p class="no-bookings">No itinerary items yet.</p>`;
}

function deletePlan(id) {
    itineraries = itineraries.filter((item) => item.id !== id);
    saveAppState();
    updateDashboard();
}

function calculateBudget(showMessage = true) {
    const transport = Number(document.getElementById("budgetTransport").value || 0);
    const stay = Number(document.getElementById("budgetHotel").value || 0);
    const food = Number(document.getElementById("budgetFood").value || 0);
    const activities = Number(document.getElementById("budgetActivities").value || 0);
    const shopping = Number(document.getElementById("budgetShopping").value || 0);
    const buffer = Number(document.getElementById("budgetBuffer").value || 0);
    const subtotal = transport + stay + food + activities + shopping;
    const total = subtotal + subtotal * (buffer / 100);
    document.getElementById("budgetTotal").textContent = `Total: ${rupee(Math.round(total))}`;
    if (showMessage) showToast("Budget calculated in INR.");
}

function updateWishlistUI() {
    const container = document.getElementById("wishlistItems");
    const saved = packages.filter((pkg) => wishlist.includes(pkg.id));
    container.innerHTML = saved.length ? saved.map((pkg) => `
        <div class="wishlist-item">
            <div>
                <strong>${pkg.destination}</strong>
                <p>${pkg.route} | ${rupee(pkg.budgetMin)} - ${rupee(pkg.budgetMax)}</p>
            </div>
            <button class="reset-btn" type="button" onclick="toggleWishlist(${pkg.id})">Remove</button>
        </div>
    `).join("") : `<p class="no-bookings">Wishlist is empty.</p>`;
}

function showFestivalIdea() {
    const month = document.getElementById("festivalMonth").value;
    document.getElementById("festivalResult").textContent = festivalIdeas[month] || "Select a month for a local India travel idea.";
}

function handleContactForm(event) {
    event.preventDefault();
    const enquiry = {
        name: document.getElementById("contactName").value.trim(),
        email: document.getElementById("contactEmail").value.trim(),
        interest: document.getElementById("contactInterest").value,
        message: document.getElementById("contactMessage").value.trim(),
        createdAt: new Date().toISOString()
    };
    const enquiries = JSON.parse(localStorage.getItem("ctsEnquiries") || "[]");
    enquiries.push(enquiry);
    localStorage.setItem("ctsEnquiries", JSON.stringify(enquiries));
    event.target.reset();
    showToast("Enquiry saved. Our travel planner will reach out.");
}

function clearDemoData() {
    bookings = [];
    wishlist = [];
    itineraries = [];
    saveAppState();
    loadPackages(packages);
    updateDashboard();
    showToast("Saved trip plans, wishlist, and itinerary data cleared.");
}

function setupHamburgerMenu() {
    const burger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-menu");
    burger.addEventListener("click", () => menu.classList.toggle("active"));
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => menu.classList.remove("active"));
    });
}

function setMinDates() {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("checkin").setAttribute("min", today);
}

function scrollToSearch() {
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
}

function showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
}

function hideModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
        event.target.setAttribute("aria-hidden", "true");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach((modal) => {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
        });
    }
});
