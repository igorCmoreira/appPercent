import React, {useState} from "react";
import { View, SafeAreaView, Text, TextInput, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import TxtOptions from './Radio/txtOptions';
import ImgOptions from "./Radio/imgOption";
import Mostrador from "./Table/mostrador";

const Work = () => {
  const [CurrencyV, setCurrencyValue] = useState('');
  const [txtSelected, setTxtselected] = useState();
  const [imgSelected, setImgselected] = useState();
  const [totalD, setTD] = useState(0);
  const [totalC, setTC] = useState(0);
  const [total, setTotal] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [hiden, setHiden] = useState(true);
  const [coin, setCoin] = useState();
  const [pre, setPre] = useState([]);
  const [preC, setPreC] = useState([])

  const selectedImage = (value, i) => {
    setCurrencyValue(value);
    if(parseInt(value) === 0) {
      setHiden(false);
    } else {
      setCurrencyValue(value);
      setHiden(true);
    };
    setImgselected(i);
  };

  const getCurrency = () => parseFloat(CurrencyV);
  const getTotal = () => parseFloat(total);
  const getCoint = () => String(coin);
  const getTD = () => parseFloat(totalD);
  const getTC = () => parseFloat(totalC);
  const getPre = () => pre;
  const getPreC = () => preC;

  const nextBnt = () => {
    const p = getPre();
    const pc = getPreC();
    const currency = getCurrency();
    const t = getTotal();
    const cc = getCoint()
    if(cc === 'Dinheiro') {
      const d = getTD();
      setTD(d+currency);
      const att = t+currency
      setTotal(att);
      const percent = (25*att)/100;
      setPorcentagem(percent.toFixed(2));
      p.push(currency);
      pc.push(cc);
    };
    if(cc== 'Cartão') {
      const c = getTC();
      setTC(c+currency);
      const att = t+currency
      setTotal(att);
      const percent = (25*att)/100;
      setPorcentagem(percent.toFixed(2));
      p.push(currency);
      pc.push(cc);
    };
    setCurrencyValue(0);
    setCoin();
    setHiden(true);
    setTxtselected();
    setImgselected();
  }

  const backBnt = () => {
    const p = getPre();
    const pc = getPreC();
    const t = getTotal();
    console.log(p);
    console.log(pc);
    if (p.length !== 0) {
      const pp = p.pop();
      const ppc = pc.pop();
      if(ppc === 'Dinheiro') {
        const d = getTD();
        setTD(d-pp);
      };
      if(ppc== 'Cartão') {
        const c = getTC();
        setTC(c-pp);
      };
      const att = t-pp;
      setTotal(att);
      const percent = (25*att)/100;
      setPorcentagem(percent.toFixed(2));

    }

    
  }

  return (
    <SafeAreaView>
        <Mostrador options={[{name: 'dinheiro', value: totalD},
          {name: 'cartão', value: totalC},
          {name: '% salão', value: porcentagem},
          {name: 'total', value: total}]}
          />
      <View>
        {/* icons in https://icons8.com.br/ */}
        <ImgOptions
          options={[{uri:require('../image/pe.png'), value:30},
            {uri: require('../image/mao.png'), value:24},
            {uri: require('../image/pe-mao.png'), value:50},
            {uri:require('../image/outros.png'), value:0}]}
          onChangeSelectImg={(({value}, i)=> {
            selectedImage(value,i)
            })}
          horizontal={true}
          selected={imgSelected}
        />
        <TextInput
          style={hiden? styles.inputHiden : styles.inputNoHiden}
          onChangeText={setCurrencyValue}
          value={CurrencyV}
          keyboardType="numeric"
          placeholder="--R$--"
        />
      </View>
      <View>
        <TxtOptions 
          options={['Dinheiro', 'Cartão']}
          onChangeSelect={((item, i)=> {
            setTxtselected(i);
            setCoin(item);
            })}
          horizontal={true}
          selected={txtSelected}
        />
      </View>
      <View style={styles.horizontal}>
      <TouchableOpacity style={styles.btnBack} onPress={()=> backBnt()}>
          <Text style={styles.bntTextB}>
            VOLTAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnNEXT}
          onPress={()=>nextBnt()}
        >
          <Text 
            style={styles.bntText}
            >
            PROXIMO
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  inputHiden: {
    width:0,
    height: 0,
  },
  inputNoHiden: {
    marginHorizontal:30,
    textAlign: 'center',
    fontSize:29,
    fontWeight: 'bold',
    height: 50,
    borderColor:'#fa748f',
    borderRadius:20,
    borderWidth: 4,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnBack: {
    marginVertical:10,
    width:170,
    height:60,
    marginHorizontal:5,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:20,
    borderColor: 'red',
    borderWidth: 2,
  },
  btnNEXT: {
    marginVertical:10,
    width:170,
    height:60,
    marginHorizontal:5,
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:20,
    backgroundColor: '#44a936'
  },
  bntText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize:16,
    fontWeight: 'bold'
  },
  bntTextB: {
    textTransform: 'uppercase',
    color: 'red',
    fontSize:16,
    fontWeight: 'bold'
  }
})

export default Work;