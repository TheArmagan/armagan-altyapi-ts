const { Underline } = require("./src/Underline");

const ul = new Underline({
  token: "Yooo.. Ne sandın kendini zeki falan mı?",
  prefixes: ["!", "31"],
  owners: ["707309693449535599", "257307300400726019"],
  other: {
    benimBilgim: "bruh"
  }
});

// Bot başlatır.
ul.init();