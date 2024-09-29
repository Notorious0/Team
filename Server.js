const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3004;
const HOST = '0.0.0.0'; 

app.use(cors());

app.get('/news', (req, res) => {
    res.json({
        "score": [
            {
                "idMatch": 1,
                "home": "Fenerbahçe",
                "away": "Anadolu Efes",
                "score":" 80 - 72 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "arena": "Ülker Sport Arena"
            },
            {
                "idMatch": 2,
                "home": "Fenerbahçe",
                "away": "Anadolu Efes",
                "score":" 81 - 82 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "arena": "Ülker Sport Arena"
            },
            {
                "idMatch": 3,
                "home": "Anadolu Efes",
                "away": "Fenerbahçe",
                "score":" 70 - 101 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "arena": "Sinan Erdem"
            },
            {
                "idMatch": 4,
                "home": "Anadolu Efes",
                "away": "Fenerbahçe",
                "score":" 74 - 85 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "arena": "Sinan Erdem"
            }
    
        ],
        "news": [
            {
                "id": 1,
                "header": "Wade Baldwin IV Fenerbahçe Beko'da",
                "image": "https://media.fenerbahce.org/getmedia/827ad135-48bc-44fd-abd7-53025d745d1a/baldwiin.jpg?width=1200&height=675&ext=.jpg",
                "haber": "Fenerbahçe Beko Erkek Basketbol Takımımız, son olarak Maccabi Tel Aviv forması giyen ve son iki sezonda da EuroLeague’nin en iyi ikinci beşinde kendisine yer bulan guard Wade Baldwin IV (1996, 1.93) ile 2+1 yıllık anlaşmaya vardı. Wade Baldwin IV kimdir?\n\n29 Mart 1996 tarihinde New Jersey’de dünyaya gelen 1.93 boyundaki oyuncu, her iki guard pozisyonunda forma giyebiliyor. Wade Baldwin IV, 2022-23 ve 2023-24 sezonlarında kendisine EuroLeague’nin en iyi ikinci beşinde yer buldu.\n\nBaldwin, EuroLeague kariyerinde 157 maça çıktı ve bunların 135’inde ilk beşte yer aldı. Başarılı guard, bu müsabakalarda 14.4 sayı, 4.2 asist, 3.0 ribaund, 0.9 top çalma ve 14.4 verimlilik puanı ortalamaları tutturdu.\n\nBirleşik Amerikalı guard, EuroLeague’de sayı rekorunu 9 Şubat 2023 tarihinde oynanan Kızılyıldız maçında kırdı ve bu müsabakada 36 sayı üretti. Baldwin, verimlilik puanı rekorunu ise 19 Mart 2024 tarihinde oynanan ASVEL maçında 46 verimlilik puanına ulaşarak kırmıştı. Baldwin, Baskonia forması giydiği dönemde 8 Mart 2022 tarihinde oynanan Anadolu Efes müsabakasında 11 asiste ulaşmış ve bu alandaki en yüksek değerine erişmişti.\n\nAgresif oyunu ve atletizmi ile her iki guard pozisyonunda da önemli bir koz olan Wade Baldwin IV, aynı zamanda önemli bir EuroLeague tecrübesine de sahip.\n\nBu anlaşmanın Kulübümüze ve Wade Baldwin IV’a hayırlı olmasını diliyor, oyuncumuzun sarı-lacivertli forma altında zaferlerle dolu sezonlar yaşamasını temenni ediyoruz."
            },        
            {
                "id": 2,
                "header": "Teşekkürler Georgios Papagiannis",
                "image": "https://www.basketbolgundem.com/wp-content/uploads/2024/07/papagiannis_fenerbahce_basketbolgundem.jpg",
                "haber": "Fenerbahçe Beko’nun 2023-24 sezonu kadrosunda yer alan sporcumuz Georgios Papagiannis ile yollarımız ayrılmıştır.\n\nFenerbahçe Ailesi'ne verdiği katkılardan dolayı Georgios Papagiannis’e teşekkür eder, kariyerinin yeni döneminde kendisine başarılar dileriz.\n\nFenerbahçe Spor Kulübü"
            },
            {
                "id": 3,
                "header": "Teşekkürler Amine Noua",
                "image": "https://media.fenerbahce.org/getmedia/29d1e8ed-60e5-46ac-bd10-cb7dc508b3c5/noua-vedagorselsonkpk.jpg?width=1200&height=675&ext=.jpg",
                "haber": "Fenerbahçe Beko’nun 2023-24 sezonu kadrosunda yer alan sporcumuz Amine Noua ile yollarımız ayrılmıştır.\n\nFenerbahçe Ailesi'ne verdiği katkılardan dolayı Amine Noua’ya teşekkür eder, kariyerinin yeni döneminde kendisine başarılar dileriz.\n\nFenerbahçe Spor Kulübü"
            },        
            {
                "id": 4,
                "header": "Nigel Hayes-Davis 3 yıl daha Fenerbahçe Beko'da",
                "image": "https://turksporajansi.com/wp-content/uploads/2023/04/nigel-hayes-davis-fb.jpeg",
                "haber": "Yeni sezon öncesinde kadro yapılanmasına yönelik çalışmalarını sürdüren Fenerbahçe Beko Erkek Basketbol Takımımız, Fenerbahçe Ailesi’ne 2022 yazında katılan ve gösterdiği performansla ekibimizin bu süreçteki başarılarının en önemli parçalarından biri olan Nigel Hayes-Davis ile 3 yıllık yeni sözleşme konusunda anlaşmaya varmıştır.\n\nBu sözleşmeye göre Nigel Hayes-Davis, 2026-27 sezonunun sonuna dek formamızı giymeye devam edecektir.\n\nHer iki forvet pozisyonunda da oynayabilen Nigel Hayes-Davis (1994, 2.03), 2022-23 sezonunda takımımız ile 33 EuroLeague maçının tamamında forma giyerek 10.5 sayı, 4.3 ribaund, 1.5 asist, 1.2 top çalma ve 13.3 verimlilik puanı ortalamaları tutturdu. Hayes-Davis, ligimizde ise 21 maçta süre alarak 10.29 sayı (%56.25 iki sayı, %41.18 üç sayı), 4.90 ribaund, 1.76 asist, 0.86 top çalma istatistikleri yakaladı.\n\nNigel, takımımızla geçirdiği ikinci sezonda ise performansını daha da yukarı çekerek EuroLeague’de 13.8 sayı, 4.6 ribaund, 1.7 asist, 1.0 top çalma ve 15.6 verimlilik puanı ortalamaları yakalayarak ekibimizin Final Four başarısının mimarlarından oldu. Bu istatistikler, Nigel Hayes-Davis’in EuroLeague’de 2023-24 sezonunun en iyi beşine seçilmesini de sağladı. Hayes-Davis, aynı zamanda Alba Berlin karşılaşmasında ürettiği 50 sayıyla EuroLeague tarihinde bir maçta en çok skor üreten isim unvanının da sahibi oldu. Başarılı sporcumuz, etkili performansını Türkiye Sigorta Basketbol Süper Ligi’ne de yansıtarak 14.3 sayı, 3.9 ribaund, 2.0 asist, 1.1 top çalma istatistikleri yakaladı. Nigel, Anadolu Efes’i 3-1 ile geçerek şampiyonluğa ulaşan ekibimizde finallerin MVP’si seçildi.\n\nBu anlaşmanın Kulübümüz ve sporcumuz için hayırlı olmasını diliyor, Nigel Hayes-Davis’e Fenerbahçe Beko forması altında başarılarla dolu sezonlar diliyoruz."
            }        
        ],
        "teams":[
            {
                "id":"1",
                "name":"Alba Berlin",
                "logo":"https://media-cdn.incrowdsports.com/ccc34858-22b0-47dc-904c-9940b0a16ff3.png?width=90&height=90&resizeType=fill&format=webp",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"2",
                "name":"Efes",
                "logo":"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"3",
                "name":"AS Monaco",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/1/15/As_monaco_basket_logo.png?20210618204415",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"4",
                "name":"Saski Baskonia",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Saski_Baskonia.png/300px-Saski_Baskonia.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"5",
                "name":"Kızılyıldız",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/6/6d/K%C4%B1z%C4%B1ly%C4%B1ld%C4%B1z_basketbol_logo.png?20210618210307",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"6",
                "name":"Olimpia Milano",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/263px-Pallacanestro_Olimpia_Milano_logo.svg.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"7",
                "name":"Fc Barcelona",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/FC_Barcelona.png/225px-FC_Barcelona.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"8",
                "name":"Fc Bayern Münich",
                "logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/225px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"9",
                "name":"Fenerbahçe Beko",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"10",
                "name":"LDLC Asvel",
                "logo":"https://media-cdn.incrowdsports.com/e33c6d1a-95ca-4dbc-b8cb-0201812104cc.png?width=90&height=90&resizeType=fill&format=webp",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"11",
                "name":"Makkabi Tel Aviv",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"12",
                "name":"Olimpiyakos",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/2/2e/Olympiakos.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"13",
                "name":"Panathinaikos",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/9/9f/Panathinaikos_B.C._logo.png?20240602190254",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"14",
                "name":"Paris",
                "logo":"https://media-cdn.incrowdsports.com/ea7523f3-40ea-4c58-a7d9-e38f412339c4.png?width=90&height=90&resizeType=fill&format=webp",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"15",
                "name":"Partizan",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/thumb/d/de/KK_Partizan_Logo.PNG/270px-KK_Partizan_Logo.PNG",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"16",
                "name":"Real Madrid",
                "logo":"https://upload.wikimedia.org/wikipedia/tr/0/0e/Real_Madrid_Baloncesto_logo.png",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"17",
                "name":"Virtus Segafredo Bologna",
                "logo":"https://media-cdn.incrowdsports.com/4af5e83b-f2b5-4fba-a87c-1f85837a508a.png?width=90&height=90&resizeType=fill&format=webp",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            },
            {
                "id":"18",
                "name":"Zalgiris Kaunas",
                "logo":"https://media-cdn.incrowdsports.com/0aa09358-3847-4c4e-b228-3582ee4e536d.png?width=90&height=90&resizeType=fill&format=webp",
                "O":0,
                "G":0,
                "M":0,
                "Av":0
            }
    
        ],
        "nextMatch": [
            {
                "idMatch": 1,
                "date":"24/09/24",
                "home": "Barcelona",
                "away": "Fenerbahçe",
                "time":" 22.00 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/FC_Barcelona.png/225px-FC_Barcelona.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "arena": "Palau Blaugrana"
            },
            {
                "idMatch": 2,
                "date":"26/09/24",
                "home": "Fenerbahçe",
                "away": "Partizan",
                "time":" 20.00 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/d/de/KK_Partizan_Logo.PNG/270px-KK_Partizan_Logo.PNG",
                "arena": "Ülker Sport Arena"
            },
            {
                "idMatch": 3,
                "date":"29/09/24",
                "home": "Fenerbahçe",
                "away": "Makkabi Tel Aviv",
                "time":" 20.30 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "arena": "Ülker Sport Arena"
            },
            {
                "idMatch": 4,
                "date":"2/10/24",
                "home": "Anadolu Efes",
                "away": "Fenerbahçe",
                "time":" 20.30 ",
                "homeim": "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anadolu_Efes_SK_logo.svg/1200px-Anadolu_Efes_SK_logo.svg.png",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/1200px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "arena": "Sinan Erdem"
            }
    
        ],
        "players":[
            {
                "idPlayer":1,
                "playerName":"SCOTTIE",
                "playerSurname":"WILBEKIN",
                "formNumber":"#3",
                "country":"United States of America",
                "height":188,
                "Birthday":"5 Nis 1993",
                "point":13.2,
                "Rebound":2.0,
                "assist":3.3,
                "steal":1.2,
                "blok":0.0,
                "productivity":12.4,
                "image":"https://media-cdn.incrowdsports.com/bdc99c62-f3c3-4ce9-8d5f-5933eb4ff89a.png?width=640&resizeType=fill&format=webp",
                "position":"Gard"
             },
             {
                "idPlayer":2,
                "playerName":"MARKO",
                "playerSurname":"GUDURIC",
                "formNumber":"#33",
                "country":"Serbia",
                "height":196,
                "Birthday":"8 Mar 1995",
                "point":9.3,
                "Rebound":2.2,
                "assist":2.3,
                "steal":0.8,
                "blok":0.1,
                "productivity":9.2,
                "image":"https://media-cdn.incrowdsports.com/bea99e3f-f43c-4e69-b51e-51fb76f122eb.png?width=640&resizeType=fill&format=webp",
                "position":"Gard"
             },
             {
                "idPlayer":3,
                "playerName":"TYLER",
                "playerSurname":"DORSEY",
                "formNumber":"#3",
                "country":"United States of America",
                "height":196,
                "Birthday":"18 Şub 1996",
                "point":10.5,
                "Rebound":2.2,
                "assist":1.6,
                "steal":0.5,
                "blok":0.1,
                "productivity":8.6,
                "image":"https://media-cdn.incrowdsports.com/88e73e31-c7d4-401e-9064-c96bd0dc46d6.png?width=640&resizeType=fill&format=webp",
                "position":"Gard"
             },
             {
                "idPlayer":4,
                "playerName":"Metecan",
                "playerSurname":"Birsen",
                "formNumber":"#1",
                "country":"Ireland",
                "height":205,
                "Birthday":"6 Nis 1995",
                "point":1.5,
                "Rebound":1.2,
                "assist":0.3,
                "steal":0.1,
                "blok":0.1,
                "image":"https://media-cdn.incrowdsports.com/0195f01b-b21c-4cd9-8ad6-e80fc5f424f4.png?width=640&resizeType=fill&format=webp",
                "position":"Forvet"
             },
             {
                "idPlayer":5,
                "playerName":"NIGEL",
                "playerSurname":"HAYES-DAVIS",
                "formNumber":"#11",
                "country":"United States of America",
                "height":203,
                "Birthday":"16 Ara 1994",
                "point":9.0,
                "Rebound":3.7,
                "assist":1.3,
                "steal":0.9,
                "blok":0.2,
                "productivity":10.1,
                "image":"https://media-cdn.incrowdsports.com/0bc1ddee-384f-44e8-ae99-c37eb0653e58.png?width=640&resizeType=fill&format=webp",
                "position":"Forvet"
             },
             {
                "idPlayer":6,
                "playerName":"TARIK",
                "playerSurname":"BIBEROVIC",
                "formNumber":"#13",
                "country":"Turkiye",
                "height":201,
                "Birthday":"28 Oca 2001",
                "point":4.4,
                "Rebound":1.6,
                "assist":0.5,
                "steal":0.3,
                "blok":0.0,
                "productivity":3.1,
                "image":"https://media-cdn.incrowdsports.com/d648ca47-1b40-48ec-8b3d-ecf6dced7d18.png?width=640&resizeType=fill&format=webp",
                "position":"Forvet"
             },
             {
                "idPlayer":7,
                "playerName":"HAMZA",
                "playerSurname":"MESTOGLU",
                "formNumber":"#22",
                "country":"Turkiye",
                "height":201,
                "Birthday":"22 Nis 2004",
                "point":0.0,
                "Rebound":0.0,
                "assist":0.0,
                "steal":0.0,
                "blok":0.0,
                "productivity":0.0,
                "image":"https://media-cdn.incrowdsports.com/ef066051-8be0-4a4c-ab61-0beac899bbb1.png?width=640&resizeType=fill&format=webp",
                "position":"Forvet"
             },
             {
                "idPlayer":8,
                "playerName":"NICOLO",
                "playerSurname":"MELLI",
                "formNumber":"#9",
                "country":"Italy",
                "height":205,
                "Birthday":"26 Oca 1991",
                "point":7.5,
                "Rebound":4.9,
                "assist":1.5,
                "steal":0.9,
                "blok":0.5,
                "productivity":10.4,
                "image":"https://media-cdn.incrowdsports.com/c1a69ae8-2551-4836-aed3-ef89240e5ed5.png?width=640&resizeType=fill&format=webp",
                "position":"Forvet"
             },
             {
                "idPlayer":11,
                "playerName":"WADE",
                "playerSurname":"BALDWIN IV",
                "formNumber":"#5",
                "country":"United States of America",
                "height":193,
                "Birthday":"29 Mar 1996",
                "point":14.4,
                "Rebound":3.0,
                "assist":4.2,
                "steal":0.9,
                "blok":0.2,
                "productivity":14.4,
                "image":"https://media-cdn.incrowdsports.com/d154726f-c893-45bd-bb9b-c4a84c4f0eb4.png?width=640&resizeType=fill&format=webp",
                "position":"Gard"
             },
             {
                "idPlayer":12,
                "playerName":"SERTAC",
                "playerSurname":"SANLI",
                "formNumber":"#5",
                "country":"Turkiye",
                "height":212,
                "Birthday":"5 Ağu 1991",
                "point":6.1,
                "Rebound":2.4,
                "assist":0.6,
                "steal":0.2,
                "blok":0.4,
                "productivity":5.1,
                "image":"https://media-cdn.incrowdsports.com/6afdd314-ae38-4a41-ac52-6771fe65ef51.png?width=640&resizeType=fill&format=webp",
                "position":"Pivot"
             }
    
    
        ],
        "matches": [
            {
                "id": "1",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/2/2e/Olympiakos.png",
                "away": "Olympiakos",
                "date": "2024-10-04",
                "time": "20:30"
              },
              {
                "id": "2",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/1/15/As_monaco_basket_logo.png?20210618204415",
                "home": "AS Monaco",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-10-11",
                "time": "19:00"
              },
              {
                "id": "3",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "home": "Maccabi Playtika",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-10-18",
                "time": "20:05"
              },
              {
                "id": "4",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/FC_Barcelona.png/225px-FC_Barcelona.png",
                "home": "Barcelona",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-10-25",
                "time": "21:00"
              },
              {
                "id": "5",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/9/9f/Panathinaikos_B.C._logo.png?20240602190254",
                "away": "Panathinaikos",
                "date": "2024-11-01",
                "time": "20:45"
              },
              {
                "id": "6",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/263px-Pallacanestro_Olimpia_Milano_logo.svg.png",
                "home": "EA7 Emporio Armani Milan",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-11-08",
                "time": "20:30"
              },
              {
                "id": "7",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6d/K%C4%B1z%C4%B1ly%C4%B1ld%C4%B1z_basketbol_logo.png?20210618210307",
                "home": "Kızılyıldız",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-11-15",
                "time": "19:00"
              },
              {
                "id": "8",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/0/0e/Real_Madrid_Baloncesto_logo.png",
                "home": "Real Madrid",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-11-22",
                "time": "21:00"
              },
              {
                "id": "9",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/1/15/As_monaco_basket_logo.png?20210618204415",
                "away": "AS Monaco",
                "date": "2024-11-29",
                "time": "20:45"
              },
              {
                "id": "10",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/6/6d/K%C4%B1z%C4%B1ly%C4%B1ld%C4%B1z_basketbol_logo.png?20210618210307",
                "home": "Kızılyıldız",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-12-06",
                "time": "19:00"
              },
              {
                "id": "11",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Saski_Baskonia.png/300px-Saski_Baskonia.png",
                "home": "Baskonia",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-12-13",
                "time": "21:00"
              },
              {
                "id": "12",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/9/9f/Panathinaikos_B.C._logo.png?20240602190254",
                "home": "Panathinaikos",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-12-20",
                "time": "20:00"
              },
              {
                "id": "13",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/263px-Pallacanestro_Olimpia_Milano_logo.svg.png",
                "home": "EA7 Emporio Armani Milan",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-12-27",
                "time": "20:30"
              },
              {
                "id": "14",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/0/0e/Real_Madrid_Baloncesto_logo.png",
                "home": "Real Madrid",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-01-03",
                "time": "21:00"
              },
              {
                "id": "15",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/6/6d/K%C4%B1z%C4%B1ly%C4%B1ld%C4%B1z_basketbol_logo.png?20210618210307",
                "home": "Kızılyıldız",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-01-10",
                "time": "19:00"
              },
              {
                "id": "16",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Saski_Baskonia.png/300px-Saski_Baskonia.png",
                "home": "Baskonia",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-01-17",
                "time": "21:00"
              },
              {
                "id": "17",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/9/9f/Panathinaikos_B.C._logo.png?20240602190254",
                "home": "Panathinaikos",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-01-24",
                "time": "20:00"
              },
              {
                "id": "18",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/FC_Barcelona.png/225px-FC_Barcelona.png",
                "home": "Barcelona",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-01-31",
                "time": "21:00"
              },
              {
                "id": "19",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/1/15/As_monaco_basket_logo.png?20210618204415",
                "home": "AS Monaco",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-02-07",
                "time": "19:00"
              },
              {
                "id": "20",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "home": "Maccabi Playtika",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-02-14",
                "time": "20:05"
              },
              {
                "id": "21",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Saski_Baskonia.png/300px-Saski_Baskonia.png",
                "home": "Baskonia",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-02-21",
                "time": "21:00"
              },
              {
                "id": "22",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/2/2e/Olympiakos.png",
                "home": "Olympiakos",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-02-28",
                "time": "20:30"
              },
              {
                "id": "23",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/263px-Pallacanestro_Olimpia_Milano_logo.svg.png",
                "home": "EA7 Emporio Armani Milan",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-03-07",
                "time": "20:30"
              },
              {
                "id": "24",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/d/de/KK_Partizan_Logo.PNG/270px-KK_Partizan_Logo.PNG",
                "home": "Partizan",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-03-14",
                "time": "19:00"
              },
              {
                "id": "25",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "home": "Maccabi Playtika",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2024-03-21",
                "time": "20:05"
              },
              {
                "id": "26",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/0/0e/Real_Madrid_Baloncesto_logo.png",
                "away": "Real Madrid",
                "date": "2025-02-06",
                "time": "20:30"
              },
              {
                "id": "27",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png?20130817225313",
                "home": "Maccabi Playtika",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2025-02-27",
                "time": "20:05"
              },
              {
                "id": "28",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/263px-Pallacanestro_Olimpia_Milano_logo.svg.png",
                "home": "EA7 Emporio Armani Milan",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2025-03-06",
                "time": "20:30"
              },
              {
                "id": "29",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://media-cdn.incrowdsports.com/e33c6d1a-95ca-4dbc-b8cb-0201812104cc.png?width=90&height=90&resizeType=fill&format=webp",
                "away": "LDLC Asvel",
                "date": "2025-03-13",
                "time": "20:45"
              },
              {
                "id": "30",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/1/15/As_monaco_basket_logo.png?20210618204415",
                "home": "AS Monaco",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2025-03-20",
                "time": "19:00"
              },
              {
                "id": "31",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://media-cdn.incrowdsports.com/ea7523f3-40ea-4c58-a7d9-e38f412339c4.png?width=90&height=90&resizeType=fill&format=webp",
                "away": "Paris Basketball",
                "date": "2025-03-25",
                "time": "20:45"
              },
              {
                "id": "32",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Saski_Baskonia.png/300px-Saski_Baskonia.png",
                "away": "Baskonia",
                "date": "2025-03-28",
                "time": "20:45"
              },
              {
                "id": "33",
                "homeim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "home": "Fenerbahçe Beko",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/4/47/FC_Barcelona.png/225px-FC_Barcelona.png",
                "away": "Barcelona",
                "date": "2025-04-02",
                "time": "20:45"
              },
              {
                "id": "34",
                "homeim": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/225px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
                "home": "Bayern Münih",
                "awayim": "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg/315px-Fenerbah%C3%A7e_Men%27s_Basketball_logo.svg.png",
                "away": "Fenerbahçe Beko",
                "date": "2025-04-10",
                "time": "20:00"
              },

        ]
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});


