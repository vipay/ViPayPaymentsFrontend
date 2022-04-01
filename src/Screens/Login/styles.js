import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: moderateScale(24),

  },
  experienceText: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.medium,
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(16),
  },
  btnStyle: {
    backgroundColor: colors.lighPink,
    alignSelf: 'center',
    marginTop: moderateScaleVertical(16),
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24),
  },
  inputfield: {
    flexDirection: 'row',
    backgroundColor: colors.grayinput,
    marginTop: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    justifyContent: 'space-between',
    borderRadius: 16,
    height:moderateScale(56),
    alignItems:"center"
  },
  welcomeback: {
    ...commonStyles.fontSize16,
    fontStyle: fontFamily.poppinsRegular,
    marginTop: moderateScale(24),
    color: colors.gray,
  },
  welcomebacktxt: {
    fontSize: 24,
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.RocGroteskBold,
    // marginVertical:moderateScaleVertical(5)
  },
  locationcode: {
    ...commonStyles.fontSize15,
    fontFamily: fontFamily.poppinsRegular,
    // marginRight: moderateScale(15),
    color: colors.OBSIDIAN,
    


  },
  phoneNo: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    marginLeft: moderateScale(15),
    fontFamily: fontFamily.poppinsRegular,
    flex: 1,
  },
  inputline: {
    borderLeftWidth: 1,
    borderColor: colors.D9D9D9,
  },
  getotp: {
    ...commonStyles.fontSize15,
    color: colors.lightgray,
    alignSelf: 'center',
    fontFamily: fontFamily.poppinsRegular
    // backgroundColor:'yellow'
  },
  otpholder: {
    backgroundColor: colors.grayinput,
    marginTop: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    borderRadius: 16,
    height:moderateScale(56),
    justifyContent:"center"
  },
  otp: {
    ...commonStyles.fontSize15,
    color: colors.OBSIDIAN,
    fontFamily: fontFamily.poppinsRegular,

  },
  termsCond: {
    ...commonStyles.fontSize12,
    marginTop: moderateScale(48),
    textAlign: 'center',
    color: colors.OBSIDIAN,
    marginBottom: moderateScale(16),
    fontFamily:fontFamily.poppinsRegular
  },
  terms: {
    ...commonStyles.fontSize12,
    color: colors.greenterms,
    textDecorationLine: 'underline',
    fontFamily:fontFamily.poppinsRegular
  },
  subinputfield: {
    flexDirection: 'row',
    flex: 1,
  },
  countrypicker:{
    // marginHorizontal:moderateScale(16),
    flex:0.4,
    alignItems:'center',
    alignContent:"center",
    justifyContent:'center'
    
  }
});

export default styles;