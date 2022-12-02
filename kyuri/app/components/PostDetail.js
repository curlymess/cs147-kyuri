import * as React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { palette } from '../../assets/Themes/palette';
import Icons from '../../assets/Icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Top from './Top';
import MedPedestal from './MedPedestal';
import PersonThumbnail from './PersonThumbnail';
import { ScrollView } from 'react-native-gesture-handler';
import CommentCard from './CommentCard';
const PostDetail = ({navigation, route}) => 
{
   console.log(route.params);
   const {postAuthor} = route.params;
   const {postTitle} = route.params;
   const {blogText} = route.params;
   const {profileImg} = route.params;
   const {age} = route.params;
   const {level} = route.params;
   const {username} = route.params;
   const {showCommentBttn} = route.params;
   

   let personDataObj = {
    name: postAuthor.author,
    username: username.username,
    image: profileImg.userImg,
    age: age.userAge,
    level: level.userLevel,
    mutuals: [
        require('../../assets/Icons/iris.png'),
        require('../../assets/Icons/tom.png'),
    ],
}
  return (
    
    <View style={styles.container}>
      <Top navigation={navigation}/>

      <View style={styles.postdetails}>
          <View style={styles.headerImg}>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={Icons.product5}
              >
              </MedPedestal>
            </View>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={Icons.product2}
              >
              </MedPedestal>
            </View>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={Icons.product3}
              >
              </MedPedestal>
            </View>
            <View style={styles.pedestalWrapper}>
              <MedPedestal
                url={Icons.product4}
              >
              </MedPedestal>
            </View>
          </View>
          <Text style={styles.title}>{postTitle.title}</Text>
          {!showCommentBttn && <View style={styles.tag}>
            <View style={styles.creamTag}><Text style={[styles.tagTxt, styles.blackTxt]}>Tag</Text></View>
            <View style={styles.blueTag}><Text style={styles.tagTxt}>Other-Tag</Text></View>
          </View>}
          <PersonThumbnail 
            name={personDataObj.name}
            username={personDataObj.username}
            image={personDataObj.image}
            age={personDataObj.age}
            level={personDataObj.level}
            mutuals={personDataObj.mutuals}
          >
          </PersonThumbnail>
          <ScrollView>
            <Text style={styles.text}>{blogText.postText}</Text>
            {!showCommentBttn && <Text style={styles.commentTxt}>Comments</Text>}

            {!showCommentBttn && <ScrollView style={styles.postsCard}   horizontal={true}>
                <CommentCard navigation={navigation} title={'I agree!'}         author={'user'} userImg={Icons.p4} productImg={Icons.p4} userAge={'22'} userLevel={'Novice'} username={'@user'} postText={'reviewwww'}/>
                <CommentCard navigation={navigation} title={'Not For Me...'}    author={'user'} userImg={Icons.p2} productImg={Icons.p2} userAge={'22'} userLevel={'Novice'} username={'@user'} postText={'reviewwww'}/>
                <CommentCard navigation={navigation} title={'Highly Recommend'} author={'user'}   userImg={Icons.p5}   productImg={Icons.p5} userAge={'22'} userLevel={'Novice'} username={'@user'} postText={'reviewwww'}/>
                <CommentCard navigation={navigation} title={'Yes!!!'}           author={'user'}   userImg={Icons.p6}   productImg={Icons.p6} userAge={'22'} userLevel={'Novice'} username={'@user'} postText={'reviewwww'}/>
                <CommentCard navigation={navigation} title={'Ehhhh'}            author={'user'}   userImg={Icons.p3}   productImg={Icons.p3} userAge={'22'} userLevel={'Novice'} username={'@user'} postText={'reviewwww'}/>
            </ScrollView>}

          </ScrollView>

         

      </View>
      
        
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    postdetails: {
      flex: 1,
      marginHorizontal: 10,
      position: 'relative',
      top: -23,
    },
    postsCard: {
      marginVertical: 10,
      flexDirection: 'row',
      
    },
    headerImg: {
      borderRadius: 8,
      backgroundColor: palette.cream,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: '10%',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 15,
      marginBottom: 3,
      fontFamily: 'MondaBold',
    },
    tag: {
      flexDirection: 'row', 
      marginBottom: 15,
      marginTop: 5,
    },
    blueTag: {
      backgroundColor: palette.blue,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    creamTag: {
      backgroundColor: palette.yellow,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    tagTxt: {
      fontSize: 10,
      color: palette.white,
      fontFamily: 'MondaBold',
    },
    blackTxt: {
      color: palette.black,
    },
    authorProfile: {

    },
    text: {
      fontSize: 12,
      marginBottom: 10,
      marginTop: 20,
      fontFamily: 'Monda',
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 3,
    },
    commentTxt: {
      padding: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 5,
      fontFamily: 'MondaBold',
    },
    whiteTxt: {
      color: palette.white,
      fontFamily: 'Monda',
    },
    pedestalWrapper: {
      position: 'relative',
      bottom: -8,
    }
});