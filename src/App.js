import './App.css';
import Note from './components/Note/Note';
import NotePad from './components/NotePad/NotePad';

const templateNote = <Note title={'Note Title'} text={'Note text.'} color={'#0094d8'} />;


function App() {

  let noteArray = [
    <Note title={'Note Title'} text={'Note text.'} color={'#0094d8'} />,
    <Note color={'#11aaef'} title={'swag!!'} text={'Lorem ipsum, dudeski!!! Dont forget to get eggs today!!'} />,
    <Note color={'#f84020'} title={'wowzers'} text={'9/11/2023 - to do: finish calendar app'} />
  ];

  return (
    <div className="App">
      <NotePad notes={noteArray}/>
    </div>
  );
}

export default App;
