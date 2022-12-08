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
import { useEffect, useState } from 'react';

const PostDetail = ({navigation, route}) => 
{
   const {postAuthor} = route.params;
   const {postTitle} = route.params;
   const {blogText} = route.params;
   const {profileImg} = route.params;
   const {age} = route.params;
   const {level} = route.params;
   const {username} = route.params;
   const {showCommentBttn} = route.params;
   const {postType} = route.params;
   const {yellowTagTxt} = route.params;
   const {blueTagTxt} = route.params;
   const {hideTags} = route.params;

   let [commentsCollapsed, setCommentsCollapsed] = useState(true);

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

  console.log(hideTags.hideTags)
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
          
          
          <ScrollView style={styles.commentCardContainer}>
          {!hideTags.hideTags && <View style={styles.tag}>
              <View style={styles.tagBttn}><Text style={styles.tagTxt}>{postType.postType}</Text></View>
              <View style={styles.tagBttn}><Text style={styles.tagTxt}>{blueTagTxt.blueTagTxt}</Text></View>
              <View style={styles.tagBttn}><Text style={styles.tagTxt}>{yellowTagTxt.yellowTagTxt}</Text></View>
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
            <Text style={styles.text}>{blogText.postText}</Text>
            {!showCommentBttn && <View style={styles.commentsContainer}>
                    <View style={styles.commentButtonsContainer}>
                        <Pressable 
                            style={styles.commentCollapseWrapper}
                            onPress={() => {
                                setCommentsCollapsed(!commentsCollapsed);
                            }}
                        >   
                            <Text style={styles.commentTxt}>Comments</Text>
                            <Ionicons
                                size={24}
                                color={palette.lightBrown}
                                name={!commentsCollapsed ? 'caret-down-outline' : 'caret-back-outline'}
                            ></Ionicons>
                        </Pressable>
                        <Pressable 
                            style={styles.commentAddWrapper}
                        >   
                            <Text style={styles.commentTxt}>New Comment</Text>
                            <Ionicons
                                size={28}
                                color={palette.white}
                                name='add'
                            ></Ionicons>
                        </Pressable>

                    </View>
                    {!commentsCollapsed && <View style={styles.postsCard}>
                        <CommentCard title={'I agree!'}         userImg={Icons.p4} userAge={'22'} username={'@alphaBeth'} postText={'they are so right'}/>
                        <CommentCard title={'Not For Me...'}    userImg={Icons.p2} username={'@loiswee'} postText={'I understand why other people like this'}/>
                        <CommentCard title={'Highly Recommend'} userImg={Icons.p5} username={'@terranimal'} postText={'Highly recommend this post!!!'}/>
                        <CommentCard title={'Yes!!!'}           userImg={Icons.p6} username={'@skinXpert'} postText={'everything they said is a YES!'}/>
                        <CommentCard title={'Ehhhh'}            userImg={Icons.p3} username={'@proH8r'} postText={'Maybe but I do not believe it'}/>
                    </View>}

            </View>}


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
    },
    postsCard: {
      marginVertical: 10,
      marginBottom: 0,
    },
    headerImg: {
      borderRadius: 8,
      backgroundColor: palette.cream,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: '10%',
      alignItems: 'center',
      position: 'relative',
      top: -23,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.10,
      shadowRadius: 1.41,

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
    tagBttn: {
      backgroundColor: palette.blueTag,
      borderColor: palette.blue,
      borderWidth: 1,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    blueTag: {
      backgroundColor: palette.blue,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    creamTag: {
      backgroundColor: palette.cream,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    yellowTag: {
      backgroundColor: palette.yellow,
      padding: 3,
      paddingHorizontal: 15,
      borderRadius: 20,
      marginRight: 3,
    },
    tagTxt: {
      fontSize: 10,
      color: palette.black,
      fontFamily: 'MondaBold',
    },
    blackTxt: {
      color: palette.black,
    },
    authorProfile: {

    },
    text: {
      fontSize: 16,
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
      borderRadius: 20,
      marginRight: 2,
      fontFamily: 'MondaBold',
      color: palette.white,
      fontSize: 12,
    },
    whiteTxt: {
      color: palette.white,
      fontFamily: 'Monda',
    },
    pedestalWrapper: {
      position: 'relative',
      bottom: -8,
    },
    commentButtonsContainer: {
      flexDirection: 'row',
      marginTop: 20,
  },
  commentCollapseWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 3,
      paddingRight: 8,
      backgroundColor: palette.darkBrown,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      justifyContent: 'space-between',

  },
  commentAddWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingRight: 3,
      paddingVertical: 3,
      backgroundColor: palette.green,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      justifyContent: 'space-between',
      marginLeft: 10,

  },

});