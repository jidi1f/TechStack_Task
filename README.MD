
База Данных: PostgreSQL;
BackEnd: NodeJS and Express;
FrontEnd: React with mobx;

Инструкция по запуску:

Для запуска сервера на express и для его авто обновления я использовал nodemon (скрипт npm run serve)
Для авто обновления браузера использовал webpack-dev-server (скрипт npm run dev).
Разделив терминал на две;
Описание данных БД лежит по пути: dataBase/database.sql
ЕЕ параметры можно посмотреть в dataBase/db.js
Все роуты к БД лежат по пути dataBase/index.js
Запросы делались через mobx хранилище по пути store/cart.js
В App использовался компонент Router по дефолту направляет на страницу pages/cart/index.js в которой лежат дочерние компоненты;