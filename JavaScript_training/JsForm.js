document.addEventListener('DOMContentLoaded', function() {
    // Установка максимальной даты рождения (не менее 14 лет)
    const birthdateInput = document.getElementById('birthday');
    const today = new Date();
    const minBirthDate = new Date(today.getFullYear() - 14, today.getMonth(), today.getDate());
    // Валидация формы
    const form = document.getElementsByClassName("registrationForm")[0];
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Показываем сообщение об успехе
            // document.getElementById('success-message').style.display = 'block';
            alert("Форма отправлена")
            // Очищаем форму
            form.reset();
            
            // Скрываем сообщение через 3 секунды
            // setTimeout(() => {
            //     document.getElementById('success-message').style.display = 'none';
            // }, 3000);
        }
    });
    
    // Функция валидации формы
    function validateForm() {
        let isValid = true;
        
        // Валидация ФИО
        const fullname = document.getElementById('fullname').value.trim();
        if (fullname === '' || fullname.length < 5 || fullname.indexOf(' ') === -1) {
            showError('fullname-error', 'Введите полное ФИО (минимум 5 символов)');
            isValid = false;
        } else if (fullname !== fullname.trim()) {
            showError('fullname-error', 'Пробелы в начале или конце не допускаются');
            isValid = false;
        } else {
            hideError('fullname-error');
        }
        
        // Валидация email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        if (!emailRegex.test(email)) {
            showError('email-error', 'Введите корректный email (минимум 2 символа до @, один символ @)');
            isValid = false;
        } else {
            hideError('email-error');
        }
        
        // Валидация пароля
        const password = document.getElementById('password').value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
            showError('password-error', 'Пароль должен содержать минимум 8 символов, включая спецсимвол, заглавную букву и цифру');
            isValid = false;
        } else {
            hideError('password-error');
        }
        
        // Подтверждение пароля
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError('confirmPassword-error', 'Пароли не совпадают');
            isValid = false;
        } else {
            hideError('confirmPassword-error');
        }
        
        // Валидация телефона
        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^\+?[0-9\s\-\(\)]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            showError('phone-error', 'Введите корректный номер телефона');
            isValid = false;
        } else {
            hideError('phone-error');
        }
        
        // Валидация даты рождения
        const birthdate = document.getElementById('birthday').value;
        if (!birthdate) {
            showError('birthday-error', 'Введите дату рождения');
            isValid = false;
        } else {
            const birthDate = new Date(birthdate);
            const ageDiff = today - birthDate;
            const ageDate = new Date(ageDiff);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            
            if (age < 14) {
                showError('birthday-error', 'Вам должно быть не менее 14 лет');
                isValid = false;
            } else {
                hideError('birthday-error');
            }
        }
        
        // Валидация пола
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            showError('gender-error', 'Выберите пол');
            isValid = false;
        } else {
            hideError('gender-error');
        }
        
        // Валидация интересов
        const interestsSelected = document.querySelectorAll('input[name="interests"]:checked');
        if (interestsSelected.length === 0) {
            showError('interests-error', 'Выберите хотя бы один интерес');
            isValid = false;
        } else {
            hideError('interests-error');
        }
        
        // Валидация стажа
        const citySelected = document.querySelectorAll('#experience option:checked');
        if (citySelected.length === 0) {
            showError('experience-error', 'Выберите стаж работы');
            isValid = false;
        } else {
            hideError('experience-error');
        }
        
        // Валидация "О себе" (необязательное поле)
        const about = document.getElementById('about').value.trim();
        if (about && about.length < 10) {
            showError('about-error', 'Минимум 10 символов');
            isValid = false;
        } else {
            hideError('about-error');
        }
        
        return isValid;
    }
    
    // Функции для показа/скрытия ошибок
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function hideError(id) {
        document.getElementById(id).style.display = 'none';
    }
    
    // Валидация в реальном времени
    document.getElementById('fullname').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value === '' || value.length < 5 || value.indexOf(' ') === -1) {
            showError('fullname-error', 'Введите полное ФИО (минимум 5 символов)');
        } else if (value !== value.trim()) {
            showError('fullname-error', 'Пробелы в начале или конце не допускаются');
        } else {
            hideError('fullname-error');
        }
    });
    
    document.getElementById('email').addEventListener('blur', function() {
        const value = this.value.trim();
        const emailRegex = /^[a-zA-Z0-9]{2,}@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        if (!emailRegex.test(value)) {
            showError('email-error', 'Введите корректный email (минимум 2 символа до @, один символ @)');
        } else {
            hideError('email-error');
        }
    });
    
    document.getElementById('password').addEventListener('blur', function() {
        const value = this.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(value)) {
            showError('password-error', 'Пароль должен содержать минимум 8 символов, включая спецсимвол, заглавную букву и цифру');
        } else {
            hideError('password-error');
        }
    });
    
    document.getElementById('confirmPassword').addEventListener('blur', function() {
        const password = document.getElementById('password').value;
        if (this.value !== password) {
            showError('confirmPassword-error', 'Пароли не совпадают');
        } else {
            hideError('confirmPassword-error');
        }
    });
    
    // Подсветка активного поля
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#4CAF50';
            this.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.5)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    });
});