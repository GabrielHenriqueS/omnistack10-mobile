import styled from "styled-components/native";
import MapView from "react-native-maps";


export const Map = styled(MapView)`
  flex: 1;
`;
export const Avatar = styled.Image`
  width: 54px; 
  height: 54px;
  borderRadius: 27px;
  borderWidth: 4px;
  borderColor: #fff;
`;

export const CalloutView = styled.View`
  width: 260px;
`;
export const DevName = styled.Text`
  fontWeight: bold;
  fontSize: 16px;
`;
export const DevBio = styled.Text`
  color: #666;
  marginTop: 5px;
`;
export const DevTechs = styled.Text`
  marginTop: 5px;
`;

export const SearchForm = styled.View`
  position: absolute;
  top: 50px;
  left: 20px;
  right: 20px;
  zIndex: 5;
  flexDirection: row;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  backgroundColor: #FFF;
  color: #333;
  borderRadius: 25px;
  paddingHorizontal: 20px;
  fontSize: 16px;
  shadowColor: #000;
  shadowOpacity: 0.2;
  shadowOffset: 4px;
  elevation: 2;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  backgroundColor: #8e4dff;
  borderRadius: 25px;
  justifyContent: center;
  alignItems: center;
  marginLeft: 15px;
`;