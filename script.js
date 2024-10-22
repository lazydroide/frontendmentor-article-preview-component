const modal = document.getElementById('modal');
const shareButton = document.getElementById('share-button');
const icon = document.getElementById('share-icon');
console.log(icon);

shareButton.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    shareButton.classList.toggle('pressed');
});