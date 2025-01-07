/*START HOMEPAGE*/
document.querySelector('.arrow-left').addEventListener('click', function() {
    const container = document.querySelector('.contenr');
    container.classList.remove('moving-right');
    container.classList.add('moving-left');
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    const container = document.querySelector('.contenr');
    container.classList.remove('moving-left');
    container.classList.add('moving-right');
});

document.querySelector('.support-button').addEventListener('click', function(event) {
    event.preventDefault();  // منع الانتقال إلى الرابط
    const modal = document.querySelector('#modal');
    modal.style.display = 'block'; // إظهار النافذة
});

document.querySelector('.close-btn').addEventListener('click', function() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none'; // إخفاء النافذة عند الضغط على زر الإغلاق
});

// إغلاق النافذة عند الضغط في أي مكان خارج النافذة
window.addEventListener('click', function(event) {
    const modal = document.querySelector('#modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
 function showModal() {
    document.getElementById("rateModal").style.display = "flex";
}

// وظيفة لإغلاق نافذة التقييم
function closeModal() {
    document.getElementById("rateModal").style.display = "none";
}

// وظيفة لتقديم التقييم
function submitRating() {
    var rating = document.querySelector('input[name="rating"]:checked');
    if (rating) {
        alert("Thank you for rating: " + rating.value + " stars!");
        closeModal(); // إغلاق النافذة بعد التقييم
    } else {
        alert("Please select a rating.");
    }
}
/*END HOMEPAGE*/
/*START PROFILEPAGE*/
