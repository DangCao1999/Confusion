import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from "../shared/baseUrl";
import Loading from './LoadingComponent';
const mapStateToProps = state => {
    return {
        dishes: state.dishesReducer
    }
};

class Menu extends Component {

    render() {
        if (this.props.dishes.isLoading) {
            return (<Loading />);
        } else if (this.props.dishes.errMess) {
            return (<Text>{this.props.dishes.errMess}</Text>);
        } else {
            return (
                <FlatList data={this.props.dishes.dishes}
                    renderItem={({ item, index }) => this.renderMenuItem(item, index)}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }

    renderMenuItem(item, index) {
        const { navigate } = this.props.navigation;
        //print(item.image);
        //alert(item.image)
        return (
            <ListItem key={index} onPress={() => navigate("Dishdetail", { dishId: item.id })}>
                <Avatar source={{ uri: baseUrl + item.image }} />
                <ListItem.Content>
                    <ListItem.Title>
                        {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {item.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }
}

export default connect(mapStateToProps)(Menu);