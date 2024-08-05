import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../styles';

const OrderQuiz = ({ question, selectedOptions, setSelectedOptions, animatedValues, buttonRefs }) => {
  const slotRefs = useRef([]).current;

  useEffect(() => {
    // Reset all animated values to { x: 0, y: 0 }
    animatedValues.forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });
  }, [question]);

  const selectOption = (option, index) => {
    const slotIndex = selectedOptions.indexOf(option);
    if (slotIndex !== -1) {
      // Remove option from selectedOptions
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[slotIndex] = null;
      setSelectedOptions(newSelectedOptions);
      // Animate back to original position
      buttonRefs[index].measure((fx, fy, width, height, px, py) => {
        Animated.timing(animatedValues[index], {
          toValue: { x: 0, y: 0 },
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    } else {
      // Find first available slot
      const emptyIndex = selectedOptions.findIndex(option => option === null);
      if (emptyIndex !== -1) {
        // Add option to selectedOptions
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[emptyIndex] = option;
        setSelectedOptions(newSelectedOptions);
        // Animate to slot position
        buttonRefs[index].measure((fx, fy, width, height, px, py) => {
          slotRefs[emptyIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
            Animated.timing(animatedValues[index], {
              toValue: { x: spx - px, y: spy - py },
              duration: 300,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start();
          });
        });
      }
    }
  };

  return (
    <View>
              <Text style={styles.greetingText}>Ordne die Längen in aufsteigender Reihenfolge. </Text>
      <View style={styles.answerSlots}>
        {question.correctAnswer.map((_, index) => (
          <View key={index} ref={ref => (slotRefs[index] = ref)} style={styles.answerSlot}>
            <Animated.Text style={[styles.answerSlotText, { opacity: 0 }]}>
              {selectedOptions[index]}
            </Animated.Text>
          </View>
        ))}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => selectOption(option, index)}>
            <Animated.View
              ref={ref => (buttonRefs[index] = ref)}
              style={[
                styles.optionButton,
                { transform: animatedValues[index].getTranslateTransform() },
              ]}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OrderQuiz;