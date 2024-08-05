import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../styles';


const SequenceQuiz = ({ question, selectedOptions, setSelectedOptions, animatedValues, buttonRefs }) => {
  const slotRefs = useRef([]).current;

  useEffect(() => {
    // Reset all animated values to { x: 0, y: 0 }
    animatedValues.forEach(animatedValue => {
      animatedValue.setValue({ x: 0, y: 0 });
    });

    // Initialize slotRefs to ensure it matches the correctAnswer length
    while (slotRefs.length < question.correctAnswer.length) {
      slotRefs.push(React.createRef());
    }
    while (slotRefs.length > question.correctAnswer.length) {
      slotRefs.pop();
    }

    // Reset selected options
    setSelectedOptions(Array(question.correctAnswer.length).fill(null));
  }, [question]);

  const selectOption = (option, optionIndex) => {
    // Check if the option is already selected by this button
    const selectedOptionIndex = selectedOptions.findIndex(
      selectedOption => selectedOption?.value === option && selectedOption?.index === optionIndex
    );

    if (selectedOptionIndex !== -1) {
      // Option is already selected, remove it from selectedOptions
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[selectedOptionIndex] = null;
      setSelectedOptions(newSelectedOptions);

      // Animate back to original position
      buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
        Animated.timing(animatedValues[optionIndex], {
          toValue: { x: 0, y: 0 },
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      });
    } else {
      // Find the first available slot
      const emptySlotIndex = selectedOptions.findIndex(slot => slot === null);

      if (emptySlotIndex !== -1) {
        // Add option to the first available slot
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[emptySlotIndex] = { value: option, index: optionIndex };
        setSelectedOptions(newSelectedOptions);

        // Animate to the slot position
        buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
          slotRefs[emptySlotIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
            Animated.timing(animatedValues[optionIndex], {
              toValue: { x: spx - px, y: spy - py },
              duration: 300,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start();
          });
        });
      } else {
        // All slots are full, replace the last option
        const lastSlotIndex = selectedOptions.length - 1;
        const lastOption = selectedOptions[lastSlotIndex];

        // Animate last option back to original position
        if (lastOption !== null) {
          const lastOptionIndex = lastOption.index;
          buttonRefs.current[lastOptionIndex].measure((fx, fy, width, height, px, py) => {
            Animated.timing(animatedValues[lastOptionIndex], {
              toValue: { x: 0, y: 0 },
              duration: 500,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }).start(() => {
              // After the animation completes, update the selected options
              const newSelectedOptions = [...selectedOptions];
              newSelectedOptions[lastSlotIndex] = { value: option, index: optionIndex };
              setSelectedOptions(newSelectedOptions);

              // Animate new option to the last slot position
              buttonRefs.current[optionIndex].measure((fx, fy, width, height, px, py) => {
                slotRefs[lastSlotIndex].measure((sfx, sfy, swidth, sheight, spx, spy) => {
                  Animated.timing(animatedValues[optionIndex], {
                    toValue: { x: spx - px, y: spy - py },
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                  }).start();
                });
              });
            });
          });
        }
      }
    }
  };

  return (
    <View>
              <Text style={styles.greetingText}>Vervollständige die Reihe.</Text>
      <View style={styles.questionContainer}>
      <View style={styles.sequenceQuestionContainer}>
        <Text style={styles.question}>{question.question}</Text>
      </View> 
    </View>
      <View style={styles.answerSlots}>
        {Array.from({ length: question.correctAnswer.length }).map((_, index) => (
          <View key={index} ref={ref => (slotRefs[index] = ref)} style={styles.answerSlot}>
            <Animated.Text style={[styles.answerSlotText, { opacity: 0 }]}>
              {selectedOptions[index]?.value}
            </Animated.Text>
          </View>
        ))}
      </View>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => selectOption(option, index)}>
            <Animated.View
              ref={ref => (buttonRefs.current[index] = ref)}
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

export default SequenceQuiz;