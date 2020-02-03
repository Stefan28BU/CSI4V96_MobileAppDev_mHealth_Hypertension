import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

export const BackButton = ({ navigation }) => {
    const onPress = () => navigation.goBack();

    return (
        <Icon
            color={'white'}
            // containerStyle={styles.backButton}
            name="chevron-left"
            onPress={onPress}
            size={30}
        />
    );
};

export const MHealthBackBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.mHealthContBack, style]}>
            <Icon
                color={'#40e0d0'}
                containerStyle={styles.mIconBack}
                name="expand-more"
                size={60}
            />
            {/* <Text style={[styles.mHealthText, textStyle]}>{props.title}</Text> */}
        </TouchableOpacity>
    );
};

export const MHealthBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.mHealthCont, style]}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradStyle}>
                <Icon
                    color={'rgba(255,255,255,0.8)'}
                    containerStyle={styles.mIcon}
                    name="expand-less"
                    size={60}
                />
                <Text style={[styles.mHealthText, textStyle]}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export const SignInBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.signInCont, style]}>
            <Text style={[styles.signInText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const SignUpBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.signUpCont, style]}>
            <Text style={[styles.signUpText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const PlayBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.playCont, style]}>
            <Text style={[styles.playText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const VideoButton = (props) => {
    const { title = {}, style = {}, imageStyle = {}, onPress } = props;


    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.videoBtnContainer, style]}>
            {/* <Image
                style={[styles.videoCoverImage, imageStyle]}
                source={require('../imageAssets/amg_gt63s.jpg')}
            /> */}
            <Text>Video</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mIconBack: {
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },
    mIcon: {
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },
    mHealthContBack: {
        display: 'flex',
        minHeight: '10%',
        minWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 10,
    },
    mHealthCont: {
        display: 'flex',
        minHeight: '10%',
        minWidth: '100%',
        // padding: 50,
        // borderColor: '#40e0d0',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 20,
    },
    gradStyle: {
        // margin: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
    },
    mHealthText: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 70,
        alignSelf: 'center',
        color: 'white',
        // backgroundColor: 'black',
    },
    videoBtnContainer: {
        height: 250,
        minWidth: '101%',
        maxWidth: '105%',
        marginBottom: 20,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    videoCoverImage: {
        flex: 1,
        resizeMode: "contain",
    },
    signUpCont: {
        display: 'flex',
        minHeight: '12%',
        minWidth: '85%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        borderColor: '#40e0d0',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    signUpText: {
        fontSize: 16,
        color: '#40e0d0',
        textTransform: 'uppercase'
    },
    signInCont: {
        display: 'flex',
        minHeight: '12%',
        minWidth: '85%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        // borderTopLeftRadius: 99999999,
        // borderTopRightRadius: 99999999,
        // borderBottomLeftRadius: 2,
        // borderBottomRightRadius: 2,

        // borderWidth: 1,
        // borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40e0d0'
    },
    signInText: {
        fontSize: 16,
        color: 'black',
        textTransform: 'uppercase'
    },
    playCont: {
        display: 'flex',
        minHeight: '12%',
        minWidth: '85%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#40e0d0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
        // backgroundColor: '#40e0d0',
        // backgroundColor: 'rgba(0,0,0,0.75)'
        // borderBottomLeftRadius: 99999999,
        // borderBottomRightRadius: 99999999,
        // borderTopRightRadius: 2,
        // borderTopLeftRadius: 2,
    },

    playText: {
        fontSize: 16,
        color: '#40e0d0',
        textTransform: 'uppercase'
    },
});
