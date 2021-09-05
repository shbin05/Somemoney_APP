import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as data from './data.json';
import logo from './logo.png'; 

function Home() {
  //console.log(data);
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <TouchableOpacity>
          <Image source={logo} style={styles.title} /> 
        </TouchableOpacity>
        <Text style={{width:120,}}></Text>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={35} color="white" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="cog" size={35} color="white" style={styles.icon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <TouchableOpacity style={{ width: "33.333%", backgroundColor: "rgb(0,150,250)", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
          <Text style={styles.buttonText}> 국내 종목뉴스</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "33.333%", backgroundColor: "rgb(0,100,200)", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
          <Text style={styles.buttonText}> 국내 장전뉴스</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "33.333%", backgroundColor: "purple", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
          <Text style={styles.buttonText}> 미국 종목뉴스</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <TouchableOpacity style={styles.news} 
            onPress={()=> WebBrowser.openBrowserAsync(data[0].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[0].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[0].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[0].color, borderColor: data[0].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[0].trend}</Text>
                  <Text style={styles.price}>{data[0].price}</Text>
                </View>
                  <Text style={styles.newsTitle}>{data[0].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[1].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[1].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[1].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[1].color, borderColor: data[1].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[1].trend}</Text>
                  <Text style={styles.price}>{data[1].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[1].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>[VaNSum 요약 결과]{"\n\n"}{data[1].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[2].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[2].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[2].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[2].color, borderColor: data[2].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[2].trend}</Text>
                  <Text style={styles.price}>{data[2].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[2].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[2].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[3].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[3].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[3].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[3].color, borderColor: data[3].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[3].trend}</Text>
                  <Text style={styles.price}>{data[3].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[3].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[3].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[4].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[4].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[4].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[4].color, borderColor: data[4].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[4].trend}</Text>
                  <Text style={styles.price}>{data[4].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[4].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[4].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[5].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[5].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[5].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[5].color, borderColor: data[5].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[5].trend}</Text>
                  <Text style={styles.price}>{data[5].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[5].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[5].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[6].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[6].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[6].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[6].color, borderColor: data[6].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[6].trend}</Text>
                  <Text style={styles.price}>{data[6].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[6].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[6].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[7].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[7].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[7].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[7].color, borderColor: data[7].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[7].trend}</Text>
                  <Text style={styles.price}>{data[7].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[7].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[7].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[8].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[8].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[8].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[8].color, borderColor: data[8].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>
                  {data[8].trend}</Text>
                  <Text style={styles.price}>{data[8].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[8].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[8].summary}</Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.news}
            onPress={()=> WebBrowser.openBrowserAsync(data[9].link)}
          >
            <View style={styles.section}>
              <Image source={{ uri: data[9].img }} style={styles.image} />
              <View style={{flexDirection: 'column',}}>
                <Text style={styles.company}>{data[9].company}</Text>
                <View style={styles.section}>
                  <Text style={{color: data[9].color, borderColor: data[9].color, fontSize: 15, marginLeft: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[9].trend}</Text>
                  <Text style={styles.price}>{data[9].price}</Text>
                </View>
                <Text style={styles.newsTitle}>{data[9].title}</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop: 10,}} onPress={()=>setShouldShow(!shouldShow)}>
                <Text style={{backgroundColor: 'white', paddingLeft: 165, paddingRight: 165, borderRadius: 10}}>▼</Text>
            </TouchableOpacity>
            {shouldShow ? (null) : ( 
            <Text style={styles.summary}>{data[9].summary}</Text>)}
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}

/*function Info(props) {
  const index = props.navigation.getParam('index')
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View style={styles2.container}>
        <StatusBar style="auto" />
        <View style={styles2.top}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image source={logo} style={styles2.title} /> 
          </TouchableOpacity>
          <Text style={{width:120,}}></Text>
          <TouchableOpacity>
            <FontAwesome name="user-circle" size={35} color="white" style={styles2.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="cog" size={35} color="white" style={styles2.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles2.option}>
          <TouchableOpacity style={{ width: "33.333%", backgroundColor: "rgb(0,150,250)", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
            <Text style={styles2.buttonText}> 국내 종목뉴스</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "33.333%", backgroundColor: "rgb(0,100,200)", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
            <Text style={styles2.buttonText}> 국내 장전뉴스</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "33.333%", backgroundColor: "purple", justifyContent: 'center', textAlign: 'center', borderWidth: 1, borderColor: 'black'}}>
            <Text style={styles2.buttonText}> 미국 종목뉴스</Text>
          </TouchableOpacity>
        </View>
        <View style={styles2.content}>
            <ScrollView>
                <Text style={styles2.newsTitle}>{data[index].title}</Text>
                <Text style={{borderTopWidth: 1, borderTopColor: 'black', marginTop: 10, marginLeft: 20, marginRight: 20}}></Text>
                <Text style={styles2.company}>{data[index].company}</Text>
                  <View style={styles2.section}>
                    <Text style={{color: data[index].color, borderColor: data[index].color, fontSize: 15, marginTop: 5, marginRight: 15, padding: 3, borderWidth: 1, borderRadius: 10,}}>{data[index].trend}</Text>
                    <Text style={styles2.price}>{data[index].price}</Text>
                  </View>
                <Text style={{borderTopWidth: 1, borderTopColor: 'black', marginTop: 10, marginLeft: 20, marginRight:20,}}></Text>
                <Text style={{fontSize: 15, fontWeight: "700", marginLeft:20, marginBottom: 10}}>요약 결과</Text>
                <Text style={styles2.summary}>{data[index].summary}</Text>
                {shouldShow ? (null) : (<Text style={styles2.news}>{data[index].news}</Text>)}
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={()=>setShouldShow(!shouldShow)}>
                        <Text style={styles2.look}>본문 보기</Text>
                    </TouchableOpacity>
                    <Text style={{width:210}}></Text>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Text style={styles2.back}>Back</Text> 
                    </TouchableOpacity>
                </View>  
            </ScrollView>
            
        </View>
    </View>
  );
}*/

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: {headerShown: false}},
    //Info: { screen: Info, navigationOptions: {headerShown: false}},
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    width: "100%",
    height: "30%",
    top: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 150,
  },
  icon: {
    marginTop: 35,
    marginRight: 20,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: "700",
    fontSize: 20,
  },
  content: {
    flex: 6,
  },
  news: {
    backgroundColor: 'rgb(225,225,225)',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  newsTitle: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 5,
    width: 235,
  },
  company: {
    fontSize: 15,
    fontWeight:"700",
    marginLeft: 5,
  },
  section: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  }, 
  price: {
    fontSize: 15,
    marginTop: 3,
  },
  summary: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  }
});

/*const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    width: "100%",
    height: "30%",
    top: 20,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 150,
  },
  icon: {
    marginTop: 35,
    marginRight: 20,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: "700",
    fontSize: 20,
  },
  content: {
    flex: 6,
  },
  newsTitle: {
      fontSize: 20,
      fontWeight: "700",
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
  },
  company: {
      fontSize: 15,
      fontWeight:"700",
      marginLeft: 20,
  },
  section: {
      flexDirection: 'row',
      marginLeft:20,
  },
  price: {
    marginTop: 8,
    fontSize: 15,
  },
  summary: {
      backgroundColor: 'rgb(225,225,225)',
      padding: 10,
      borderRadius: 10,
      fontSize: 15,
      marginLeft: 20,
      marginRight: 20,
  },
  news: {
    backgroundColor: 'rgb(225,225,225)',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  look: {
    fontSize: 15,
    fontWeight: "700",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  back: {
    fontSize: 15,
    fontWeight: "700",
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});*/