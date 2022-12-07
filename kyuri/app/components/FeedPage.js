
import NewPostsStatus from "./NewPostsStatus";
import RecommendedProductsCard from "./RecommendedProductsCard";
export default function FeedPage({ navigation, posts }) {

    const feedStyles = StyleSheet.create({
      post: {
        flex: 1,
      },
      spacer: {
        height: 20,
      },
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
      newPostsWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        top:60,
        zIndex: 3,
        elevation: 3,
      },
    });
    return (
      <View style={feedStyles.container}>
        <Top style={feedStyles.head} noBack="true" navigation={navigation}/>
        <StatusBar style="auto" />
        <View style={feedStyles.newPostsWrapper}>
          <NewPostsStatus></NewPostsStatus>
        </View>
        <ScrollView>
          <View style={feedStyles.spacer}></View>
          <RecommendedProductsCard navigation={navigation}></RecommendedProductsCard>
          <FeedContent navigation={navigation} posts={posts} />
        </ScrollView>
        
      </View>    
    )
  }