import { Ionicons } from '@expo/vector-icons';
import { useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export type FilterState = { memory: string | null; sim: string | null; color: string | null; maxPrice: number };
type Props = { value: FilterState; onChange: (next: FilterState) => void };
const maxOptions = [60000, 70000, 80000];

function FilterRow({ title, expanded, onPress, children }: { title: string; expanded: boolean; onPress: () => void; children?: ReactNode }) {
  return <View style={styles.section}><Pressable onPress={onPress} style={styles.sectionHead}><Text style={styles.sectionTitle}>{title}</Text><Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={17} color="#666" /></Pressable>{expanded && children}</View>;
}
function Choice({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
  return <Pressable onPress={onPress} style={[styles.choice, selected && styles.choiceActive]}><Text style={[styles.choiceText, selected && styles.choiceTextActive]}>{label}</Text></Pressable>;
}
export function CatalogFilters({ value, onChange }: Props) {
  const [section, setSection] = useState<string | null>('price');
  const toggle = (name: string) => setSection(section === name ? null : name);
  const change = (key: keyof FilterState, next: string | number | null) => onChange({ ...value, [key]: next });
  return <View style={styles.box}>
    <FilterRow title="Ціна" expanded={section === 'price'} onPress={() => toggle('price')}>
      <View style={styles.track}><View style={[styles.fill, { width: `${((value.maxPrice - 54000) / 26000) * 100}%` }]} /><View style={[styles.knob, { left: `${((value.maxPrice - 54000) / 26000) * 100}%` }]} /></View>
      <View style={styles.priceLabels}><Text>54 149 грн</Text><Text>{value.maxPrice.toLocaleString('uk-UA')} грн</Text><Text>80 000 грн</Text></View>
      <View style={styles.choices}>{maxOptions.map((price) => <Choice key={price} label={`до ${(price / 1000).toFixed(0)} тис.`} selected={value.maxPrice === price} onPress={() => change('maxPrice', price)} />)}</View>
    </FilterRow>
    <FilterRow title="Серія" expanded={section === 'series'} onPress={() => toggle('series')}><Text style={styles.fixed}>iPhone 17 Pro</Text></FilterRow>
    <FilterRow title="Вбудована пам’ять" expanded={section === 'memory'} onPress={() => toggle('memory')}><View style={styles.choices}>{['256Gb','512Gb','1 Тб'].map((item) => <Choice key={item} label={item} selected={value.memory === item} onPress={() => change('memory', value.memory === item ? null : item)} />)}</View></FilterRow>
    <FilterRow title="Кількість SIM-карт" expanded={section === 'sim'} onPress={() => toggle('sim')}><View style={styles.choices}>{['eSIM','1 SIM + eSIM'].map((item) => <Choice key={item} label={item} selected={value.sim === item} onPress={() => change('sim', value.sim === item ? null : item)} />)}</View></FilterRow>
    <FilterRow title="Оперативна пам’ять" expanded={section === 'ram'} onPress={() => toggle('ram')}><Text style={styles.fixed}>12 ГБ</Text></FilterRow>
    <FilterRow title="Колір" expanded={section === 'color'} onPress={() => toggle('color')}><View style={styles.choices}>{['Silver','Blue','Orange'].map((item) => <Choice key={item} label={item} selected={value.color === item} onPress={() => change('color', value.color === item ? null : item)} />)}</View></FilterRow>
  </View>;
}
const styles = StyleSheet.create({ box:{borderWidth:1,borderColor:'#e5e5e5',borderRadius:4,marginTop:8,paddingHorizontal:14},section:{borderBottomWidth:1,borderColor:'#e8e8e8'},sectionHead:{height:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},sectionTitle:{fontSize:13,fontWeight:'700',color:'#626262'},track:{height:4,backgroundColor:'#e8e8e8',borderRadius:3,marginTop:8,position:'relative'},fill:{height:4,backgroundColor:'#ffd000',borderRadius:3},knob:{position:'absolute',top:-5,width:14,height:14,borderRadius:7,backgroundColor:'#fff',borderWidth:2,borderColor:'#ffc900',marginLeft:-7},priceLabels:{flexDirection:'row',justifyContent:'space-between',marginTop:10},fixed:{fontSize:13,color:'#555',paddingBottom:13},choices:{flexDirection:'row',flexWrap:'wrap',gap:7,paddingBottom:13,marginTop:10},choice:{borderWidth:1,borderColor:'#dedede',borderRadius:15,paddingHorizontal:11,paddingVertical:6},choiceActive:{borderColor:'#5e51ff',backgroundColor:'#f3f1ff'},choiceText:{fontSize:12,color:'#555'},choiceTextActive:{color:'#5e51ff',fontWeight:'700'} });
