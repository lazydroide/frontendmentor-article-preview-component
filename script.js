const modal = document.getElementById('modal');
const shareButton = document.getElementById('share-button');


shareButton.addEventListener('click', (e) => { 
    modal.classList.toggle('hidden');
    shareButton.classList.toggle('pressed');
});