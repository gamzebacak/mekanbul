var express = require('express');
var router = express.Router();


const anaSayfa = function (req, res, next) {
    res.render('anasayfa', 
    { "baslik" : "Ana Sayfa",
    "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki mekanları keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Barida Kafe",
            "adres":"SDÜ Batı Kampüsü",
            "puan":"4",
            "mesafe":"2km",
            "imkanlar":["Kahve","Çay","Pasta"]
        },
        {
            "ad":"Gloria",
            "adres":"SDÜ Doğu Kampüsü",
            "puan":"3",
            "mesafe":"5km",
            "imkanlar":["Kahve","Çay","Pasta"]
        }
    ]

    });
}
const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',
     { title: 'Mekan Bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "adres":"Centrum Garden",
        "puan":"4",
        "saatler":[
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"9:00",
                "kapanis":"23:00",
                "kapali":false
            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"10:00",
                "kapanis":"24:00",
                "kapali":false
            }
        ],
        "imkanlar":["Kahve","Çay","Kek"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Sinan",
                "puan":"4",
                "tarih":"20 Ekim 2022",
                "yorumMetni":"Çok beğendim."
            },
            {
                "yorumYapan":"Gamze",
                "puan":"1",
                "tarih":"20 Ekim 2022",
                "yorumMetni":"Bidaha asla gelmem."
            }
        ]
        
    }
});
}
const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle

}