import { StyleSheet } from 'react-native';

const buttonSize = 100; // Einheitliche Größe für Buttons und Felder

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Cremefarbene Hintergrundfarbe
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  cartoonImage: { // Stil für das Cartoon-Bild hinzugefügt
    width: 600,
    height: 500,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  greetingText: { // Stil für den Begrüßungstext
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 70,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  progressContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  progressBar: {
    height: 10,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  question: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  questionSchedule: {
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  answerSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  answerSlot: {
    width: buttonSize +10,
    height: buttonSize,
    margin: 10,
    marginLeft: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  answerSlotText: {
    fontSize: 18,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  comparisonQuestion: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  comparisonText: {
    fontSize: 36,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  comparisonAnswerContainer: {
    width: buttonSize + 10,
    height: buttonSize,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  comparisonAnswerText: {
    fontSize: 18,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  optionButton: {
    width: buttonSize +10,
    height: buttonSize,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  selectedOptionButton: {
    backgroundColor: 'lightgray', // Standardfarbe für ausgewählte Option
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  selectedUnitOptionButton: {
    backgroundColor: '#FFA500', // Orange für ausgewählte Option bei Unit Conversion
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  optionText: {
    color: '#000000',
    fontSize: 26,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  checkButton: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  checkButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  nextButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  resultText: {
    fontSize: 18,
    //marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
    color:'black',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  starWrapper: {
    position: 'relative',
    width: 20,
    height: 20,
  },
  starFilled: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quizButton: {
    flexDirection: 'column', // Change to column for vertical alignment within each button
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '30%', // Adjust the width to fit 3 buttons per row
    height: 180, // Increase height for better appearance
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  quizButtonText: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  exampleTaskContainer: {
    borderWidth: 0,
    borderColor: '#000', // Schwarzer Rand
    padding: 10,
    marginBottom: 1,
    marginTop: 5,
    borderRadius: 15,
    width: '90%', // 80% der Breite des Quizbuttons
    justifyContent: 'center', // Vertikal zentrieren
    alignItems: 'center', // Horizontal zentrieren

  },
  exampleTaskText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  quizButtonContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },


  unitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Make sure the container is centered
    marginVertical: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: buttonSize * 2, // Verdoppelt die Größe des Containers
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  unitText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  scheduleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  scheduleImagesContainerAligned: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Bilder am unteren Rand ausrichten
    marginBottom: 20,
    height: 'auto',
  },
  scheduleImage: {
    width: '48%', // Adjust as necessary for your design
    height: 350, // Adjust as necessary for your design
    resizeMode: 'contain',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  quizGrid: { // Stil für das Kachelmuster
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  correctImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  questionImage: {
    width: 500,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 2,

  },
  questionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
  },
  sequenceQuestionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Make sure the container is centered
    marginVertical: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    width: 'auto', // Verdoppelt die Größe des Containers
    height: 'auto',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt‚
    backgroundColor: 'lightgray',
    marginTop: 20,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    width: '100%', // Ensures the navigation bar spans the width of the screen
    backgroundColor: 'white', // Match the background color of the screen
    },
  navButton: {
    padding: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    
   
  },
  navButtonText: {
    color: 'black',
    fontSize: 22,
    fontFamily:'TimesNewRoman'
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  resultImage:{
    width: 600, // Adjust as necessary for your design
    height: 450, // Adjust as necessary for your design
    resizeMode: 'contain',
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'TimesNewRoman',

  },
  resultButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    elevation: 2,
   
  },
  resultButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'TimesNewRoman'
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 6,
    backgroundColor:'gray',
    borderRadius: 10,
  },
  starContainer2: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius:15,
  },
  starWrapper: {
    position: 'relative',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledStar: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  correctResult:{
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
    backgroundColor: 'lightgray', // Pastellgrün
    color:'black',
    padding:5,
    paddingHorizontal: 15,
    borderRadius: 15,
    
  },
  incorrectResult:{
    fontSize: 18,
    marginVertical: 20,
    fontFamily: 'TimesNewRoman', // Schriftart hinzugefügt
    backgroundColor: 'lightgray', // Pastellrot
    color:'black',
    padding:5,
    paddingHorizontal: 15,
    borderRadius: 15,
   
  },
  resultAnswerText:{
    color: 'black',
    fontFamily:'TimesNewRoman',
    fontSize: 24,
  },
});
