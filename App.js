import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function App()
{
  return(
    <Swiper>
      <View style={styles.mainContainer}>
        <View style={styles.first}>
          <Image style={styles.img} source={require('./assets/1.png')} />
        </View>

        <View style={styles.second}>

          <View>
            <Text style={{fontSize: 36, marginTop: '10%'}}>Get Started</Text>
          </View>
          <View>
            <Text style={{marginTop: '5%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.first}>
          <Image style={styles.img} source={require('./assets/2.jpg')} />
        </View>

        <View style={styles.second}>

          <View>
            <Text style={{fontSize: 36, marginTop: '10%'}}>First Step</Text>
          </View>
          <View>
            <Text style={{marginTop: '5%'}}>Remove PropTypes: We're removing propTypes from core components in order to reduce the app size impact of React Native core and to favor static type systems which check at compile time instead of runtime.</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.first}>
          <Image style={styles.img} source={require('./assets/3.jpg')} />
        </View>

        <View style={styles.second}>

          <View>
            <Text style={{fontSize: 36, marginTop: '10%'}}>Finish</Text>
          </View>
          <View>
            <Text style={{marginTop: '5%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
          </View>
        </View>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  first: {
    flex: 3
  },
  second: {
    flex: 2,
    paddingHorizontal: '5%'
  },
  img: {
    flex:1,
    width: '90%',
    marginLeft: '5%',
    marginTop: '8%',
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100
  },
  footer: {
    flex: 1,
    marginTop: '5%',
    flexDirection: 'row',
    borderWidth: 2
  }
})