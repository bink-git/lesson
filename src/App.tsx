import './App.css';
import ChamberiArticle from './components/ChamberiArticle';
import FlashCard from './components/FlashCard';

function App() {
  const words = [
    { word: 'hola', translation: 'привіт' },
    { word: 'gracias', translation: 'дякую' },
    { word: 'adiós', translation: 'бувай' },
  ];

  return (
    <>
      <ChamberiArticle />
      <FlashCard words={words} />
    </>
  );
}

export default App;
