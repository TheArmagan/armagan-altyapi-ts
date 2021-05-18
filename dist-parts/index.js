// Underline - Made by Kıraç Armağan Önal
const { Underline } = require("./src/Underline");

const ul = new Underline({
  token: "Yooo.. Ne sandın kendini zeki falan mı?",
  prefixes: ["!"],
  owners: ["707309693449535599"],
  other: {
    // Örneğin database bağlantısını koyabilirsiniz data sonra ul.options.other.database ile ulaşırsınız.
    database: null
  }
});

// Bot başlatır.
ul.init();