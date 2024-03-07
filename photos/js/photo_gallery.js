document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let images = document.querySelectorAll('.gallery-img');
    let currentIndex = 0;

    const adjustImageDisplay = (img) => {
        img.style.maxWidth = '';
        img.style.maxHeight = '';
        if (img.naturalWidth > img.naturalHeight) {
            img.style.maxWidth = '80vw';
        } else {
            img.style.maxHeight = '80vh';
        }
    };

    images.forEach((img, index) => {
        img.onclick = function(){
            modal.style.display = "flex"; // Ensure this matches the display type set in your CSS for .modal
            modalImg.src = this.src;
            modalImg.onload = () => adjustImageDisplay(modalImg);
            currentIndex = index;
        }
    });

    document.getElementById("close").onclick = function() {
        modal.style.display = "none";
    }

    document.getElementById("left-arrow").onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        modalImg.onload = () => adjustImageDisplay(modalImg);
    }

    document.getElementById("right-arrow").onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        modalImg.onload = () => adjustImageDisplay(modalImg);
    }

    document.onkeydown = function(e) {
        if (modal.style.display === "flex") { // Ensure this matches the condition
            if (e.key === 'Escape') {
                modal.style.display = "none";
            } else if (e.key === 'ArrowRight') {
                document.getElementById("right-arrow").click();
            } else if (e.key === 'ArrowLeft') {
                document.getElementById("left-arrow").click();
            }
        }
    };

    // Click on blank area to exit slides view
    modal.onclick = function(event) {
        if (event.target === modal) { // Check if the clicked target is the modal itself, not a child
            modal.style.display = "none";
        }
    };
});
