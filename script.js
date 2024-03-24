const items = [
    { category: 'category1', image: 'bajaj.jfif', description: 'Bajaj Pulsar NS200' },
    { category: 'category1', image: 'voge.jfif', description: 'Voge 300 AC' },
    { category: 'category1', image: 'geon.jfif', description: 'Geon Scrambler 300' },
    { category: 'category1', image: 'pulsar.jfif', description: 'Bajaj Pulsar 250' },
    { category: 'category2', image: 'gns.jfif', description: 'Geon GNS 300' },
    { category: 'category2', image: 'loncin.jfif', description: 'Loncin LX300' },
    { category: 'category2', image: 'tekken.jfif', description: 'Exdrive Tekken 250' },
    { category: 'category2', image: 'rottor.jfif', description: 'Rottor F1' }
    
];

const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');

function displayItems(category) {
    gallery.innerHTML = '';
    items.forEach(item => {
        if (category === 'all' || item.category === category) {
            const itemElement = document.createElement('div');
            itemElement.classList.add('gallery-item');
            itemElement.innerHTML = `
                <p>${item.description}</p>
                <img src="${item.image}" alt="${item.description}">
                <button class="item-btn">Інформація</button>
            `;
            gallery.appendChild(itemElement);
        }
    });

   
    const itemButtons = document.querySelectorAll('.item-btn');
    itemButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const category = items.filter(item => item.description === document.querySelectorAll('.gallery-item p')[index].textContent)[0].category;
            let description = '';
            if (category === 'category1') {
                description = 'Гарний дорожній мото';
            } else if (category === 'category2') {
                description = 'Гарний ендуро мото';
            }
            modalDescription.textContent = description;
            modal.style.display = 'block';
        });
    });
    
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentActive = document.querySelector('.filter-btn.active');
        currentActive.classList.remove('active');
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        displayItems(filter);
    });
});


document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});
document.querySelector('#update-modal .close').addEventListener('click', () => {
    const updateModal = document.getElementById('update-modal');
    updateModal.style.display = 'none';
});





window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const updateModal = document.getElementById('update-modal');
        updateModal.style.display = 'block';
    }, 5000);
});


document.getElementById('update-yes').addEventListener('click', function() {
    const updateModal = document.getElementById('update-modal');
    updateModal.style.display = 'none';
});

document.getElementById('update-no').addEventListener('click', function() {
    const updateModal = document.getElementById('update-modal');
    updateModal.style.display = 'none';
});






displayItems('all');