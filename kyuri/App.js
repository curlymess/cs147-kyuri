import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, PlatformColor, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Icons from './assets/Icons';
import themes from './assets/Themes/themes';
import { palette } from './assets/Themes/palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ***** Componets ******* 
import {Top} from './app/components';
import { Post } from './app/components';
//Browse page components
import BrowseSearchBar from './app/components/BrowseSearchBar.js';
import Auth from './app/components/Auth.js';
import { useState } from 'react';

import BrowseContent from './app/components/BrowseContent.js';
import BrowseSlider from './app/components/BrowseSlider.js';

import PostDetail from './app/components/PostDetail';
import PostCard from './app/components/PostCard';
import Routine from './app/components/Routine';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import 'react-native-url-polyfill/auto'
import { Icon } from 'react-native-elements';

function Feed({ navigation }) {
  let personDataObj = {
    name: 'Iris B.',
    username: '@purplelove',
    image: Icons.iris,
    age: '76',
    level: 'Novice',
    mutuals: [
        Icons.iris,
        Icons.tom,
    ],
  }

  const feedStyles = StyleSheet.create({
    myProfileCard: {
      flex: 1,
      flexDirection: 'row',
      maxHeight: 100,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: palette.darkBrown,
      justifyContent:'space-around',
      alignItems: 'center',
      borderRadius: 8,
    },
    myProfileTxt: {
      color: palette.white,
    },
    myprofileBttn: {
      backgroundColor: palette.green,
      alignSelf: 'flex-end',
      paddingBottom: 10,
      padding: 5,
      borderRadius: 8,
    },
    post: {
      flex: 1,
      
    }
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true" navigation={navigation}/>
      <StatusBar style="auto" />

      <ScrollView> 
        <Post style={feedStyles.post} navigation={navigation} postTime={'1 hour'}
          title={'Top new products for you!'} author={'Kyuri'} postText={'Based on your interests we have some recommendations!'} userImg={Icons.logo} userAge={'24'} userLevel={'Novice'} username={'@kyuri'}/>
        <Post style={feedStyles.post} navigation={navigation} postTime={'2 hours'}
          title={'Consider coral reef-safe sunscreen'} author={'Benjamin W.'} userImg={Icons.p1} userAge={'36'} userLevel={'Expert'} username={'@EnviroBen'} postText={'While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow us to soak up rays without harming the precious marine environments we are out to enjoy. Check out these alternative products!'}/>
        <Post style={feedStyles.post} navigation={navigation} postTime={'5 hours'}
          title={'My new winter routine'} author={'Alexandra W.'} userImg={Icons.p7} userAge={'76'} userLevel={'Novice'} username={'@purplelove'} postText={'Perfect for the cold weather :) I love the new routine I have developed. Normally in the winter, my skin feels dry, flakey, cold, and looks dull. I developed a new routine to counteract all that and want to share it with all of you!.'}/>
        <Post style={feedStyles.post} navigation={navigation} postTime={'7 hours'}
          title={'Why Everybody Should Use Retinol'} author={'Reyan'} userImg={Icons.p3} userAge={'24'} userLevel={'Expert'} username={'@ryanch'} postText={'Everybody who has heard of retinol tend to fall into two different categories. Either they are obsessed with it and swear by it or they are too scared to try it after hearing some of the retinol rumors. Although it is true that retionl can irritate your skin during initial use, dermatologists afree that any alternatives to retionol pale in comparioson to its magical results. Why? Retinol addresses a wide variety of skin complaints that there is not anyone who does not need it. \n But what is retinol? Retionl is a natural over-the-counter type of retinoid. Retunoid is a skincare ingredient that converts to retionoic acid-an active form of vitatmin A-in the skin. Its been shown over and over again to reduce fine lines and wrinkles and imporve tone and texture by increasing cell turnover and stimulating collagen production. \n What does Retinol do exactly? Well you should think about what retinol DOESNT do first! Retinol is a multi-purpose skincare ingreident that with regular use is known to: \n-> prevent acne by clearing the pores of debris and build-up \n->Stimulates and accelerates cell turnover which leads to cell renewal and brighter, smoother skin \n->Stimulates collagen production to firm the skin and prevent laxity. \n->Reduces hyperpigmentation by exfoliating skin surface cells, thus removing pigment.\n\nConsider adding Retinol into your routine NOW!'}/> 
        <Post style={feedStyles.post} navigation={navigation} postTime={'13 hours'}
          title={'What is clean beauty? An Answer.'} author={'Elizabeth N.'} userImg={Icons.p4} userAge={'28'} userLevel={'Intermediate'} username={'@cleanNclear'} postText={'Unless you are specifically talking about soap, it can be hard to locate a defintive definition of clean beauty. Most of the time, the descripter refers to cosmetic products that are free of what are to be considered harmful ingredients. Unfortunately, this definition is no regulated by any governing body so companies are free to use the label as they would please. \n Generally speaking, clean products are typically free of fragances, dyes, phthalates, sulfates, parabens, and cyclic silicones but it does matter what brand you are looking at.\n Research on ingreident safety is evoloving and the term is not regulated, but going after clean beauty can still be very worthwhile and provides many benefits over conventional products.\n Terms can be very confusing but here is what they mean in the skincare world: \n->Clean: Free of common chemicals that are considered by some to be toxins. These may include endocrine disruptors, heavy metals, parabens, phthalates, and other potentially harmful ingredients. \n->Organic: USDA-certified organic is a label typically reserved for foods; it’s regulated by the USDA. When applied to beauty product ingredients, it typically means the ingredient is made and processed according to strick government guidelines that regulate factors including soil quality, animal raising practices, pest and weed control, and use of additives. For these reasons, organic may be safer. However, there is no regulated definition of the term organic with respect to skincare products. \n->Green: Good for—or not entirely harmful—for the environment. Or literally, green (as in, green tea!).\n->Vegan: Made entirely without animal products (and sometimes, without animal testing).\n->Natural: Made mostly (or entirely) with ingredients derived from the earth.\nSustainable: Designed to curb environmental impact by reducing waste, be it from recycled product packaging or refillable packaging.'}/>
        <Post style={feedStyles.post} navigation={navigation} postTime={'16 hours'}
          title={'Flowers that make great ingredients!'} author={'Flora A.'} userImg={Icons.p5} userAge={'24'} userLevel={'Novice'} username={'@flowerpower'} postText={'Roses are red, violets are blue. But did you know that roses have cell rejuvenating properties that can minimize the appearance of scars, wrinkles and stretch marks too? If you’ve been a loyal follower of the eco-beauty trend, then you know that organic products are all about substituting synthetic chemicals with flower and plant extracts. But if you’re new to the green scene, you may be wondering why your moisturizer’s ingredients list is looking more like a garden.\n1. Rose\nRoses are known for their intense hydrating properties, which make them perfect for mature and dry skin. Rose extract is “a cell rejuvenator that helps minimize scars, stretch marks and wrinkles,” says beauty specialist and aromatherapist Janice Rosenthal, owner of Garden of Essences. “It heals broken veins and calms inflamed or sunburnt skin.”  \n2.Passion Flower\nPassion flower “contains lycopene, which assists skin that’s recovering from sun-induced damage, and is a top anti-aging component,” says Rosenthal. “It contains 72% linolenic acid (omega-3), making it effective against inflammation, redness, flakiness and eczema.” Native to the Amazon, passion flower oil or maracuja oil is rich in vitamin C, calcium and fatty acids, making it a perfect ingredient for products that are formulated to target dry, mature and cracked skin. This R+Co paste contains passion flower, which is a powerful ingredient in keeping hair and scalp healthy.\n3.Sunflower\nOne of the most versatile oils, sunflower oil works wonders for your hair and skin with its head-to-toe beauty applications. Because of its high linoleic acid content, sunflower oil is highly recommended for acne-prone skin. It’s also rich in antioxidants that help protect and restore damaged skin. Among its plethora of benefits are: moisturizes, hydrates and cleanses skin; relieves sunburn, redness and insect bites; lightens dark spots and pimple marks; smoothens underarms and lightens elbows and knees; smoothens soles of the feet and relaxes tired, puffy eyes.'}/>        
        <Post style={feedStyles.post} navigation={navigation} postTime={'1 day'}
          title={'How to Switch to a Natural Skin Care Routine'} author={'Julia M.'} userImg={Icons.p6} userAge={'22'} userLevel={'Intermediate'} username={'@meltz'} postText={'Going the natural beauty route means saving your skin from being exposed to harsh chemicals that are harmful to your body and leave a significant impact on the environment. By switching to natural beauty products, you are choosing cleaner and gentler products with superior quality ingredients containing vitamins and minerals that the body recognizes and absorbs as nutrients. Much like eating a diet of non-GMO food, natural skin care and beauty products feed and nourish your skin in a way that leaves it healthier over time. The use of organic and natural ingredients means these products are less likely to cause unwanted side effects or skin damage with long-term use while still being just as potent and effective as their synthetic counterparts. And because they don’t contain artificial colors, fragrances and synthetic preservatives, your skin is also less susceptible to irritations and allergic reactions. “People are beginning to understand the negative short- and long-term effects harsh, synthetic chemicals have on their bodies. Those who have already made the switch to natural skin care and beauty products are loving the results,” adds Dermstore beauty buyer for Natural and Spa categories, Ashley Vandyke.'}/>
        <Post style={feedStyles.post} navigation={navigation} postTime={'2 days'}
          title={'Adaptogens and Your Skin'} author={'Phillip I.'} userImg={Icons.p2} userAge={'19'} userLevel={'Novice'} username={'@lilTexas'} postText={'What are Adaptogens?\n Adaptogens are herbs that reduce fatigue and the toxic effects of stress. They’re called adaptogens because they adapt to what the body needs, “regulating the body rather than pushing it in one direction or the other,” explains Alan Dattner, MD, a holistic dermatologist in New Rochelle, New York. For example, Dr. Dattner continues, “some people need ginseng because their energy is down, while others need it because they’re too fired up to go to sleep.” \nThe term “adaptogen” was coined way back in 1947 by N.V. Lazarev, a Soviet pharmacologist. According to Lazarev, an adaptogen must not only regulate the body’s response to stress, but its effects must also be beneficial to the body’s overall well being, as well as nontoxic even with long-term use.\n\nHow do adaptogens work?\nSince the 1940s, thousands of studies have been done on adaptogens, primarily in the Soviet Union, Korea and China. Eleuthero (a.k.a Siberian ginseng), for example, has been found to increase the lifespan of single-cell animals, while rhodiola (a.k.a Arctic root) has been shown to reduce perceived fatigue in humans.\nThat said, adaptogens have not been approved for use by the FDA, and some question the methodology of the studies that have been done on the subject. However, others point to the long history of using adaptogenic remedies in the Chinese and Ayurvedic traditions and argue that the studies, if not definitively conclusive, are strongly suggestive.'}/>
      </ScrollView>
         

      
    </View>    
  )
}

function Browse() {
  const [screen1, toggleScreen1] = useState(true);
  const [screen2, toggleScreen2] = useState(false);
  const [screen3, toggleScreen3] = useState(false);
  const [filter, toggleFilter] = useState(false);
  console.log(screen1);
  return (
  <View style={styles.container}>
    <Top style={styles.head} noBack="true"/>
    <StatusBar style="auto"/>
    <BrowseSearchBar 
      filterProp={filter} 
      filterCallback={toggleFilter}
    >
    </BrowseSearchBar>
    <BrowseSlider
          s1={screen1} 
          s2={screen2} 
          s3={screen3}
          c1={toggleScreen1} 
          c2={toggleScreen2} 
          c3={toggleScreen3} 
    >
    </BrowseSlider>
    <BrowseContent
      screen1Prop={screen1} 
      screen2Prop={screen2} 
      screen3Prop={screen3}
      filterProp={filter} 
    >
    </BrowseContent>
  </View>  
  );
}

function Profile( {navigation} ){
  const author = "author";
  const title = "title";
  const postText = "postText";
  const profileStyles = StyleSheet.create({
    myProfileCard: {
      flex: 1,
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 10,
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: palette.darkBrown,
      justifyContent:'space-around',
      
    },
    profileTxt: {
      width: '50%',
    },
    myProfileTxt: {
      color: palette.white,
      fontSize: 12,
      fontFamily: 'Monda',
    },
    myProfileTxtName: {
      color: palette.white,
      fontSize: 24,
      fontFamily: 'MondaBold',
    },
    routineCard: {
      backgroundColor: palette.cream,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    postsCard: {
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
    },
    heading: {
      marginLeft: 10,
      fontFamily: 'MondaBold',
    },  
    routineTxt: {
      fontFamily: 'MondaBold',
      fontSize: 18,
    },
    viewRoutineTxt: {
      fontFamily: 'Monda',
      alignSelf: 'center',
      color: palette.green,
    },
  });
  return (
    <View style={styles.container}>
      <Top style={styles.head} noBack="true"/>
      <StatusBar style="auto" />

      <View style ={styles.container}>
        <View style={profileStyles.myProfileCard}>
          <Image source={Icons.tom}/>
          <View style={profileStyles.profileTxt}>
            <Text style={profileStyles.myProfileTxtName}>Tom S.</Text>
            <Text style={profileStyles.myProfileTxt}>@TaheeShahee</Text>
            <Text style={profileStyles.myProfileTxt}>Age 22</Text>
            <Text style={profileStyles.myProfileTxt}>Ethnicity W</Text>
            <Text style={profileStyles.myProfileTxt}>Level Novice</Text>
          </View>
        </View>
      </View>

      <View style={profileStyles.routineCard}>
        <View>
          <Text style={profileStyles.routineTxt}>Current Routine:</Text>
          <Text style={profileStyles.routineTxt}>Create your first routine!</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Routine')}>
          <Ionicons name={'add-circle-outline'} size={40} color={palette.green} />
        </Pressable>
      </View>
      <Text style={profileStyles.viewRoutineTxt}>View other routines</Text>

      <Text style={profileStyles.heading}>My Posts</Text>
      <ScrollView style={profileStyles.postsCard}   horizontal={true}>

        <PostCard navigation={navigation} title={'Coral-Reef Safe Sunscreen Review'} author={'Tom S.'} userImg={Icons.tom} productImg={Icons.product1} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'We bought this as scuba divers and snorkellers concerned that regular sun creams have ingredients that are poisonous to aquatic creatures. After reading reviews about alternative, non-harmful creams - and looking to see which are available in the UK - we went for this one. I can certainly say it works as a factor 50 cream. Would recommend to anyone doing watersports with a conscience.'}/>
        <PostCard navigation={navigation} title={'Help with my routine?'}     author={'Tom S.'} userImg={Icons.tom} productImg={Icons.tom} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I am new to this'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product3} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product4} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
        <PostCard navigation={navigation} title={'Zucchini Sunscreen Review'} author={'Tom S.'}   userImg={Icons.tom}   productImg={Icons.product5} userAge={'22'} userLevel={'Novice'} username={'@TaheeShahee'} postText={'I love it!'}/>
      </ScrollView>

    </View>  
    );
}

const Tab = createBottomTabNavigator();

function NavContainer(){
  const navstyles = StyleSheet.create({
    
  });
  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Feed'}
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Browse') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: palette.cream,
        tabBarInactiveTintColor: palette.darkBrown,

        tabBarActiveBackgroundColor: palette.green,
        tabBarInactiveBackgroundColor: palette.green,
           style: {
                 backgroundColor: palette.cream,
                 paddingBottom: 3
           }

      })}
      >
        <Tab.Screen name="Feed" options={{headerShown: false}} component={Feed} />
        <Tab.Screen name="Browse" options={{headerShown: false}} component={Browse} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        <Tab.Screen name="PostDetail" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={PostDetail} />
        <Tab.Screen name="Routine" options={{headerShown: false, tabBarButton: () => null, tabBarVisible: false,}} component={Routine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  let [fontsLoaded] = useFonts({
    Rosmatika: require('./assets/Fonts/RosmatikaRegular-BWA45.ttf'),
    Monda: require('./assets/Fonts/Monda-Regular.ttf'),
    MondaBold: require('./assets/Fonts/Monda-Bold.ttf'),
});

  let contentDisplayed = null;
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if ( isLoggedIn ){
    contentDisplayed = <NavContainer/>
  } else {
    contentDisplayed = <Auth setIsLoggedIn={setIsLoggedIn}/>
  }

  if (!fontsLoaded) return <AppLoading />;

return (
  <SafeAreaView style={styles.greenbg}>
   {/* {contentDisplayed} */}
   <NavContainer/>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  greenbg: {
    flex: 1,
    backgroundColor: palette.green,
  },

  head: {
    flex: 1,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    maxWidth: 30,
    marginRight: 5,
  },

});
