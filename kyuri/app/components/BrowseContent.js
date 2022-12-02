import * as React from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, PlatformColor, FlatList, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { palette } from '../../assets/Themes/palette';
import Checkbox from '../../app/components/Checkbox.js';
import ProductThumbnail from '../../app/components/ProductThumbnail.js';
import PersonThumbnail from '../../app/components/PersonThumbnail.js';
import BrowseSlider from './BrowseSlider.js';
import Post from './Post.js';
import Icons from '../../assets/Icons';




import { useState } from 'react';

export default function BrowseContent(props) {
    let checkboxes = {list: [
        {
            key: 0,
            name: "Just Sample",
            content: [
                {
                    key: "Content",
                    active: false,
                    outer: 0,
                    inner: 0,
                }, 
                {
                    key: "to show the",
                    active: false,
                    outer: 0,
                    inner: 1,
                },
                {
                    key: "design",
                    active: false,
                    outer: 0,
                    inner: 2,
                }, 
                {
                    key: "...more",
                    active: false,
                    outer: 0,
                    inner: 3,
                }, 
                {
                    key: "coming soon!",
                    active: false,
                    outer: 0,
                    inner: 4,
                }, 
            ]
        },
        {
            key: 1,
            name: "Skin Type",
            content: [
                {
                    key: "Oily",
                    active: false,
                    outer: 1,
                    inner: 0,
                }, 
                {
                    key: "Dry",
                    active: false,
                    outer: 1,
                    inner: 1,
                },
                {
                    key: "Combination",
                    active: false,
                    outer: 1,
                    inner: 2,
                }
            ]
        },
    ]}

    const [checkbs, checkCallb] = useState(checkboxes);

    let personDataObj = {
        name: 'Iris B.',
        username: '@purplelove',
        image: require('../../assets/Icons/iris.png'),
        age: '76',
        level: 'Novice',
        mutuals: [
            require('../../assets/Icons/iris.png'),
            require('../../assets/Icons/tom.png'),
        ],
    }
    let productDataObj = {
        name: 'Cucumber Moisturizer',
        image: require('../../assets/ProductIcons/product5.png'),
        type: 'Moisturizer',
        rating: 4,
        usedBy: [
            require('../../assets/Icons/iris.png'),
            require('../../assets/Icons/tom.png'),
        ],
    }

    if (props.screen1Prop) {
        if (props.filterProp) {
            return (
                <View style={styles.filterPageContainer}>
                    <FlatList
                        style={styles.outerList}
                        numColumns={2}
                        data={checkbs.list}
                        renderItem={({item}) => 
                            <View style={styles.filterWrapper}>
                                <View style={styles.filterHeading}>
                                    <Text style={styles.filterHeadingText}>{item.name}</Text>
                                </View>
                                <View style={styles.filterContainer}>
                                    <FlatList
                                        data={item.content}
                                        renderItem={({item}) =>
                                            <Checkbox
                                                label={item.key}
                                                checked={item.active}
                                                fullState={checkbs}
                                                callback={checkCallb}
                                                outer={item.outer}
                                                inner={item.inner}
                                            ></Checkbox>
                                        }
                                    ></FlatList>
                                </View>
                            </View>
                        }
                    ></FlatList>
                </View>
            );        
        } else {
            return(
                <View style={styles.resultsContainer}>
                    <ProductThumbnail 
                        name={productDataObj.name}
                        image={productDataObj.image}
                        type={productDataObj.type}
                        rating={productDataObj.rating}
                        usedBy={productDataObj.usedBy}
                    >
                    </ProductThumbnail> 
                    <ProductThumbnail 
                        name={productDataObj.name}
                        image={productDataObj.image}
                        type={productDataObj.type}
                        rating={productDataObj.rating}
                        usedBy={productDataObj.usedBy}
                    >
                    </ProductThumbnail>                    
                    <ProductThumbnail 
                        name={productDataObj.name}
                        image={productDataObj.image}
                        type={productDataObj.type}
                        rating={productDataObj.rating}
                        usedBy={productDataObj.usedBy}
                    >
                    </ProductThumbnail>                    
                    <ProductThumbnail 
                        name={productDataObj.name}
                        image={productDataObj.image}
                        type={productDataObj.type}
                        rating={productDataObj.rating}
                        usedBy={productDataObj.usedBy}
                    >
                    </ProductThumbnail>                    
                    <ProductThumbnail 
                        name={productDataObj.name}
                        image={productDataObj.image}
                        type={productDataObj.type}
                        rating={productDataObj.rating}
                        usedBy={productDataObj.usedBy}
                    >
                    </ProductThumbnail>                    
                   
                </View>
            );
        }
    } else if (props.screen2Prop) {
        if (props.filterProp) {
            return (
                <View style={styles.filterPageContainer}>
                    <FlatList
                        style={styles.outerList}
                        numColumns={2}
                        data={checkbs.list}
                        renderItem={({item}) => 
                            <View style={styles.filterWrapper}>
                                <View style={styles.filterHeading}>
                                    <Text style={styles.filterHeadingText}>{item.name}</Text>
                                </View>
                                <View style={styles.filterContainer}>
                                    <FlatList
                                        data={item.content}
                                        renderItem={({item}) =>
                                            <Checkbox
                                                label={item.key}
                                                checked={item.active}
                                                fullState={checkbs}
                                                callback={checkCallb}
                                                outer={item.outer}
                                                inner={item.inner}
                                            ></Checkbox>
                                        }
                                    ></FlatList>
                                </View>
                            </View>
                        }
                    ></FlatList>
                    </View>
            );        
        } else {
            return(
                <View style={styles.resultsContainer}>
                    <PersonThumbnail 
                        name={personDataObj.name}
                        username={personDataObj.username}
                        image={personDataObj.image}
                        age={personDataObj.age}
                        level={personDataObj.level}
                        mutuals={personDataObj.mutuals}
                    >
                    </PersonThumbnail>  
                    <PersonThumbnail 
                        name={personDataObj.name}
                        username={personDataObj.username}
                        image={personDataObj.image}
                        age={personDataObj.age}
                        level={personDataObj.level}
                        mutuals={personDataObj.mutuals}
                    >
                    </PersonThumbnail>                    
                    <PersonThumbnail 
                        name={personDataObj.name}
                        username={personDataObj.username}
                        image={personDataObj.image}
                        age={personDataObj.age}
                        level={personDataObj.level}
                        mutuals={personDataObj.mutuals}
                    >
                    </PersonThumbnail>                    
                    <PersonThumbnail 
                        name={personDataObj.name}
                        username={personDataObj.username}
                        image={personDataObj.image}
                        age={personDataObj.age}
                        level={personDataObj.level}
                        mutuals={personDataObj.mutuals}
                    >
                    </PersonThumbnail>                    
                    <PersonThumbnail 
                        name={personDataObj.name}
                        username={personDataObj.username}
                        image={personDataObj.image}
                        age={personDataObj.age}
                        level={personDataObj.level}
                        mutuals={personDataObj.mutuals}
                    >
                    </PersonThumbnail>                    
                  
                </View>
            );
        }
    } else if (props.screen3Prop) {
        if (props.filterProp) {
            return (
                <View style={styles.filterPageContainer}>
                    <FlatList
                        style={styles.outerList}
                        numColumns={2}
                        data={checkbs.list}
                        renderItem={({item}) => 
                            <View style={styles.filterWrapper}>
                                <View style={styles.filterHeading}>
                                    <Text style={styles.filterHeadingText}>{item.name}</Text>
                                </View>
                                <View style={styles.filterContainer}>
                                    <FlatList
                                        data={item.content}
                                        renderItem={({item}) =>
                                            <Checkbox
                                                label={item.key}
                                                checked={item.active}
                                                fullState={checkbs}
                                                callback={checkCallb}
                                                outer={item.outer}
                                                inner={item.inner}
                                            ></Checkbox>
                                        }
                                    ></FlatList>
                                </View>
                            </View>
                        }
                    ></FlatList>
                </View>
            );        
        } else {
            return(
                <View style={styles.resultsContainer2}>
                    <ScrollView style={styles.postsScroll}> 
                        <Post postTime={'1 hour'}
                        title={'Top new products for you!'} author={'Kyuri'} postText={'Based on your interests we have some recommendations!'} userImg={Icons.logo} userAge={'24'} userLevel={'Novice'} username={'@kyuri'}/>
                        <Post postTime={'2 hours'}
                        title={'Consider coral reef-safe sunscreen'} author={'Benjamin W.'} userImg={Icons.p1} userAge={'36'} userLevel={'Expert'} username={'@EnviroBen'} postText={'While traditional sunscreens contain ocean-damaging chemicals, reef-friendly products allow us to soak up rays without harming the precious marine environments we are out to enjoy. Check out these alternative products!'}/>
                        <Post postTime={'5 hours'}
                        title={'My new winter routine'} author={'Alexandra W.'} userImg={Icons.p7} userAge={'76'} userLevel={'Novice'} username={'@purplelove'} postText={'Perfect for the cold weather :) I love the new routine I have developed. Normally in the winter, my skin feels dry, flakey, cold, and looks dull. I developed a new routine to counteract all that and want to share it with all of you!.'}/>
                        <Post postTime={'7 hours'}
                        title={'Why Everybody Should Use Retinol'} author={'Reyan'} userImg={Icons.p3} userAge={'24'} userLevel={'Expert'} username={'@ryanch'} postText={'Everybody who has heard of retinol tend to fall into two different categories. Either they are obsessed with it and swear by it or they are too scared to try it after hearing some of the retinol rumors. Although it is true that retionl can irritate your skin during initial use, dermatologists afree that any alternatives to retionol pale in comparioson to its magical results. Why? Retinol addresses a wide variety of skin complaints that there is not anyone who does not need it. \n But what is retinol? Retionl is a natural over-the-counter type of retinoid. Retunoid is a skincare ingredient that converts to retionoic acid-an active form of vitatmin A-in the skin. Its been shown over and over again to reduce fine lines and wrinkles and imporve tone and texture by increasing cell turnover and stimulating collagen production. \n What does Retinol do exactly? Well you should think about what retinol DOESNT do first! Retinol is a multi-purpose skincare ingreident that with regular use is known to: \n-> prevent acne by clearing the pores of debris and build-up \n->Stimulates and accelerates cell turnover which leads to cell renewal and brighter, smoother skin \n->Stimulates collagen production to firm the skin and prevent laxity. \n->Reduces hyperpigmentation by exfoliating skin surface cells, thus removing pigment.\n\nConsider adding Retinol into your routine NOW!'}/> 
                        <Post postTime={'13 hours'}
                        title={'What is clean beauty? An Answer.'} author={'Elizabeth N.'} userImg={Icons.p4} userAge={'28'} userLevel={'Intermediate'} username={'@cleanNclear'} postText={'Unless you are specifically talking about soap, it can be hard to locate a defintive definition of clean beauty. Most of the time, the descripter refers to cosmetic products that are free of what are to be considered harmful ingredients. Unfortunately, this definition is no regulated by any governing body so companies are free to use the label as they would please. \n Generally speaking, clean products are typically free of fragances, dyes, phthalates, sulfates, parabens, and cyclic silicones but it does matter what brand you are looking at.\n Research on ingreident safety is evoloving and the term is not regulated, but going after clean beauty can still be very worthwhile and provides many benefits over conventional products.\n Terms can be very confusing but here is what they mean in the skincare world: \n->Clean: Free of common chemicals that are considered by some to be toxins. These may include endocrine disruptors, heavy metals, parabens, phthalates, and other potentially harmful ingredients. \n->Organic: USDA-certified organic is a label typically reserved for foods; it’s regulated by the USDA. When applied to beauty product ingredients, it typically means the ingredient is made and processed according to strick government guidelines that regulate factors including soil quality, animal raising practices, pest and weed control, and use of additives. For these reasons, organic may be safer. However, there is no regulated definition of the term organic with respect to skincare products. \n->Green: Good for—or not entirely harmful—for the environment. Or literally, green (as in, green tea!).\n->Vegan: Made entirely without animal products (and sometimes, without animal testing).\n->Natural: Made mostly (or entirely) with ingredients derived from the earth.\nSustainable: Designed to curb environmental impact by reducing waste, be it from recycled product packaging or refillable packaging.'}/>
                        <Post postTime={'16 hours'}
                        title={'Flowers that make great ingredients!'} author={'Flora A.'} userImg={Icons.p5} userAge={'24'} userLevel={'Novice'} username={'@flowerpower'} postText={'Roses are red, violets are blue. But did you know that roses have cell rejuvenating properties that can minimize the appearance of scars, wrinkles and stretch marks too? If you’ve been a loyal follower of the eco-beauty trend, then you know that organic products are all about substituting synthetic chemicals with flower and plant extracts. But if you’re new to the green scene, you may be wondering why your moisturizer’s ingredients list is looking more like a garden.\n1. Rose\nRoses are known for their intense hydrating properties, which make them perfect for mature and dry skin. Rose extract is “a cell rejuvenator that helps minimize scars, stretch marks and wrinkles,” says beauty specialist and aromatherapist Janice Rosenthal, owner of Garden of Essences. “It heals broken veins and calms inflamed or sunburnt skin.”  \n2.Passion Flower\nPassion flower “contains lycopene, which assists skin that’s recovering from sun-induced damage, and is a top anti-aging component,” says Rosenthal. “It contains 72% linolenic acid (omega-3), making it effective against inflammation, redness, flakiness and eczema.” Native to the Amazon, passion flower oil or maracuja oil is rich in vitamin C, calcium and fatty acids, making it a perfect ingredient for products that are formulated to target dry, mature and cracked skin. This R+Co paste contains passion flower, which is a powerful ingredient in keeping hair and scalp healthy.\n3.Sunflower\nOne of the most versatile oils, sunflower oil works wonders for your hair and skin with its head-to-toe beauty applications. Because of its high linoleic acid content, sunflower oil is highly recommended for acne-prone skin. It’s also rich in antioxidants that help protect and restore damaged skin. Among its plethora of benefits are: moisturizes, hydrates and cleanses skin; relieves sunburn, redness and insect bites; lightens dark spots and pimple marks; smoothens underarms and lightens elbows and knees; smoothens soles of the feet and relaxes tired, puffy eyes.'}/>        
                        <Post postTime={'1 day'}
                        title={'How to Switch to a Natural Skin Care Routine'} author={'Julia M.'} userImg={Icons.p6} userAge={'22'} userLevel={'Intermediate'} username={'@meltz'} postText={'Going the natural beauty route means saving your skin from being exposed to harsh chemicals that are harmful to your body and leave a significant impact on the environment. By switching to natural beauty products, you are choosing cleaner and gentler products with superior quality ingredients containing vitamins and minerals that the body recognizes and absorbs as nutrients. Much like eating a diet of non-GMO food, natural skin care and beauty products feed and nourish your skin in a way that leaves it healthier over time. The use of organic and natural ingredients means these products are less likely to cause unwanted side effects or skin damage with long-term use while still being just as potent and effective as their synthetic counterparts. And because they don’t contain artificial colors, fragrances and synthetic preservatives, your skin is also less susceptible to irritations and allergic reactions. “People are beginning to understand the negative short- and long-term effects harsh, synthetic chemicals have on their bodies. Those who have already made the switch to natural skin care and beauty products are loving the results,” adds Dermstore beauty buyer for Natural and Spa categories, Ashley Vandyke.'}/>
                        <Post postTime={'2 days'}
                        title={'Adaptogens and Your Skin'} author={'Phillip I.'} userImg={Icons.p2} userAge={'19'} userLevel={'Novice'} username={'@lilTexas'} postText={'What are Adaptogens?\n Adaptogens are herbs that reduce fatigue and the toxic effects of stress. They’re called adaptogens because they adapt to what the body needs, “regulating the body rather than pushing it in one direction or the other,” explains Alan Dattner, MD, a holistic dermatologist in New Rochelle, New York. For example, Dr. Dattner continues, “some people need ginseng because their energy is down, while others need it because they’re too fired up to go to sleep.” \nThe term “adaptogen” was coined way back in 1947 by N.V. Lazarev, a Soviet pharmacologist. According to Lazarev, an adaptogen must not only regulate the body’s response to stress, but its effects must also be beneficial to the body’s overall well being, as well as nontoxic even with long-term use.\n\nHow do adaptogens work?\nSince the 1940s, thousands of studies have been done on adaptogens, primarily in the Soviet Union, Korea and China. Eleuthero (a.k.a Siberian ginseng), for example, has been found to increase the lifespan of single-cell animals, while rhodiola (a.k.a Arctic root) has been shown to reduce perceived fatigue in humans.\nThat said, adaptogens have not been approved for use by the FDA, and some question the methodology of the studies that have been done on the subject. However, others point to the long history of using adaptogenic remedies in the Chinese and Ayurvedic traditions and argue that the studies, if not definitively conclusive, are strongly suggestive.'}/>
                    </ScrollView>
                </View>
            );
        }
    } else {

    }
}
const styles = StyleSheet.create({
    filterPageContainer: {
        position: 'relative',
        top: -23,
        width: '100%',
    },
    filterWrapper: {
        flex: 1/2,
        marginHorizontal: 5,
    },
    filterHeading: {
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        marginBottom: 4,
    },
    filterHeadingText: {
        fontFamily: 'MondaBold',
        paddingBottom: 5,
    },
    outerList: {
        marginHorizontal: 8,
        marginTop: 5, 
    },
    resultsContainer: {
        position: 'relative',
        top: -15,
        marginHorizontal: 10,
    },
    resultsContainer2: {
        position: 'relative',
        top: -15,
    },
    postsScroll: {
        marginBottom: 30, 
    }
});
