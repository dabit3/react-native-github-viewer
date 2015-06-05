var React = require('react-native');
var Separator = require('./Separator');

var {
    View,
    WebView,
    StyleSheet
    } = React;

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f6f6ef',
        flexDirection: 'column'
    }
})

class Web_View extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView url={this.props.url} />
            </View>
        )
    }
}

WebView.propTypes = {
    url: React.PropTypes.string.isRequired
}

module.exports = Web_View;