# armagan-altyapi-ts
 Armağan'ın kendi discord bot alt yapısı. Şu anlık typescript ile yazılmış türkiyedeki en gelişmiş discord bot alt yapısıdır.

## Gerekenler:
  - Node Versiyon LTS >=v14.16.0 (`https://nodejs.org/en/download/`)
  - Yarn >=v1.22.10 (`npm i -g yarn`)
  - Discord.JS ==v12.5.0

# Kullanım:

 
  Kullanımı anlatan bir video çektim ek olarak bir adet komut ve event de yapıyorum şuradan izleyebilirsiniz: https://www.youtube.com/watch?v=u_YtZH1yp4g
  
  
  - Bu repoyu indirdikten sonra proje konumunda bir konsol açıp `yarn install` yazınız daha sonrasında ise `yarn derle` yazarak projeyi kullanıma hazır bir hale derleyiniz.
  - Artık `./dist` klasöürüne beşka bir yere kopyalayarak işinize devam edebilirsiniz.
  - `./dist` içerisinde `index.js` dosyasından botun ayarlarını yapabilirsiniz.
  - `./dist/src/command/commands` klösürune komutlarınız açabilirsiniz. İç içe bir den çok klasör kullanımı desteği vardır.
  - `./dist/src/event/events` klösürune komutlarınız açabilirsiniz. İç içe bir den çok klasör kullanımı desteği vardır.
  - Klasörlerin içerisinde birer tane örnek olacaktır. Onlar üzerinden ilerleyebilirsiniz.
  - Alt yapıyı başlatırken `node index.js` yaparak başlatabilirsiniz.
  - `index.js` içerisinde `ul.init()`'den önce botunuza başka özellikleride aktifleştirebilisiniz.
  

Lütfen projeyi beğendiyeseniz projeye yıldız bırkamayı lütfen unutmayın benim için çok önemli teşekkürler :)
