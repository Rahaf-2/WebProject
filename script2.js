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
// تحديد العناصر
const closeBtn = document.querySelector('.close-btn');
const editForm = document.querySelector('#edit-profile-form');
const modal1 = document.getElementById('Edit-profile');

// عناصر عرض المعلومات
const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userDob = document.getElementById('userdob');

// تحميل البيانات من LocalStorage عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    const storedDob = localStorage.getItem('userDob');

    // إذا كانت البيانات موجودة في LocalStorage، عرضها
    if (storedName) {
        userName.textContent = storedName;
    }
    if (storedEmail) {
        userEmail.textContent = storedEmail;
    }
    if (storedDob) {
        userDob.textContent = storedDob;
    }
});

// عند فتح نافذة التعديل، تعبئة الحقول بالقيم الحالية
function openEditProfile() {
    document.getElementById('name').value = userName.textContent;
    document.getElementById('email').value = userEmail.textContent;
    document.getElementById('dob').value = userDob.textContent;
    modal1.style.display = 'block'; // عرض النافذة
}

// إغلاق النافذة عند الضغط على "×"
closeBtn.addEventListener('click', () => {
    modal1.style.display = 'none'; // إخفاء النافذة
});


// حفظ التعديلات عند إرسال النموذج
editForm.addEventListener('submit', function (event) {
    event.preventDefault(); // منع إرسال النموذج

    // جلب القيم المدخلة
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    const newDob = document.getElementById('dob').value;

    // تحديث القيم في الصفحة
    userName.textContent = newName;
    userEmail.textContent = newEmail;
    userDob.textContent = newDob;

    // حفظ القيم في LocalStorage
    localStorage.setItem('userName', newName);
    localStorage.setItem('userEmail', newEmail);
    localStorage.setItem('userDob', newDob);

    // إخفاء نافذة التعديل
    modal1.style.display = 'none';
});

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});
