import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: '20@ms',
  },
  scrambledwordContainer: {
    margin: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrambledwordText: {
    fontSize: '25@ms',
  },
  answerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  individualBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAnswerContainer: {
    borderWidth: '1@ms',
    borderColor: 'black',
    margin: '2@ms',
    height: '40@ms',
    width: '80@ms',
  },
  answerText: {
    textAlign: 'center',
    fontSize: '20@ms',
    padding: '5@ms',
  },
  fontIcon: {
    fontSize: '35@ms',
    paddingHorizontal: '5@ms',
    color: '#900',
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {height: '40@ms', borderColor: 'gray', borderWidth: 1, flex: 1},
});

export default styles;
