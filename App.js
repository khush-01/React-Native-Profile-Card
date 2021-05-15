import React from 'react';
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class App extends React.Component {

  visitProfile() {
    Linking.openURL('https://github.com/khush-01')
  }

  render() {
    return (
      <View>
        <View style={styles.upperSection}>
          <LinearGradient start={{ x: 0, y: 0 }} colors={['#ff0291', '#2d00f7']} style={styles.linearGradient}>
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/56746162?v=4' }} style={styles.img} />
          </LinearGradient>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.name}>Khush Jain</Text>
          <Text style={styles.job}>Front End Web Developer</Text>
          <Text style={styles.description}>Non amet duis sint aliqua veniam laboris mollit excepteur commodo fugiat do. Ipsum amet mollit ex culpa non dolor non irure. Ea do veniam deserunt enim quis sit do. Amet occaecat deserunt fugiat enim excepteur dolor sit cupidatat sint. Eu eu deserunt incididunt amet qui. Culpa elit aliquip magna culpa ipsum adipisicing et elit nisi esse culpa id ullamco. Cillum deserunt dolore ut cillum velit id dolor pariatur ipsum aliquip ut ex. Qui dolor eiusmod qui deserunt dolor eu veniam eu. Adipisicing ipsum ad eu reprehenderit nostrud esse ipsum ex. Dolore fugiat dolore do fugiat non ea eu aute dolor. Esse in labore labore ipsum Lorem consectetur Lorem magna aliqua irure.</Text>
          <View>
            <TouchableOpacity onPress={this.visitProfile} style={styles.profileTouch}>
              <Text style={styles.profile}>Visit Profile</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.author}>Created by Khush Jain</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  upperSection: {
    height: deviceHeight / 4,
    width: deviceWidth,
  },
  bottomSection: {
    alignItems: 'center',
    height: 3 * (deviceHeight / 4),
    width: deviceWidth,
  },
  img: {
    borderRadius: 70,
    height: 120,
    marginLeft: deviceWidth / 2 - 60,
    marginTop: deviceHeight / 4 - 60,
    width: 120,
  },
  name: {
    fontSize: 24,
    marginTop: 80,
  },
  job: {
    color: '#2d00f7',
    fontSize: 20,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 22,
    paddingRight: 22,
    textAlign: 'justify',
  },
  profileTouch: {
    borderColor: '#2d00f7',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 30,
    padding: 13,
  },
  profile: {
    fontSize: 22,
  },
  author: {
    color: 'gray',
    fontSize: 10,
    marginTop: 20,
  }
})

export default App;
