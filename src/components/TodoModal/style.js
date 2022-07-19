import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: wp(80),
    borderRadius: wp(3),
    marginBottom: hp(15),
  },
  cancel: {
    width: wp(5),
    height: wp(5),
    alignSelf: 'flex-end',
    margin: wp(4),
  },
  titleInput: {
    width: wp(70),
    alignSelf: 'center',
    paddingLeft: wp(2),
  },
  input: {
    width: wp(70),
    textAlignVertical: 'top',
    alignSelf: 'center',
    marginTop: hp(1),
    borderWidth: wp(0.5),
    borderColor: '#ddd',
    paddingLeft: wp(2),
  },
  btnContent: {
    backgroundColor: '#F4A600',
    marginTop: hp(5),
    marginBottom: hp(2),
    marginHorizontal: hp(13),
    padding: wp(2),
    borderRadius: wp(0.7),
  },
  btn: {
    color: '#fff',
    alignSelf: 'center',
  },
});

export default styles;
