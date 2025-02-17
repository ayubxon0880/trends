# React Loihasi - README

Bu loyiha React yordamida ishlab chiqilgan. Quyidagi qo‘llanma loyiha kodini o‘rnatish va ishlatish jarayonini tushuntiradi.

## Talablar
Loyihani ishga tushirish uchun quyidagi dasturlar o‘rnatilgan bo‘lishi kerak:

- [Node.js](https://nodejs.org/) (Minimal versiya: 16+)
- [npm](https://www.npmjs.com/) yoki [yarn](https://yarnpkg.com/)

## O‘rnatish
Loyihani yuklab oling va quyidagi buyruqlar orqali ishga tushiring:

```sh
# Repository'ni klonlash
git clone https://github.com/ayubxon0880/trends.git
cd trends

# Kerakli kutubxonalarni o‘rnatish
npm install  # yoki yarn install
```

## Ishga tushirish
Loyihani mahalliy serverda ishga tushirish uchun:

```sh
npm run dev

cd ./src/service
node service.js
```

Brauzeringizda `http://localhost:5173` manziliga kiring.

## Build qilish
Loyihani production uchun tayyorlash:

```sh
npm run build  # yoki yarn build
```

Hosil bo‘lgan `build/` papkasida loyihaning optimallashtirilgan versiyasi yaratiladi.

