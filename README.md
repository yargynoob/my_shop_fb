
### Настройка проекта
1. Клонируем проект со свеми файлами с помощью 
    ```shell
    git clone https://github.com/yargynoob/my_shop_fb.git
   ```
2. Устанавливаем все зависимости
    ```shell
    npm install
   ```
3. Запускаем backend на порту 3001
    ```shell
    npx json-server --watch public/data.json --port 3001
   ```
   Теперь по ссылке `http://localhost:3001/products` доступны данные о товарах.
4. Запускаем frontend
    ```shell
    npm run dev
   ```
