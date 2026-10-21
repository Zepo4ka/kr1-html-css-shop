# Практическая работа №7 — БЭМ

ShopProject — многостраничный учебный HTML/CSS-сайт интернет-магазина.

[Опубликованный сайт](https://zepo4ka.github.io/kr1-html-css-shop/practice-7/)

[Файлы на GitHub](https://github.com/Zepo4ka/kr1-html-css-shop/tree/main/practice-7)

## Что изменено

На основе шестой работы выполнен рефакторинг CSS-классов по БЭМ. Содержимое, пути, поля формы, Flex/Grid и JavaScript-сценарий сохранены. Шестая работа находится отдельно в `practice-6/`.

## Аудит классов

| До рефакторинга | После рефакторинга |
| --- | --- |
| `site-logo` | `site-header__logo` |
| `.site-nav__list a` | `.site-nav__link` |
| `.product-card__media img` | `.product-card__image` |
| `form-field` | `order-form__field` |
| `.form-field input` | `.order-form__input` |
| `form-actions` | `order-form__actions` |
| `.order-dialog h2` | `.order-dialog__title` |
| `.breadcrumbs span` | `.breadcrumbs__current` |

## БЭМ-структура проекта

Основные блоки: `site-header`, `site-nav`, `breadcrumbs`, `hero`, `section`, `products-grid`, `product-card`, `catalog-layout`, `catalog-filters`, `catalog-products`, `filters-form`, `comparison-table`, `order-dialog`, `order-form`, `button`, `site-footer`.

Элементы: `site-header__inner`, `site-nav__item`, `product-card__title`, `order-form__label`, `order-form__input`, `order-dialog__title`, `breadcrumbs__current`.

Модификаторы: `button--primary`, `button--secondary`, `site-nav__link--active`, `product-card--featured`, `order-form__field--checkbox`. Модификаторы применяются вместе с базовым классом.

В CSS не используются ID-селекторы и inline-стили. ID оставлены для якорей, связей label/поле и JavaScript. Ошибки формы обозначаются через `aria-invalid`.

## Структура файлов

- `index.html` — главная, карточки, таблица сравнения и модальное окно;
- `catalog.html` — каталог и статическая форма фильтров;
- `contacts.html` — контакты;
- `css/style.css` — общие стили с БЭМ-классами;
- `js/main.js` — открытие/закрытие окна и проверка формы;
- `../images/` — общие изображения товаров;
- `README.md` — описание работы.

## Проверка

1. Откройте `index.html` в браузере или опубликованный сайт.
2. Проверьте меню, активный пункт, переходы между страницами, якоря и хлебные крошки.
3. На главной нажмите «Заказать» и проверьте название товара в окне.
4. Попробуйте отправить пустую форму; затем заполните имя, e-mail, телефон, тему и поставьте галочку согласия.
5. Проверьте закрытие окна, сообщение об успехе и сброс полей.
6. Клавишей Tab проверьте видимый фокус; в DevTools посмотрите классы и прямые CSS-селекторы.

Отправка на сервер не подключена. Контакты и товары учебные, фильтры служат примером разметки и раскладки.

Автор: Гаврилов Даниил Владимирович. Группа: ЭФБО-05-25.
