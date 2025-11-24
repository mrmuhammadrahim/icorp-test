# Test API Interaction

Bu loyihada Node.js, ExpressJs, Axios va localtunnel
yordamida API bilan ishlash kodlari ko'rsatilgan. Loyihada
part1 va part2 kod bo'laklarini olish, ularni birlashtirish va 
final messageni olish jarayoni amalga oshiriladi.

## Texnologiyalar

-Node.js
-Express
-Axios
-Localtunnel

## O'rnatish

1. Loyihani klonlash:

git clone https://github.com/mrmuhammadrahim/icorp-test.git 
cd REPO
pnpm install

pnpm run start   ||   node index.js



### Request flow

1. POST `/start` test APIga msg yuboradi, endpointni ichida msg va localtunnel yordamida yaratilgan
url Axios orqali `https://test.icorp.uz/interview.php` quyidagi urlga obyekt sifatida yuboriladi
2.Axiosdan POST requst yuborilgandan so'ng `/callback` ishga tushib part2 olinadi
3.`/callback` endpointi yakunlangandan so'ng `/start` endpointini davomi yakunlanishi mobaynida part1ni oladi 
va fullCode yasaladi va final msgni olish funksiyasi ishlashni boshlaydi
4.Get so'rovi orqali final msg olinadi



