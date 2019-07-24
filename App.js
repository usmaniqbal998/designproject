/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";

import { SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home";
import ToolCards from "./src/components/ToolCards";
import Menu from "./src/components/Menu";

class App extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView>
        {/* <Menu style={{ position: "absolute", top: 0 }} />{" "} */}
        {/* Menu Component Working Properly here */}

        <HomeScreen />
      </SafeAreaView>
    );
  }
}

export default App;
