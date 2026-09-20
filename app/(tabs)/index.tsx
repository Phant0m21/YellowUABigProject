import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductCard as CatalogProductCard } from '@/components/product-card';
import { YellowHeader } from '@/components/yellow-header';
import { CatalogFilters, FilterState } from '@/components/catalog-filters';
import { products as catalogProducts } from '@/constants/products';

const products = [
  ['Apple iPhone 17 Pro 256GB eSIM (Silver)', '67 549 грн', 'phone3.jpg'],
  ['Apple iPhone 17 Pro 1TB eSIM (Silver)', '81 899 грн', 'phone3.jpg'],
  ['Apple iPhone 17 Pro 256GB eSIM (Deep Blue)', '67 549 грн', 'phone1.jpg'],
  ['Apple iPhone 17 Pro 1TB eSIM (Deep Blue)', '81 899 грн', 'phone1.jpg'],
  ['Apple iPhone 17 Pro Max 256GB eSIM', '74 699 грн', 'phone2.png'],
  ['Apple iPhone 17 Pro Max 512GB eSIM', '84 299 грн', 'phone2.png'],
  ['Apple iPhone 17 Pro Max 1TB eSIM', '95 499 грн', 'phone2.png'],
  ['Apple iPhone 17 Pro Max 2TB eSIM', '119 999 грн', 'phone2.png'],
  ['Apple iPhone 17 Pro Max 256GB eSIM (Deep Blue)', '74 699 грн', 'phone1.jpg'],
  ['Apple iPhone 17 Pro Max 512GB eSIM (Deep Blue)', '84 299 грн', 'phone1.jpg'],
  ['Apple iPhone 17 Pro Max 1TB eSIM (Deep Blue)', '95 499 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro Max 2TB eSIM (Deep Blue)', '119 999 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro 256GB eSIM (Cosmic Orange)', '67 549 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro 512GB eSIM (Cosmic Orange)', '74 699 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro Max 256GB eSIM (Cosmic Orange)', '74 699 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro Max 512GB eSIM (Cosmic Orange)', '84 299 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro Max 1TB eSIM (Cosmic Orange)', '95 499 грн', 'phone4.jpg'],
  ['Apple iPhone 17 Pro Max 2TB eSIM (Cosmic Orange)', '119 999 грн', 'phone4.jpg'],
] as const;

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const productImage = product[2] === 'phone2.png' ? require('../../assets/images/phone2.png')
    : product[2] === 'phone3.jpg' ? require('../../assets/images/phone3.jpg')
    : product[2] === 'phone4.jpg' ? require('../../assets/images/phone4.jpg')
    : require('../../assets/images/phone1.jpg');
  return (
    <View style={styles.card}>
      <View style={styles.cardIcons}>
        <Ionicons name="git-compare-outline" size={15} color="#929292" />
        <Ionicons name="documents-outline" size={15} color="#929292" />
      </View>
      <Image source={productImage} style={styles.productImage} contentFit="contain" />
      <Text style={styles.cardName}>{product[0]}</Text>
      <Text style={styles.price}>{product[1]}</Text>
      <View style={styles.buyRow}>
        <Pressable style={({ pressed }) => [styles.buyButton, pressed && styles.buyButtonPressed]}>
          <Text style={styles.buyText}>Купити</Text>
        </Pressable>
        <Text style={styles.credit}>В кредит</Text>
      </View>
      <View style={styles.stockRow}>
        <Text style={styles.stock}>Є в наявності</Text>
        <Text style={styles.code}>код: 0000{8536 + index * 139}</Text>
      </View>
    </View>
  );
}

function Footer() {
  return <View style={styles.footer}>
    <Text style={styles.footerLogo}>yellow</Text>
    <Text style={styles.phone}>(093) 811 28 44</Text>
    <View style={styles.socials}>
      <Ionicons name="logo-facebook" size={17} color="#fff" /><Ionicons name="logo-youtube" size={18} color="#fff" />
      <Ionicons name="logo-instagram" size={17} color="#fff" /><Ionicons name="logo-tiktok" size={17} color="#fff" />
    </View>
    <View style={styles.footerLine} />
    <Text style={styles.footerHeading}>Покупцеві</Text>
    <Text style={styles.footerLink}>Мапа сайта</Text><Text style={styles.footerLink}>Угода користувача</Text>
    <Text style={styles.footerLink}>Гарантія та Повернення товару</Text><Text style={styles.footerLink}>Доставка і Оплата</Text>
    <View style={styles.footerLine} />
    <Text style={styles.footerHeading}>Чекаємо Вас</Text>
    <Text style={styles.address}>м. Дніпро{`\n`}пр. Науки, 27, ТРЦ DNEPR PLAZA, 2й рівень{`\n\n`}м. Київ{`\n`}вул. В'ячеслава Чорновола, 41</Text>
    <View style={styles.footerLine} /><Text style={styles.copyright}>© Yellow 2026</Text>
  </View>;
}

