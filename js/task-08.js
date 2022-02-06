const form = document.querySelector('.login-form');

form.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(event) {
    event.preventDefault(); //Отключаем перезагрузку страницы при submit'e

    // Получаем ссылки на нужные элементы формы
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    // Проверяем заполненность полей, если юзер балбес, скажем ему об этом
    if (mail === '' || password === '') {
        alert('Заполни все поля, дубина!');
        form.reset();
        return;
    }

    // Объявляем объект и собираем в него данные через
    // класс.метод FormData.forEach которые потом сольём в DarkNet
    // там ребята разберутся =)
    const authorizationFormData = {
        //БОНУС! Что б люди не ломали голову куда вводить пароль ;)
        site: location.href,
    };
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        authorizationFormData[name] = value;
    });
    console.log(authorizationFormData);

    // Очищаем форму
    form.reset();
}
