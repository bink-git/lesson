import './App.css';
import ChamberiArticle from './components/ChamberiArticle';
import FlashCard from './components/FlashCard';
import SentenceWithGap from './components/SentenceWithGap';

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
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <SentenceWithGap
          sentence="Сьогодні {{gap}} дуже тепло."
          missingPart="на вулиці"
        />
      </div>
      <audio controls className="mt-4 w-full rounded">
        <source src="/audio/PISTA_11.mp3" type="audio/mp3" />
        Ваш браузер не підтримує аудіо відтворення.
      </audio>
    </>
  );
}

export default App;
