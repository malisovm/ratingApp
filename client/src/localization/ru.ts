import { enMessages } from './en'

export const ruMessages: typeof enMessages = {
  'Shared.loading': 'Загрузка',
  'Shared.error': 'Произошла ошибка',
  'Shared.submit': 'Отправить',
  'Shared.tags': 'Тэги',
  'Shared.logIn': 'Войти',
  'Shared.verdict': 'Оценка',
  'Shared.noneYet': 'Пока нет',
  'Shared.books': 'Книги',
  'Shared.movies': 'Фильмы',
  'Shared.games': 'Игры',
  'Shared.search': 'Поиск',

  'Login.usernameValidationError': 'Имя должно быть от 3 до 30 символов',
  'Login.passwordValidationError': 'Пароль должен быть от 3 до 3 символов',
  'Login.createNewAccount': 'Создать новый аккаунт',

  'Main.newReviews': 'Новые обзоры',
  'Main.highestRated': 'Лучшие обзоры',
  'Main.noReviews': 'Пока нет обзоров',
  'Main.cancelFilter': 'Убрать фильтр',

  'ReviewCard.readReview': 'Читать обзор',

  'Review.reviewOf': 'Обзор на',
  'Review.yourRate': 'Ваш рейтинг',
  'Review.avgRate': 'Ср. рейтинг',

  'MyReviews.title': 'Заголовок',
  'MyReviews.product': 'Произведение',
  'MyReviews.group': 'Категория',
  'MyReviews.avgRating': 'Ср. рейт.',
  'MyReviews.actions': 'Действия',
  'MyReviews.addNewReview': 'Добавить обзор',
  'MyReviews.yourReviews': 'Ваши обзоры',
  'MyReviews.usernameReviews': 'Обзоры {username}',

  'ReviewEditor.createNewReview': 'Создать обзор',
  'ReviewEditor.editReview': 'Отредактировать обзор',
  'ReviewEditor.defaultReviewText': '**Введите текст обзора** (*Поддерживается синтаксис Markdown*)',
  'ReviewEditor.seePreview': 'Предпросмотр',
  'ReviewEditor.pic': 'Иллюстрация',
  'ReviewEditor.tagsPlaceholder': 'Впишите тэг и нажмите кнопку ввода',
  'ReviewEditor.textInputs.title': 'Заголовок',
  'ReviewEditor.textInputs.titlePlaceholder': 'Введите заголовок',
  'ReviewEditor.textInputs.product': 'Произведение',
  'ReviewEditor.textInputs.productPlaceholder': 'Введите название произведения',
  'ReviewEditor.text': 'Текст',
  'ReviewEditor.selectInputs.group': 'Категория',
  'ReviewEditor.selectInputs.groupPlaceholder': 'Выберите категорию',
  'ReviewEditor.selectInputs.groupValidationError': 'Нужно выбрать категорию',
  'ReviewEditor.selectInputs.verdict': 'Оценка',
  'ReviewEditor.selectInputs.verdictPlaceholder': 'Выберите оценку',
  'ReviewEditor.selectInputs.verdictValidationError': 'Нужно выбрать оценку',
  'ReviewEditor.textValidationError': 'Текст обзора должен быть 10-2000 символов',

  'Userlist.name': 'Имя',
  'Userlist.role': 'Роль',
  'Userlist.likes': 'Лайки',
  'Userlist.adminAccessTitle': 'Админка (пользователи)',

  'Comments.header': 'Комментарии',
  'Comments.addComment': 'Добавить',
  'Comments.validationError': 'Длина комментария: 3-100 символов',
  'Comments.placeholder': 'Введите комментарий',

  'NavbarButtons.userlist': 'Админка',
  'NavbarButtons.logOut': 'Выйти',

  'PicUpload.putImageHere': `Перетащите файл изображения сюда`,
  'PicUpload.removePic': 'Удалить иллюстрацию',
}