const app = require("./app");

// PORT будет такой же как в env, или 6969
const PORT = process.env.PORT || 6969;

// Запускаем приложение из app.js на выбранном порту
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});