export type Product = { id:string; name:string; price:string; image:'phone1.jpg'|'phone2.png'|'phone3.jpg'; article:string; code:string; memory:'256Gb'|'512Gb'|'1 Тб'; color:'Silver'|'Blue'|'Orange'; sim:'eSIM'|'1 SIM + eSIM' };
const data: Omit<Product,'id'>[] = [
{name:'Apple iPhone 17 Pro 512GB eSIM (Silver)',price:'64 749 грн',image:'phone3.jpg',article:'MG7N4/MG894',code:'000086536',memory:'512Gb',color:'Silver',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 1TB eSIM (Silver)',price:'79 099 грн',image:'phone3.jpg',article:'MG7R4/MG8D4',code:'000086475',memory:'1 Тб',color:'Silver',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 1TB eSIM (Deep Blue)',price:'76 349 грн',image:'phone1.jpg',article:'MG7U4',code:'000086477',memory:'1 Тб',color:'Blue',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 512GB eSIM (Deep Blue)',price:'65 699 грн',image:'phone1.jpg',article:'MG7Q4/MG8C4',code:'000086474',memory:'512Gb',color:'Blue',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 1TB eSIM (Cosmic Orange)',price:'74 699 грн',image:'phone2.png',article:'MG7T4',code:'000086476',memory:'1 Тб',color:'Orange',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 512GB eSIM (Cosmic Orange)',price:'64 299 грн',image:'phone2.png',article:'MG7P4/MG8A4',code:'000086473',memory:'512Gb',color:'Orange',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 256GB eSIM (Cosmic Orange)',price:'54 149 грн',image:'phone2.png',article:'MG7L4/MG864',code:'000086472',memory:'256Gb',color:'Orange',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 256GB eSIM (Silver)',price:'55 749 грн',image:'phone3.jpg',article:'MG7K4',code:'000086443',memory:'256Gb',color:'Silver',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 256GB eSIM (Deep Blue)',price:'54 599 грн',image:'phone1.jpg',article:'MG7M4',code:'000086380',memory:'256Gb',color:'Blue',sim:'eSIM'},
{name:'Apple iPhone 17 Pro 1TB (Cosmic Orange)',price:'76 799 грн',image:'phone2.png',article:'MG8Q4',code:'000085872',memory:'1 Тб',color:'Orange',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 512GB (Cosmic Orange)',price:'66 849 грн',image:'phone2.png',article:'MG8L4',code:'000085874',memory:'512Gb',color:'Orange',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 256GB (Cosmic Orange)',price:'56 449 грн',image:'phone2.png',article:'MG8H4',code:'000085873',memory:'256Gb',color:'Orange',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 1TB (Silver)',price:'79 549 грн',image:'phone3.jpg',article:'MG8P4',code:'000085847',memory:'1 Тб',color:'Silver',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 512GB (Silver)',price:'68 249 грн',image:'phone3.jpg',article:'MG8K4',code:'000085853',memory:'512Gb',color:'Silver',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 256GB (Silver)',price:'57 349 грн',image:'phone3.jpg',article:'MG8G4',code:'000085850',memory:'256Gb',color:'Silver',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 1TB (Deep Blue)',price:'78 199 грн',image:'phone1.jpg',article:'MG8R4',code:'000085846',memory:'1 Тб',color:'Blue',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 512GB (Deep Blue)',price:'67 299 грн',image:'phone1.jpg',article:'MG8N4',code:'000085852',memory:'512Gb',color:'Blue',sim:'1 SIM + eSIM'},
{name:'Apple iPhone 17 Pro 256GB (Deep Blue)',price:'56 699 грн',image:'phone1.jpg',article:'MG8J4',code:'000085849',memory:'256Gb',color:'Blue',sim:'1 SIM + eSIM'},
];
export const products: Product[] = data.map((item,index)=>({...item,id:String(index+1)}));
export function productImage(image:Product['image']) { if(image==='phone2.png') return require('../assets/images/phone2.png'); if(image==='phone3.jpg') return require('../assets/images/phone3.jpg'); return require('../assets/images/phone1.jpg'); }
export function productSummary(p:Product) { const memory=p.memory==='1 Тб'?'1000':p.memory.replace('Gb',''); return `СмартфонЕкран: 6,3”;OLED;2622x1206;120 ГцПам'ять: ${memory} ГБОЗП: 12 ГБПроцесор: Apple A19 ProОС: iOS 26Акумулятор: 4252 мА·годКамера: 48 (f/1.6, ширококутна)`; }
export function productSpecs(p:Product) { return [['Назва',p.name],['Гарантійний термін','3 місяця'],['Серія','iPhone 17 Pro'],['Вбудована пам’ять',p.memory],['Оперативна пам’ять','12 ГБ'],['Операційна система','iOS 26'],['Процесор','Apple A19 Pro'],['Габарити','150 x 71.9 x 8.8 мм, 206 г'],['Дисплей','6.3" (2622 ×1206) Super Retina XDR OLED'],['Камера','48 + 48 + 48 Мп'],['Фронтальна камера','18 Мп'],['Кількість SIM-карт',p.sim],['Бездротові технології','Wi-Fi 802.11 a/b/g/n/ac/6e/7, Bluetooth 6.0, NFC'],['Колір',p.color],['Виробник','Apple'],['1C code',p.code],['Доступне попереднє замовлення','Так']] as const; }
