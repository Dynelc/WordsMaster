import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Words from '../../Shared/Words';
import styles from '../Level1/styles';

const Level1 = () => {
  const list = Words.Words;
  const [Word, setWord] = useState([]);
  const [letters, setLetters] = useState([]);
  const [answer, setAnswer] = useState('');
  const [letters_5, setLetters_5] = useState(['']);
  const [letters_4, setLetters_4] = useState([]);
  const [letters_3, setLetters_3] = useState([]);
  const [Wordloading, setWordLoading] = useState(true);

  useEffect(() => {
    wordShuffle();
  }, []);

  useEffect(() => {
    if (Word.length > 0) {
      letterShuffle();
    }
  }, [Word]);

  const wordShuffle = () => {
    let array = [...list];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setWord(array);
  };

  const letterShuffle = () => {
    let array = [...Word[0].word];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setLetters(array);
  };

  const checkAnswer = (id) => {
    if (id === 5) {
      setLetters_5(answer);
      setAnswer('');
    } else if (id === 4) {
      let array = [...letters_4];
      array.push(answer);
      setLetters_4(array);
      setAnswer('');
    } else if (id === 3) {
      let array = [...letters_3];
      array.push(answer);
      setLetters_3(array);
    }
  };

  const renderWords = () => {
    if (Word.length > 0) {
      return (
        <View style={{flex: 1}}>
          <View style={styles.scrambledwordContainer}>
            <Text style={styles.scrambledwordText}>{letters}</Text>
          </View>
          <View style={styles.answerContainer}>
            <View style={styles.individualBox}>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_5[0] ? letters_5 : '?'}
                </Text>
              </View>
            </View>
            <View style={styles.individualBox}>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_4[0] ? letters_4[0] : '?'}
                </Text>
              </View>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_4[1] ? letters_4[1] : '?'}
                </Text>
              </View>
            </View>
            <View style={styles.individualBox}>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_3[0] ? letters_3[0] : '?'}
                </Text>
              </View>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_3[1] ? letters_3[1] : '?'}
                </Text>
              </View>
              <View style={styles.textAnswerContainer}>
                <Text style={styles.answerText}>
                  {letters_3[2] ? letters_3[2] : '?'}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Enter Five Letters Word</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAnswer(text)}
                placeholder={'5 Letters'}
                autoCapitalize={'none'}
              />
              <View>
                <Icon
                  onPress={() => {
                    checkAnswer((id = 5));
                  }}
                  name="check"
                  style={styles.fontIcon}
                />
              </View>
            </View>
          </View>
          <View>
            <Text>Enter Four Letters Word</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAnswer(text)}
                placeholder={'4 Letters'}
                autoCapitalize={'none'}
              />
              <View>
                <Icon
                  onPress={() => {
                    checkAnswer((id = 4));
                  }}
                  name="check"
                  style={styles.fontIcon}
                />
              </View>
            </View>
          </View>
          <View>
            <Text>Enter Three Letters Word</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setAnswer(text)}
                placeholder={'3 Letters'}
                autoCapitalize={'none'}
              />
              <View>
                <Icon
                  onPress={() => {
                    checkAnswer((id = 3));
                  }}
                  name="check"
                  style={styles.fontIcon}
                />
              </View>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WordsScramble</Text>
      </View>
      {Wordloading ? renderWords() : null}
    </KeyboardAwareScrollView>
  );
};

export default Level1;
