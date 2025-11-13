// Sample contacts data with notes
const sampleContacts = [
  {
    id: 1,
    name: "Nion",
    relationship: "Cousin",
    photo: "",
    phone: "+8801719474104",
    location: "Mirpur 6, Dhaka, Bangladesh",
    category: "Cousins",
    note: "Close cousin. Lives in Mirpur 6, Dhaka."
  },
  {
    id: 2,
    name: "Tawfek",
    relationship: "Friend",
    photo: "",
    phone: "+8801903430456",
    location: "Daffodil International University, Dhaka",
    category: "Friends",
    note: "University friend. Always helpful and fun to talk with."
  },
  {
    id: 3,
    name: "Rashedul Alam",
    relationship: "Teacher",
    photo: "",
    phone: "+8801771087871",
    location: "Dhaka, Bangladesh",
    category: "Teachers",
    note: "University teacher. Teaches web development and guides students."
  },
  {
    id: 4,
    name: "Joysna Bangum",
    relationship: "Mother",
    photo: "",
    phone: "01762969657",
    location: "Setabganj, Dinajpur, Bangladesh",
    category: "Family",
    note: "My beloved mother — caring, wise, and the heart of the family."
  },
  {
    id: 5,
    name: "Nargis",
    relationship: "Fupi (Aunt)",
    photo: "",
    phone: "018611660036",
    location: "Kholahati, Parbatipur, Bangladesh",
    category: "Family",
    note: "Kind and loving aunt. Always supportive in family matters."
  },
  {
    id: 6,
    name: "Rezwana Jebin Rafci",
    relationship: "Sister",
    photo: "",
    phone: "01766465245",
    location: "Manikganj, Dhaka, Bangladesh",
    category: "Family",
    note: "Younger sister. Energetic and caring personality."
  },
  {
    id: 7,
    name: "Motiur Dulavai",
    relationship: "Brother-in-law",
    photo: "",
    phone: "01704229362",
    location: "Manikganj, Dhaka, Bangladesh",
    category: "Family",
    note: "Helpful and responsible family member."
  },
  {
    id: 8,
    name: "Anowar Vai",
    relationship: "District Incharge",
    photo: "",
    phone: "+8801717527278",
    location: "Kurigram, Bangladesh",
    category: "Family",
    note: "Respected elder brother figure. Works as District Incharge."
  },
  {
    id: 9,
    name: "Motiar Vai",
    relationship: "Sub Inspector (DB)",
    photo: "",
    phone: "+8801738531515",
    location: "Rangpur, Bangladesh",
    category: "Family",
    note: "Police officer in DB unit. Reliable and disciplined."
  },
  {
    id: 10,
    name: "Asif Vai",
    relationship: "Doctor",
    photo: "",
    phone: "+8801976067788",
    location: "Setabganj, Dinajpur, Bangladesh",
    category: "Family",
    note: "Family doctor. Always available for medical advice."
  },
  {
    id: 11,
    name: "Razwanul Karim",
    relationship: "Father",
    photo: "",
    phone: "+8801745325880",
    location: "Setabganj, Dinajpur, Bangladesh",
    category: "Family",
    note: "My father — guiding force and inspiration behind my journey."
  }
];
















// DOM Elements
const passwordScreen = document.getElementById('passwordScreen');
const mainApp = document.getElementById('mainApp');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const passwordError = document.getElementById('passwordError');
const logoutBtn = document.getElementById('logoutBtn');
const searchInput = document.getElementById('searchInput');
const categoryList = document.getElementById('categoryList');
const sectionTitle = document.getElementById('sectionTitle');
const contactsGrid = document.getElementById('contactsGrid');
const copyNotification = document.getElementById('copyNotification');

// App State
let currentCategory = 'All';
let contacts = [];
let categories = ['All', 'Family', 'Friends', 'Teachers', 'Cousins', 'CEO', 'Office', 'Police', 'Fair Service', 'Dhaka Restaurants'];

