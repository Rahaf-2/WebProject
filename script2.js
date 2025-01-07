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
// إظهار نموذج التعديل عند الضغط على "Edit Profile"
document.querySelector('.Edit-button').addEventListener('click', function() {
    const editForm = document.querySelector('.Edit-profile');
    editForm.style.display = 'block'; // إظهار النموذج
});



document.addEventListener('DOMContentLoaded', () => {
    const changePicBtn = document.getElementById('change-pic-btn');
    const uploadImageInput = document.getElementById('upload-image');
    const profilePic = document.getElementById('profile-pic');
    const statusMsg = document.getElementById('status-msg');
    
    // عند الضغط على زر تغيير الصورة
    changePicBtn.addEventListener('click', () => {
        uploadImageInput.click(); // فتح نافذة اختيار الصورة
    });

    // عندما يختار المستخدم صورة جديدة
    uploadImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePic.src = reader.result; // تحديث الصورة المعروضة
                statusMsg.style.display = 'block'; // عرض رسالة التأكيد
                setTimeout(() => {
                    statusMsg.style.display = 'none'; // إخفاء الرسالة بعد 3 ثواني
                }, 3000);
            };
            reader.readAsDataURL(file);
        }
    });

});
// التعامل مع التعديل وحفظ البيانات
document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    // جلب البيانات المدخلة
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    const newDob = document.getElementById('dob').value;

    // تحديث معلومات المستخدم في الصفحة
    document.getElementById('username').textContent = newName;
    document.getElementById('useremail').textContent = newEmail;
    document.getElementById('userdob').textContent = newDob;

    // إخفاء نموذج التعديل بعد الحفظ
    const editForm = document.querySelector('.Edit-profile');
    editForm.style.display = 'none';
});

// الحصول على العناصر
const closeBtn = document.querySelector('.close-btn');
const saveBtn = document.querySelector('.button-style ');
const modal1 = document.getElementById('Edit-profile');

// إغلاق النافذة عند الضغط على زر "×"
closeBtn.addEventListener('click', () => {
    modal1.style.display = 'none'; // إخفاء النافذة
});

// إغلاق النافذة عند الضغط على زر "Save"
saveBtn.addEventListener('click', () => {
    modal1.style.display = 'none'; // إخفاء النافذة
});
window.addEventListener('click', (event) => {
    // إذا تم النقر خارج النافذة، أغلقها
    if (event.target === modal) {
        modal1.style.display = 'none';
    }
});


