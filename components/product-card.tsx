import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Product, productImage } from '@/constants/products';

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const open = () => router.push(`/product/${product.id}` as never);
  return <Pressable onPress={open} style={styles.card}><View style={styles.icons}><Ionicons name="git-compare-outline" size={15} color="#929292" /><Ionicons name="documents-outline" size={15} color="#929292" /></View><Image source={productImage(product.image)} style={styles.image} contentFit="contain" /><Text style={styles.name}>{product.name}</Text><Text style={styles.price}>{product.price}</Text><View style={styles.row}><Pressable onPress={open} style={({ pressed }) => [styles.buy, pressed && styles.pressed]}><Text style={styles.buyText}>Купити</Text></Pressable><Text style={styles.credit}>В кредит</Text></View><View style={styles.stockRow}><Text style={styles.stock}>Є в наявності</Text><Text style={styles.code}>код: {product.code}</Text></View></Pressable>;
}
const styles = StyleSheet.create({ card:{width:'48%',minHeight:307,borderWidth:1,borderColor:'#e1e1e1',borderRadius:13,padding:9,marginBottom:13,overflow:'hidden'},icons:{height:22,gap:10},image:{height:128,width:'100%'},name:{fontSize:12,lineHeight:15,height:34,marginTop:5},price:{fontWeight:'700',fontSize:14,marginTop:2},row:{marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},buy:{backgroundColor:'#ffd000',paddingHorizontal:19,paddingVertical:8,borderRadius:18},pressed:{backgroundColor:'#d72668'},buyText:{fontSize:11,fontWeight:'600'},credit:{fontSize:8,fontWeight:'600'},stockRow:{flexDirection:'row',justifyContent:'space-between',marginTop:13},stock:{fontSize:7,color:'#11b64c'},code:{fontSize:6,color:'#aaa'} });
