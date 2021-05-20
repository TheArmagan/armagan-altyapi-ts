const cp = require("child_process");
const util = require("util");
const asyncExec = util.promisify(cp.exec);
const { resolve } = require("path");
const { ncp } = require("ncp");
const { existsSync, promises: { rmdir } } = require("fs");
const asyncNcp = util.promisify(ncp);

(async () => {
  if (existsSync("./dist")) {
    console.log("BILGI: ./dist kaldırılıyor..");
    await rmdir("./dist", { retryDelay: 10, maxRetries: 24, recursive: true });
  };
  console.log("BILGI: Derleniyor..");
  await asyncExec("tsc", { cwd: resolve(__dirname) });
  console.log("BILGI: Gerekli dosyalar kopyalanıyor..");
  await copyTo("./dist-parts/benioku.txt", "./dist/benioku.txt");
  await copyTo("./dist-parts/index.js", "./dist/index.js");
  await copyTo("./dist-parts/.gitignore", "./dist/.gitignore");
  await copyTo("./dist-parts/commands", "./dist/src/command/commands");
  await copyTo("./dist-parts/events", "./dist/src/event/events");
  await copyTo("./dist-parts/package.json", "./dist/package.json");
  await copyTo("./LICENSE", "./dist/LICENSE");
  console.log("BILGI: Altyapının çalışması için gerekli modüller indiriliyor. (Bu işlem biraz sürebilir.)");
  await asyncExec(`cmd /c "yarn install"`, { cwd: resolve(__dirname, "dist") });
  console.log("BILGI: İşlem tamamlandı, alt yapınız ./dist/ konumunda sizi bekliyor!");
  console.log("BILGI: ./dist klasörünü başka bir yere kopyalayıp işlemlerinize o klasörde devam edebilirsiniz.");
})();


async function copyTo(from, to) {
  await asyncNcp(from, to, {});
  console.log("KOPYALANDI:", from, "->", to);
}

