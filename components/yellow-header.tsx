import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export function YellowHeader() {
  return <View style={styles.header}><Ionicons name="menu-outline" size={33} color="#fff" /><Image source={require('@/assets/images/yellowlogo.svg')} style={styles.logo} contentFit="contain" /><View style={styles.actions}><Ionicons name="scale-outline" size={22} color="#ddd" /><Ionicons name="bag-outline" size={23} color="#ddd" /></View></View>;
}
const styles = StyleSheet.create({ header:{height:52,backgroundColor:'#1b1b1b',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16},logo:{width:103,height:35},actions:{flexDirection:'row',gap:15} });
