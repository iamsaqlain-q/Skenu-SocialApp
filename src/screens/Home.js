/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigations/AuthProvider';
import {Text} from 'react-native';
import Colors from '../constants/Colors';

const Home = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const [stories, setStories] = useState([
    {
      id: 1,
      url: 'https://firebasestorage.googleapis.com/v0/b/fun-do-notes.appspot.com/o/girl2.png?alt=media&token=392f536c-d2ff-427f-a265-ccfbc6c9dcfa',
    },
    {
      id: 2,
      url: 'https://firebasestorage.googleapis.com/v0/b/fun-do-notes.appspot.com/o/girl3.png?alt=media&token=d634dfe3-243f-48fb-aaf5-606a7572c4c4',
    },
    {
      id: 3,
      url: 'https://firebasestorage.googleapis.com/v0/b/fun-do-notes.appspot.com/o/girl4.png?alt=media&token=4b7fa990-c9b4-4053-af4f-ae2722b41a95',
    },
    {
      id: 4,
      url: 'https://firebasestorage.googleapis.com/v0/b/fun-do-notes.appspot.com/o/girl5.png?alt=media&token=b7dab8cd-93ef-42e7-ab85-ed39947583c9',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Ionicons name="add-circle-outline" color="#333333" size={27} />
        </View>

        <View style={styles.logo}>
          <Text style={styles.logoText}>1 &gt; 0</Text>
        </View>
        <View>
          <Image
            source={require('../assets/send.png')}
            style={{width: 20.45, height: 20.45}}
          />
        </View>
      </View>
      <View style={styles.addStory}>
        <View style={{marginVertical: 19, marginHorizontal: 9}}>
          <Image
            source={require('../assets/girl1.png')}
            style={{width: 63, height: 63, borderRadius: 63 / 2}}
          />
          <View style={styles.addBtn}>
            <Ionicons name="add-circle" color="#F8E358" size={17} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={stories}
            keyExtractor={item => item.id}
            horizontal={true}
            renderItem={({item}) => (
              <Image source={{uri: item.url}} style={styles.list} />
            )}
          />
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../assets/post1.jpg')}
            style={{width: 416, height: 437}}
          />
        </View>

        <View style={styles.optionView}>
          <View
            style={{flexDirection: 'row', width: '50%', marginHorizontal: 170}}>
            <Ionicons
              name="heart-outline"
              color="#333333"
              size={21}
              style={{margin: 5}}
            />
            <Ionicons
              name="chatbubble-outline"
              color="#333333"
              size={20}
              style={{margin: 5}}
            />
            <Ionicons
              name="arrow-redo-outline"
              color="#333333"
              size={20}
              style={{margin: 5}}
            />
          </View>
          <View style={{flexDirection: 'row', width: '50%'}}>
            <Ionicons name="bookmark-outline" color="#333333" size={20} />
          </View>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" color="#333333" size={20} />
        <Ionicons name="heart-outline" color="#333333" size={20} />
        <Ionicons name="arrow-redo-outline" color="#333333" size={20} />
        <Ionicons name="chatbubble-outline" color="#333333" size={20} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserDetails');
          }}>
          <Ionicons name="person-outline" color="#333333" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}>
          <Ionicons name="log-out-outline" color="#333333" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 33,
    height: 33,
    backgroundColor: '#C29551',
    borderWidth: 1.5,
    borderRadius: 25,
    transform: [{scaleX: 1.5}],
  },
  logoText: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.white,
  },
  addStory: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  addBtn: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 43,
  },
  list: {
    width: 63,
    height: 63,
    borderRadius: 63 / 2,
    marginRight: 7,
    borderWidth: 2,
    borderColor: '#F8E358',
  },
  optionView: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  bottomBar: {
    width: '100%',
    height: 94,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
