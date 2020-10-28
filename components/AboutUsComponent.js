import { connect } from 'react-redux';
const mapStatetoProps = state => {
    return {
        leaders: state.leadersReducer
    }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import { LEADERS } from '../shared/leaders';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
class History extends Component {
    render() {
        return (
            <Card>
                <Card.Title>
                    Our History
                </Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                </Text>
                <Text>
                    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
                </Text>
            </Card>
        );
    }
}
class LeaderShip extends Component {

    render() {
        if (this.props.isLoading) {
            return (
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            );
        } else if (this.props.errMess) {
            return (
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <Text>{this.props.errMess}</Text>
                </Card>
            );
        } else {
            return (
                <FlatList data={this.props.leaders}
                    renderItem={({ item, index }) => this.renderLeader(item, index)}
                    keyExtractor={(item) => item.id.toString()}
                />

            );
        }
    }
    renderLeader(item, index) {
        return (
            <ListItem key={index}>
                <Avatar source={{ uri: baseUrl + item.image }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }
}

class About extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         leaders: LEADERS,
    //     };
    // }
    render() {
        return (
            <ScrollView>
                <History></History>
                <Card>
                    <Card.Title>
                        Corporate LeaderShip
                    </Card.Title>
                    <Card.Divider />
                    <LeaderShip leaders={this.props.leaders.leaders}
                    isLoading={this.props.leaders.isLoading}
                    errMess={this.props.leaders.errMess}></LeaderShip>
                </Card>
            </ScrollView>
        )
    }

}


// export default connect(mapStatetoProps)(About);
export default connect(mapStatetoProps)(About);