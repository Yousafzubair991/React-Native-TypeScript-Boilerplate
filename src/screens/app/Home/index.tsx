import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import authToken from "../../../api/authToken";
import { removeJwtToken } from "../../../redux/jwt.slice";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    console.log("Logout");
    await authToken.removeToken();
    dispatch(removeJwtToken());
  };

  return (
    <View>
      <Text>USER IS LOGGED IN</Text>
      <Button
        title="Logout"
        color={"red"}
        onPress={() => {
          handleLogout();
        }}
      />
    </View>
  );
};

export default Home;
