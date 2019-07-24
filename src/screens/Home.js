import React, { Fragment, Component } from "react";
import styled from "styled-components";
import profileimage from "../../assets/avatar.jpg";
import Card from "../components/Card";
import { NotificationIcon } from "../components/Icons";
import Menu from "../components/Menu";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import ToolCards from "../components/ToolCards";

class HomeScreen extends Component {
  state = {
    cards: [
      {
        id: 0,
        title: "React Native for Designers",
        image: require("../../assets/background11.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 sections",
        logo: require("../../assets/logo-react.png")
      },
      {
        id: 1,
        title: "Styled Components",
        image: require("../../assets/background12.jpg"),
        subtitle: "React Native",
        caption: "2 of 12 sections",
        logo: require("../../assets/logo-react.png")
      },
      {
        id: 2,
        title: "Props and Icons",
        image: require("../../assets/background13.jpg"),
        subtitle: "React Native",
        caption: "3 of 12 sections",
        logo: require("../../assets/logo-react.png")
      },
      {
        id: 3,
        title: "Static Data and Loop",
        image: require("../../assets/background14.jpg"),
        subtitle: "React Native",
        caption: "4 of 12 sections",
        logo: require("../../assets/logo-react.png")
      }
    ],
    tools: [
      {
        id: 1,
        image: require("../../assets/logo-framerx.png"),
        text: "Framer X"
      },
      { id: 2, image: require("../../assets/logo-figma.png"), text: "Figma" },
      { id: 3, image: require("../../assets/logo-studio.png"), text: "Studio" },
      { id: 4, image: require("../../assets/logo-react.png"), text: "React" },
      { id: 5, image: require("../../assets/logo-swift.png"), text: "Swift" },
      { id: 6, image: require("../../assets/logo-sketch.png"), text: "Sketch" }
    ]
  };

  render() {
    return (
      <Fragment>
        <MainContainer>
          <Menu style={{ position: "absolute", top: 0 }} />{" "}
          {
            //This Menu component is not displaying
            //but working properly seperatly when i call from
            //App.js
          }
          <TopBar>
            <ProfileImage source={profileimage} />
            <Text style={{ fontSize: 16, lineHeight: 16, marginLeft: 14 }}>
              Welcome Back,{"\n"}Usman
            </Text>
            <NotificationIcon style={{ position: "absolute", right: 20 }} />
          </TopBar>
          <ToolsContainer>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {this.state.tools.map(tool => (
                <ToolCards key={tool.id} image={tool.image} text={tool.text} />
              ))}
            </ScrollView>
          </ToolsContainer>
          <CoursesContainer>
            <Text
              style={{
                color: "#C8C8C8",
                fontSize: 18,
                paddingLeft: 20,
                top: 10
              }}
            >
              Continue Learning
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {this.state.cards.map(card => (
                <Card
                  key={card.id}
                  title={card.title}
                  coverimage={card.image}
                  subtitle={card.subtitle}
                  caption={card.caption}
                  subjlogo={card.logo}
                />
              ))}
            </ScrollView>
          </CoursesContainer>
        </MainContainer>
      </Fragment>
    );
  }
}

const MainContainer = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TopBar = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;

const CoursesContainer = styled.View`
  height: 340px;
  width: 100%;
`;

const ToolsContainer = styled.View`
  height: 70px;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export default HomeScreen;
