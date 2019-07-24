import React, { Component } from "react";
import styled from "styled-components";
import CoverBackground from "../../assets/background10.jpg";
import Icon from "react-native-vector-icons/Ionicons";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Animated,
  StatusBar,
  TouchableOpacity
} from "react-native";

class Menu extends Component {
  state = {
    top: new Animated.Value(900),
    items: [
      { id: 1, icon: "ios-settings", title: "Account", text: "settings" },
      { id: 2, icon: "ios-card", title: "Billing", text: "payments" },
      {
        id: 3,
        icon: "ios-compass",
        title: "Learn React",
        text: "start course"
      },
      { id: 4, icon: "ios-exit", title: "Log out", text: "see you soon!" }
    ]
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: 900
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TopHeader style={{ width: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%", position: "absolute" }}
            source={CoverBackground}
          />
          <HeaderContent>
            <UserName>Usman iqbal</UserName>
            <Email>usman.iqbal998@gmail.com</Email>
          </HeaderContent>
          <TouchableOpacity onPress={this.toggleMenu}>
            <CloseButton>
              <Icon name="ios-close" size={44} color="#546bfb" />
            </CloseButton>
          </TouchableOpacity>
        </TopHeader>

        <OptionsContainer>
          {this.state.items.map(option => (
            <OptionItem key={option.id}>
              <Icon name={option.icon} size={40} color="#546bfb" />
              <Option>
                <Text style={{ fontSize: 25 }}>{option.title}</Text>
                <Text style={{ color: "#C8C8C8", fontSize: 15 }}>
                  {option.text}
                </Text>
              </Option>
            </OptionItem>
          ))}
        </OptionsContainer>
      </AnimatedContainer>
    );
  }
}

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #fff;
`;
const AnimatedContainer = Animated.createAnimatedComponent(MainContainer);
const TopHeader = styled.View`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OptionsContainer = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 30px;
  padding-top: 80px;
`;

const OptionItem = styled.View`
  width: 100%;
  margin-left: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Option = styled.View`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  top: 3;
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
`;
const HeaderContent = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Email = styled.Text`
  color: #fff;
  font-size: 13px;
`;

const UserName = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
`;
export default Menu;
