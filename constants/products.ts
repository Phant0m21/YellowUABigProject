export type Product = { id: string; name: string; price: string; image: 'phone1.jpg' | 'phone2.png' | 'phone3.jpg' | 'phone4.jpg' };

const rows: [string, string, Product['image']][] = [
  ['Apple iPhone 17 Pro 256GB eSIM (Silver)', '67 549 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro 1TB eSIM (Silver)', '81 899 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro 256GB eSIM (Deep Blue)', '67 549 грн', 'phone1.jpg'], ['Apple iPhone 17 Pro 1TB eSIM (Deep Blue)', '81 899 грн', 'phone1.jpg'],
  ['Apple iPhone 17 Pro Max 256GB eSIM', '74 699 грн', 'phone2.png'], ['Apple iPhone 17 Pro Max 512GB eSIM', '84 299 грн', 'phone2.png'], ['Apple iPhone 17 Pro Max 1TB eSIM', '95 499 грн', 'phone2.png'], ['Apple iPhone 17 Pro Max 2TB eSIM', '119 999 грн', 'phone2.png'],
  ['Apple iPhone 17 Pro Max 256GB eSIM (Deep Blue)', '74 699 грн', 'phone1.jpg'], ['Apple iPhone 17 Pro Max 512GB eSIM (Deep Blue)', '84 299 грн', 'phone1.jpg'], ['Apple iPhone 17 Pro Max 1TB eSIM (Deep Blue)', '95 499 грн', 'phone4.jpg'], ['Apple iPhone 17 Pro Max 2TB eSIM (Deep Blue)', '119 999 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro 256GB eSIM (Cosmic Orange)', '67 549 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro 512GB eSIM (Cosmic Orange)', '74 699 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro Max 256GB eSIM (Cosmic Orange)', '74 699 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro Max 512GB eSIM (Cosmic Orange)', '84 299 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro Max 1TB eSIM (Cosmic Orange)', '95 499 грн', 'phone3.jpg'], ['Apple iPhone 17 Pro Max 2TB eSIM (Cosmic Orange)', '119 999 грн', 'phone3.jpg'],
];

export const products: Product[] = rows.map(([name, price, image], index) => ({ id: String(index + 1), name, price, image }));
export function productImage(image: Product['image']) {
  if (image === 'phone2.png') return require('../assets/images/phone2.png');
  if (image === 'phone3.jpg') return require('../assets/images/phone3.jpg');
  if (image === 'phone4.jpg') return require('../assets/images/phone4.jpg');
  return require('../assets/images/phone1.jpg');
}
