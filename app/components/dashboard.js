var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var api = require('../utils/api');

var {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
    } = React

var styles = StyleSheet.create({
    container: {
        marginTop:65,
        flex:1
    },
    image: {
        height:350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

class Dashboard extends React.Component{

    makeBg (btn){

        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }

        if(btn == 0) {
            obj.backgroundColor = '#48BBEC'
        } else if(btn == 1) {
            obj.backgroundColor = '#E77AAE'
        } else if(btn == 2) {
            obj.backgroundColor = '#758BF4'
        }

        return obj
    }

    goToProfile() {
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        })
    };

    goToRepos() {
        api.getRepos(this.props.userInfo.login)
            .then((res) => {
                this.props.navigator.push({
                    component: Repositories,
                    title: 'Repositories Page',
                    passProps: {
                        userInfo: this.props.userInfo,
                        repos: res
                    }
                });
        });
    };

    goToNotes() {

    };

    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
                <TouchableHighlight
                    style={this.makeBg(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88d4f5'>
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBg(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88d4f5'>
                    <Text style={styles.buttonText}
                    >View Repos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBg(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88d4f5'>
                    <Text style={styles.buttonText}
                    >View Notes </Text>

                </TouchableHighlight>
            </View>
        )
    }

};

module.exports = Dashboard