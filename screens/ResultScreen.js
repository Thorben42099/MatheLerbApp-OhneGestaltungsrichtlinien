import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { QuizContext } from '../components/QuizContext';
import StarRating from '../components/StarRating';
import styles from '../styles';

export default function ResultScreen({ route, navigation }) {
  const { totalStars, totalQuestions, quizType } = route.params;
  const averageStars = totalStars / totalQuestions;
  const { updateRating } = useContext(QuizContext);

  useEffect(() => {
    let isMounted = true; // Verhindert das Setzen des Status, wenn die Komponente nicht mehr gemounted ist
    if (quizType && isMounted) {
      updateRating(quizType, averageStars);
    } else {
      console.error('quizType is undefined');
    }
    return () => {
      isMounted = false;
    };
  }, [averageStars, quizType, updateRating]);

  return (
    <View style={styles.resultContainer}>
      
      <Text style={styles.resultText}>
        Du hast insgesamt {totalStars} Sterne erreicht.
      </Text>
      <Text style={styles.resultText}>
        Durchschnittliche Sterne pro Frage: {averageStars.toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.resultButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.resultButtonText}>Zurück zum Start</Text>
      </TouchableOpacity>
    </View>
  );
}
