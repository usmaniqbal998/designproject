import React, { Component } from "react";
import styled from "styled-components";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

const Card = props => {
  return (
    <CardContainer>
      <Cover>
        {/* <CoverTitleContainer> */}
        <Text
          source={props.coverimage}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            width: 150,
            color: "#fff",
            fontSize: 24,
            fontWeight: "600",
            zIndex: 5
          }}
        >
          {props.title}
        </Text>
        {/* </CoverTitleContainer> */}
        <CoverImage source={props.coverimage} />
      </Cover>
      <InfoContainer>
        <CourseLogo source={props.subjlogo} />
        <TitleContainer>
          <Text style={{ fontSize: 18, marginLeft: 12 }}>{props.title}</Text>
          <Text style={{ color: "#C8C8C8", fontSize: 14, marginLeft: 12 }}>
            {props.subtitle}
          </Text>
        </TitleContainer>
      </InfoContainer>
    </CardContainer>
  );
};

const CardContainer = styled.View`
  background-color: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
`;

const TitleContainer = styled.View`
  display: flex;
  width: 100%;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

CourseLogo = styled.Image`
  width: 44px;
  height: 44px;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  align-items: center;
  padding-left: 16px;
`;

export default Card;
