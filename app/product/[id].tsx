import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { YellowHeader } from '@/components/yellow-header';
import { productImage, products } from '@/constants/products';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find((item) => item.id === id) ?? products[0];
  return <SafeAreaView style={styles.safe}><YellowHeader /><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    <View style={styles.breadcrumbs}><Pressable onPress={() => router.back()}><Text style={styles.back}>Головна</Text></Pressable><Text style={styles.crumb}>›  Apple  ›  iPhone  ›  iPhone 17  ›</Text></View>
    <Text style={styles.muted}>{product.name}</Text><Image source={productImage(product.image)} style={styles.image} contentFit="contain" />
    <View style={styles.meta}><Text style={styles.available}>Є в наявності</Text><View><Text style={styles.article}>Артикул: MG7N4/MG894</Text><Text style={styles.article}>Код товару: <Text style={styles.code}>000086536</Text></Text></View></View>
    <Text style={styles.name}>{product.name}</Text><Text style={styles.description}>СмартфонЕкран: 6,3”;OLED;2622x1206;120 ГцПам'ять: 512 ГБ;ОЗП: 12 ГБПроцесор: Apple A19 ProОС: iOS 26Акумулятор: 4252 мА·годКамера: 48 (f/1.6, ширококутна)</Text>
    <Text style={styles.price}>{product.price.replace(' грн', '')} <Text style={styles.currency}>грн</Text></Text><View style={styles.actions}><Pressable style={({ pressed }) => [styles.buy, pressed && styles.pressed]}><Text style={styles.buyText}>Купити</Text></Pressable><Pressable style={styles.compare}><Ionicons name="scale-outline" size={23} color="#111" /></Pressable></View>
  </ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({ safe:{flex:1,backgroundColor:'#1b1b1b'},content:{backgroundColor:'#fff',padding:10,paddingBottom:34,minHeight:'100%'},breadcrumbs:{flexDirection:'row',marginTop:13,gap:8},back:{fontSize:12,color:'#5e5e5e'},crumb:{fontSize:12,color:'#777'},muted:{fontSize:12,color:'#aaa',marginTop:12},image:{height:400,width:'100%',marginTop:14},meta:{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'},available:{color:'#20b84b',fontSize:12,backgroundColor:'#f5fff7',paddingHorizontal:10,paddingVertical:4},article:{fontSize:14,lineHeight:25,color:'#aaa',textAlign:'right'},code:{color:'#111'},name:{fontSize:18,lineHeight:23,fontWeight:'600',marginTop:21},description:{fontSize:16,lineHeight:22,marginTop:17},price:{fontSize:31,fontWeight:'700',marginTop:16},currency:{fontSize:14,fontWeight:'400'},actions:{flexDirection:'row',gap:7,marginTop:16},buy:{height:44,backgroundColor:'#ffd000',borderRadius:5,alignItems:'center',justifyContent:'center',flex:1},pressed:{backgroundColor:'#d72668'},buyText:{fontWeight:'600'},compare:{width:44,borderWidth:1,borderColor:'#e5e5e5',borderRadius:6,alignItems:'center',justifyContent:'center'} });