export default function CatalogScreen() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ memory: null, sim: null, color: null, maxPrice: 80000 });
  const filteredProducts = useMemo(() => catalogProducts.filter((product) => {
    const price = Number(product.price.replace(/[^0-9]/g, ''));
    return price <= filters.maxPrice && (!filters.memory || product.memory === filters.memory) && (!filters.sim || product.sim === filters.sim) && (!filters.color || product.color === filters.color);
  }), [filters]);
  return <SafeAreaView style={styles.safe}><StatusBar style="light" />
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
      <YellowHeader />
      <View style={styles.content}>
        <Text style={styles.breadcrumbs}>Головна   ›   Apple   ›   iPhone   ›   iPhone 17</Text>
        <Text style={styles.title}>Apple iPhone 17 Pro</Text>
        <View style={styles.selector}><Text style={styles.selectorText}>Перегляд товарів по:</Text></View>
        <View style={styles.series}><Ionicons name="close-circle-outline" size={18} color="#5e51ff" /><Text style={styles.seriesText}>Серія: iPhone 17 Pro</Text></View>
        <Text style={styles.clear}>очистити все</Text>
        <Pressable onPress={() => setFiltersOpen((open) => !open)} style={styles.filter}><Text style={styles.filterText}>Фільтри</Text><Ionicons name={filtersOpen ? "chevron-up" : "chevron-down"} size={21} color="#5e51ff" /></Pressable>
        {filtersOpen && <CatalogFilters value={filters} onChange={setFilters} />}
        <View style={styles.sort}><Text style={styles.sortLabel}>сортування:</Text><View style={styles.sortPill}><Text style={styles.sortText}>Новинки</Text><Ionicons name="chevron-down" size={14} color="#e8b800" /></View></View>
        <View style={styles.resultLine}><Text style={styles.resultText}>Знайдено товарів: {filteredProducts.length}</Text><Pressable onPress={() => setFilters({ memory: null, sim: null, color: null, maxPrice: 80000 })}><Text style={styles.resetText}>Скинути</Text></Pressable></View>
        <View style={styles.grid}>{filteredProducts.map((product, index) => <CatalogProductCard product={product} index={index} key={product.id} />)}</View>
        <View style={styles.article}>
          <Text style={styles.articleTitle}>Купити iPhone 17 Pro Max у Києві та Дніпрі – офіційна гарантія в Україні</Text>
          <Text style={styles.paragraph}>Apple представила справжній флагман – <Text style={styles.bold}>iPhone 17 Pro Max</Text>, найпотужніший айфон 2025 року. Це смартфон для тих, хто обирає максимум: продуктивність, камери професійного рівня та великий екран для роботи й розваг. І головне – вже сьогодні ви можете <Text style={styles.bold}>купити iPhone 17 Pro Max у Києві та Дніпрі</Text> з доставкою, офіційною гарантією та оплатою частинами через Monobank і ПриватБанк.</Text>
          <Text style={styles.heading}>Дизайн та дисплей</Text><Text style={styles.paragraph}>iPhone 17 Pro Max отримав корпус із преміальних матеріалів і величезний <Text style={styles.bold}>6.9-дюймовий OLED-дисплей</Text> із частотою оновлення <Text style={styles.bold}>120 Гц</Text>. Яскравість і контрастність вражають – переглядати відео чи грати в ігри тепер ще комфортніше. А нова палітра кольорів робить модель ще більш привабливою.</Text>
          <Text style={styles.heading}>Потужність і пам’ять</Text><Text style={styles.paragraph}>Флагман працює на процесорі <Text style={styles.bold}>Apple A19 Pro</Text>, створеному за 2-нм техпроцесом. Він демонструє рекордну швидкість та енергоефективність. Обсяг пам’яті стартує від <Text style={styles.bold}>256 GB</Text> і сягає <Text style={styles.bold}>2 TB</Text>, а оперативна пам’ять – до 12 ГБ. Смартфон підтримує <Text style={styles.bold}>5G і Wi-Fi 7</Text>, тож ви завжди залишаєтесь онлайн на максимальній швидкості.</Text>
          <Text style={styles.heading}>Камери професійного рівня</Text><Text style={styles.paragraph}>iPhone 17 Pro Max оснащений потрійною камерою з новим сенсором та <Text style={styles.bold}>8-кратним оптичним зумом</Text>. Основний модуль 48 Мп, ширококутний і телеоб’єктив дозволяють отримати знімки студійної якості. Фронтальна камера 24 Мп дарує чіткі селфі та чудово підходить для відеоблогів і онлайн-зустрічей.</Text>
          <Text style={styles.heading}>Купити iPhone 17 Pro Max у Києві та Дніпрі</Text><Text style={styles.paragraph}>В інтернет-магазині <Text style={styles.bold}>Yellow.ua</Text> ви отримаєте:</Text>
          <Text style={styles.list}>•  <Text style={styles.bold}>офіційну гарантію Apple в Україні;</Text>{`\n\n`}•  <Text style={styles.bold}>швидку доставку 1–2 дні</Text> у Київ, Дніпро та інші міста;{`\n\n`}•  <Text style={styles.bold}>оплату частинами Monobank і ПриватБанк</Text> – зручно та без переплат;{`\n\n`}•  акції, бонуси та знижки для клієнтів.</Text>
          <Text style={styles.paragraph}>Хочете стати власником найпотужнішого айфона 2025 року? Саме час <Text style={styles.bold}>замовити iPhone 17 Pro Max у Києві та Дніпрі</Text> з офіційною гарантією. Перейдіть у Yellow.ua і оформіть покупку вже сьогодні!</Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#1b1b1b'},scroll:{backgroundColor:'#fff'},header:{height:52,backgroundColor:'#1b1b1b',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16},logo:{fontSize:31,color:'#fff',fontWeight:'300',letterSpacing:-1.5},logoDot:{color:'#ffd300'},headerActions:{flexDirection:'row',gap:15},content:{paddingHorizontal:15},breadcrumbs:{fontSize:12,color:'#8b8b8b',marginTop:23},title:{fontSize:24,fontWeight:'300',marginTop:10,color:'#222'},selector:{alignSelf:'flex-start',borderWidth:1,borderColor:'#dcd8ff',borderRadius:5,paddingHorizontal:10,paddingVertical:9,marginTop:51},selectorText:{fontSize:14,color:'#5e51ff'},series:{flexDirection:'row',alignItems:'center',gap:7,marginTop:21,marginLeft:9},seriesText:{fontSize:14,color:'#555'},clear:{color:'#5e51ff',fontSize:13,marginTop:19,marginLeft:9},filter:{alignSelf:'flex-start',marginTop:26,borderWidth:1,borderColor:'#dcd8ff',borderRadius:5,paddingVertical:9,paddingHorizontal:23,flexDirection:'row',gap:5,alignItems:'center'},filterText:{color:'#5e51ff',fontSize:14,fontWeight:'600'},sort:{marginTop:58,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10},sortLabel:{fontSize:11,color:'#444'},sortPill:{width:148,height:35,borderRadius:18,backgroundColor:'#fff',elevation:5,shadowColor:'#aaa',shadowOpacity:.25,shadowRadius:8,flexDirection:'row',alignItems:'center',justifyContent:'space-around'},sortText:{fontSize:12,color:'#555'},resultLine:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:18},resultText:{fontSize:12,color:'#555'},resetText:{fontSize:12,color:'#5e51ff'},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginTop:14},card:{width:'48%',minHeight:307,borderWidth:1,borderColor:'#e1e1e1',borderRadius:13,padding:9,marginBottom:13,overflow:'hidden'},cardIcons:{height:22,gap:10},productImage:{height:128,width:'100%',marginTop:0},cardName:{fontSize:12,lineHeight:15,color:'#111',height:34,marginTop:5},price:{fontWeight:'700',fontSize:14,marginTop:2},buyRow:{marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},buyButton:{backgroundColor:'#ffd000',paddingHorizontal:19,paddingVertical:8,borderRadius:18},buyButtonPressed:{backgroundColor:'#d72668'},buyText:{fontSize:11,fontWeight:'600'},credit:{fontSize:8,fontWeight:'600'},stockRow:{flexDirection:'row',justifyContent:'space-between',marginTop:13},stock:{fontSize:7,color:'#11b64c'},code:{fontSize:6,color:'#aaa'},article:{paddingHorizontal:3,paddingTop:24,paddingBottom:28},articleTitle:{fontSize:24,lineHeight:28,textAlign:'center',fontWeight:'300',marginBottom:20},heading:{fontSize:28,lineHeight:33,fontWeight:'700',marginTop:27,marginBottom:20},paragraph:{fontSize:16,lineHeight:22,textAlign:'justify',marginBottom:7},bold:{fontWeight:'700'},list:{fontSize:16,lineHeight:22,textAlign:'justify',marginTop:20,marginLeft:21,marginBottom:22},footer:{backgroundColor:'#1b1b1b',alignItems:'center',paddingHorizontal:37,paddingTop:34,paddingBottom:13},footerLogo:{fontSize:32,fontWeight:'300',letterSpacing:-2,color:'#fff'},phone:{color:'#fff',fontSize:14,fontWeight:'700',marginTop:33},socials:{flexDirection:'row',gap:21,marginTop:38},footerLine:{height:1,backgroundColor:'#333',width:'100%',marginVertical:24},footerHeading:{fontSize:17,color:'#fff',fontWeight:'700',marginBottom:18},footerLink:{fontSize:14,color:'#fff',lineHeight:23},address:{fontSize:12,color:'#fff',textAlign:'center',fontWeight:'600',lineHeight:14},copyright:{color:'#fff',fontSize:11}
});