// Initialize the app
function initApp() {
    console.log('Initializing app...'); // Debug log
    
    // Check if authenticated
    if (sessionStorage.getItem('authenticated') === 'true') {
        console.log('User authenticated, showing main app');
        showMainApp();
    } else {
        console.log('User not authenticated, showing password screen');
        showPasswordScreen();
    }

    // Load contacts from localStorage or use sample data
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        contacts = JSON.parse(storedContacts);
    } else {
        contacts = sampleContacts;
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // Set up event listeners
    submitPassword.addEventListener('click', handlePasswordSubmit);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handlePasswordSubmit();
        }
    });
    logoutBtn.addEventListener('click', handleLogout);
    searchInput.addEventListener('input', handleSearch);

    // Render categories and contacts
    renderCategories();
    renderContacts();
}

// Password handling
function handlePasswordSubmit() {
    const password = passwordInput.value;
    console.log('Password submitted:', password); // Debug log
    // Simple client-side password check
    if (password === 'hello junayed') {
        sessionStorage.setItem('authenticated', 'true');
        showMainApp();
    } else {
        passwordError.style.display = 'block';
        passwordInput.value = '';
    }
}

function handleLogout() {
    sessionStorage.removeItem('authenticated');
    showPasswordScreen();
}

// Screen management
function showPasswordScreen() {
    console.log('Showing password screen');
    passwordScreen.style.display = 'flex';
    mainApp.style.display = 'none';
    passwordInput.value = '';
    passwordError.style.display = 'none';
}

function showMainApp() {
    console.log('Showing main app');
    passwordScreen.style.display = 'none';
    mainApp.style.display = 'block';
}

// Render categories
function renderCategories() {
    categoryList.innerHTML = '';
    
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.className = `category-item ${category === currentCategory ? 'active' : ''}`;
        categoryItem.textContent = category;
        categoryItem.addEventListener('click', () => {
            currentCategory = category;
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            categoryItem.classList.add('active');
            renderContacts();
        });
        categoryList.appendChild(categoryItem);
    });
}

// Copy phone number to clipboard
function copyPhoneNumber(phoneNumber) {
    navigator.clipboard.writeText(phoneNumber).then(() => {
        // Show copy notification
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy phone number: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show copy notification
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 2000);
    });
}

// Render contacts based on current category and search
function renderContacts() {
    let filteredContacts = contacts;
    
    // Filter by category
    if (currentCategory !== 'All') {
        filteredContacts = filteredContacts.filter(contact => contact.category === currentCategory);
    }
    
    // Filter by search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredContacts = filteredContacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm) ||
            contact.relationship.toLowerCase().includes(searchTerm) ||
            contact.phone.includes(searchTerm) ||
            contact.location.toLowerCase().includes(searchTerm) ||
            (contact.note && contact.note.toLowerCase().includes(searchTerm))
        );
    }
    
    // Update section title
    sectionTitle.textContent = currentCategory === 'All' ? 'All Contacts' : currentCategory;
    if (searchTerm) {
        sectionTitle.textContent += ` (${filteredContacts.length} found)`;
    }
    
    // Render contacts
    contactsGrid.innerHTML = '';
    
    if (filteredContacts.length === 0) {
        contactsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users"></i>
                <h3>No contacts found</h3>
                <p>Try changing your search or category filter</p>
            </div>
        `;
        return;
    }
    
    filteredContacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        
        const noteHTML = contact.note ? `
            <div class="contact-note">
                <i class="fas fa-sticky-note"></i>
                <span>${contact.note}</span>
            </div>
        ` : '';
        
        contactCard.innerHTML = `
            <img src="${contact.photo}" alt="${contact.name}" class="contact-photo">
            <div class="contact-info">
                <h3 class="contact-name">${contact.name}</h3>
                <p class="contact-relationship">${contact.relationship}</p>
                <div class="contact-detail">
                    <i class="fas fa-phone"></i>
                    <div class="phone-number" onclick="copyPhoneNumber('${contact.phone}')">
                        <span>${contact.phone}</span>
                        <i class="fas fa-copy copy-icon" title="Copy phone number"></i>
                    </div>
                </div>
                <div class="contact-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${contact.location}</span>
                </div>
                ${noteHTML}
            </div>
        `;
        contactsGrid.appendChild(contactCard);
    });
}

// Search handler
function handleSearch() {
    renderContacts();
}

// Make copyPhoneNumber function globally available
window.copyPhoneNumber = copyPhoneNumber;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
