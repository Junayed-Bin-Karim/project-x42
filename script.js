// Sample contacts data with notes
const sampleContacts = [
  {
    id: 1,
    name: "Nion",
    relationship: "Cousin",
    photo: "nion.jpeg",
    phone: "+880 1521-559674",
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
    phone: "01711379094",
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
  },
  {
    id: 12,
    name: "Mojibor Mama",
    relationship: "Uncle",
    photo: "",
    phone: "01721009844",
    location: "Labur Mor, Dinajpur, Bangladesh",
    category: "Family",
    note: "Close uncle. Always supportive and guiding."
  },
  {
    id: 13,
    name: "Asfak",
    relationship: "Brother",
    photo: "",
    phone: "+8801625496989",
    location: "Shamoli, Dhaka, Bangladesh",
    category: "Cousins",
    note: "Cousin and brother figure. Easygoing and helpful."
  },
  {
    id: 14,
    name: "Akash",
    relationship: "Friend",
    photo: "",
    phone: "+8801826093367",
    location: "Dhanmondi, Dhaka, Bangladesh",
    category: "Friends",
    note: "Good friend from school/college. Fun and trustworthy."
  },
  {
    id: 15,
    name: "Sahariar Nafis Ovi",
    relationship: "DIU Friend",
    photo: "",
    phone: "+8801787125363",
    location: "Savar, Dhaka, Bangladesh",
    category: "Friends",
    note: "DIU friend. Very helpful and a great listener."
  },
  {
    id: 16,
    name: "Alif Nur",
    relationship: "DIU Friend",
    photo: "",
    phone: "+8801706035232",
    location: "Mirpur, Dhaka, Bangladesh",
    category: "Friends",
    note: "DIU friend. Enjoys working on projects together."
  },
  {
    id: 17,
    name: "Babu Uncal",
    relationship: "Uncle",
    photo: "",
    phone: "+8801911250862",
    location: "Badda, Dhaka, Bangladesh",
    category: "Family",
    note: "Uncle living in Dhaka. Very supportive and caring."
  },
  {
    id: 18,
    name: "Nanju Chaci",
    relationship: "Aunt",
    photo: "",
    phone: "+8801912939277",
    location: "Dinajpur, Bangladesh",
    category: "Family",
    note: "Beloved aunt. Always helpful in family matters."
  },
  {
    id: 19,
    name: "Babu2 Uncal",
    relationship: "Uncle",
    photo: "",
    phone: "+8801938804298",
    location: "Badda, Dhaka, Bangladesh",
    category: "Family",
    note: "Another uncle in Dhaka. Very reliable and kind."
  },
  {
    id: 20,
    name: "Asik Vai",
    relationship: "Brother",
    photo: "",
    phone: "+8801833307126",
    location: "Kushtia, Bangladesh",
    category: "Cousins",
    note: "Cousin and elder brother figure. Friendly and supportive."
  },
  {
  id: 21,
  name: "Dr. Razwanul",
  relationship: "Doctor",
  photo: "",
  phone: "+8801720436336",
  location: "Popular Diagnostic Centre,Dinajpur, Bangladesh",
  category: "Doctors",
  note: "He diagnosed my hyperthyroid. Trusted specialist."
},
  {
  id: 22,
  name: "Savar Model Police Station",
  relationship: "Traffic Police Station",
  photo: "",
  phone: "01713-373327",
  location: "Savar, Dhaka, Bangladesh",
  category: "Police",
  note: "Traffic police station in Savar. Contact for traffic-related issues."
},
  {
  id: 23,
  name: "Hazrat Shahjalal International Airport Police Station",
  relationship: "Airport Police Station",
  photo: "",
  phone: "01320-041880",
  location: "Dhaka, Bangladesh",
  category: "Police",
  note: "Airport police station. Contact for security or emergency at the airport."
},
  
{
  id: 24,
  name: "Dinajpur Police Station",
  relationship: "Police Station",
  photo: "",
  phone: "0531-63132",
  location: "JJPQ+CGR, Kalitola - Charubabaur Mor Rd, Dinajpur 5200, Bangladesh",
  category: "Police",
  note: "Local police station in Dinajpur. Contact for general law enforcement or emergencies."
},
  {
  id: 25,
  name: "Bochaganj Police Station",
  relationship: "Police Station",
  photo: "",
  phone: "01713-373968",
  location: "RF35+F3H, Bochaganj, Dinajpur, Bangladesh",
  category: "Police",
  note: "State police in Bochaganj Upazila. Contact for local law enforcement or emergencies."
},
  {
  id: 26,
  name: "Mirpur Police Station",
  relationship: "Police Station",
  photo: "",
  phone: "01332-483518",
  location: "Mirpur, Dhaka, Bangladesh",
  category: "Police",
  note: "Local police station in Mirpur. Contact for law enforcement or emergencies."
},
{
  id: 27,
  name: "Kotwali Police Station - Officer in Charge",
  relationship: "Police Station",
  photo: "",
  phone: "01320136391",
  location: "Kotwali, Dinajpur, Bangladesh",
  category: "Police",
  note: "Officer in charge at Kotwali Police Station."
},
{
  id: 28,
  name: "Kotwali Police Station - Duty Officer",
  relationship: "Police Station",
  photo: "",
  phone: "01320136396",
  location: "Kotwali, Dinajpur, Bangladesh",
  category: "Police",
  note: "Duty officer at Kotwali Police Station."
},
{
  id: 29,
  name: "Birol Police Station - Officer in Charge",
  relationship: "Police Station",
  photo: "",
  phone: "01320136443",
  location: "Birol, Dinajpur, Bangladesh",
  category: "Police",
  note: "Officer in charge at Birol Police Station."
},
  {
  id: 30,
  name: "Operation Control Room",
  relationship: "Police Control",
  photo: "",
  phone: "+8801320001299 / +8801320001300 / +880-2-223381967 / +880-2-223383515",
  location: "Dhaka, Bangladesh",
  category: "Police",
  note: "Central police operation control room. Email: oic_opscr@police.gov.bd. Fax: +880-2-9563362, +880-2-9563358, +880-2-7126305, +880-2-9562330, +880-2-55102505."
},
  
  {
  id: 31,
  name: "Dinajpur Fire Service",
  relationship: "Fire Service",
  photo: "",
  phone: "০190102325106",
  location: "Dinajpur, Bangladesh",
  category: "Fair Service",
  note: "Local fire service in Dinajpur. Contact for emergencies."
},
{
  id: 32,
  name: "Setabganj Fire Service",
  relationship: "Fire Service",
  photo: "",
  phone: "০1901023263",
  location: "Setabganj, Dinajpur, Bangladesh",
  category: "Fair Service",
  note: "Local fire service in Setabganj. Contact for emergencies."
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
let categories = ['All', 'Family', 'Friends', 'Teachers', 'Cousins', 'CEO', 'Office', 'Police', 'Fair Service', 'Doctors'];

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
    if (password === '1234') {
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
