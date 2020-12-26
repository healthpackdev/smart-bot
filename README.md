Smartın Altyapısını Paylaşıyorum.
Tarih **2020.12.25 23.06** 
Projeyi Yükleyip open.jsonu doldurunuz 

### Beni Followlamayı ve Projeyi Starlamayı Unutmayın!

## Kurulum(Belirtilen Yerleri Doldurma)
1. Öncelikle [open.json](https://github.com/healthpackTR/SmartYeni/blob/main/open.json)'daki ayarlardan Bahsedeyim.

Anahtar | Değer
------------ | -------------
**token** | Botunuzun Tokeni
**sahip** | sahip ID Giriniz ```["1. id","2. id"]``` Gibi
**prefix** | İstediğiniz Prefixi Giriniz
**embedFalse** | Tüm Hata Embedlerinin Rengi Kırmızı Yapabilirsiniz ``#e02727`` Gibi
**embedTrue** | Tüm Başarılı İşlem Embedlerinin Rengi Yeşil Yapabilirsiniz ``#33ac33`` Gibi
**bot** | Botunuzun adınızı yazınız
**destek** | destek sunucunuzun ID Giriniz 
**link** | Destek sunucunuzun Sınırsız Davet linki
**mongo** | MongoDB Veritabanı URL niz almak için [Burayı](https://devnot.com/2019/mongodb-atlas-nedir-ve-nasil-olusturulur) Okuyunuz.

## Normal Ayarlar
```json
{
    "token" : "BOTUN TOKENİ SİZİN OLMALI",
    "sahip" : ["667017730259419139","573054368568311808"],
    "prefix" : "s!",
    "embedFalse" : "#e02727",
    "embedTrue" : "#33ac33",
    "bot": "Smart  ",
    "destek" : "769144446154571776",
    "link" : "https://discord.gg/bMC8tGr",
    "mongo" : "mongodb+srv://username:sifre@cluster0.q972g.mongodb.net/dbadi",
}
```

**buraları Yaptıktan Sonra [smart.js](https://github.com/healthpackTR/SmartYeni/blob/main/smart.js)'deki Belirtilen Bazı Yerleri Doldurunuz**
<hr>

## Kurulum(Botu Aktif etme)

Botu 7/24 Aktif Etmek İçin [Heroku](https://heroku.com) Kullanabilirsiniz

Nasıl Aktif Edeceğiniz Size Kalmış 
