import React from 'react'
import { inject, observer } from 'mobx-react/native';
import NewsListItem from '../newsListItem';
import {Container, Content, ListItem, Body, Text, Header, Left, Right, Button, Icon} from 'native-base';
import FooterTabs from '../footerTabs';
import styles from './styles'
import { getBills } from '../../stores/appState'

const NewsList = (props) => {

    return (
        <Container style={styles.container}>
            <Header hasTabs style={styles.header} backgroundColor={styles.header.backgroundColor}>
                <Left>
                    {/*<Button transparent*/}
                            {/*onPress={() => {console.log("menu")}}>*/}
                        {/*<Image source={require('../../images/Menu.png')} style={styles.menuButton}/>*/}
                    {/*</Button>*/}
                </Left>
                <Body>
                <Text style={styles.title}>News</Text>
                </Body>
                <Right>
                    {/*<Button transparent*/}
                            {/*onPress={() => {console.log("open drawer")}}>*/}
                        {/*<Icon name='md-search' style={{fontSize: 24, color: "white"}}/>*/}
                    {/*</Button>*/}
                </Right>
            </Header>
            <Content>
                {
                    props.appState.bills.map((bill) => {
                        return (
                            <NewsListItem news={bill} key={bill.uid}/>
                        )
                    })
                }
            </Content>
            {/*<FooterTabs/>*/}
        </Container>
    )
};

export default inject("appState")(observer(NewsList));