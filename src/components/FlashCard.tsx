import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

type FlashCardProps = {
  words: { word: string; translation: string }[];
};

const FlashCard = ({ words }: FlashCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = words[currentIndex];

  const handleClick = () => {
    if (!flipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
      setTimeout(() => {
        // setCurrentIndex((prev) => (prev + 1 < words.length ? prev + 1 : 0));
      }, 300); // дати час для анімації
    }
  };

  const handleNextClick = () => {
    setFlipped(false); // обертати картку назад
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1 < words.length ? prev + 1 : 0)); // перехід на наступне питання
    }, 300); // чекаємо анімації перевороту
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={handleNextClick}
          className="mt-6 p-3 rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          <ArrowLeft />
        </button>

        <div style={{ perspective: 1000 }}>
          <motion.div
            onClick={handleClick}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '16rem',
              height: '8rem',
              position: 'relative',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front side */}
            <motion.div
              style={{
                backfaceVisibility: 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#3b82f6', // Tailwind's blue-500
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {current.word}
            </motion.div>

            {/* Back side */}
            <motion.div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#10b981', // Tailwind's green-500
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {current.translation}
            </motion.div>
          </motion.div>
        </div>

        <button
          onClick={handleNextClick}
          className="mt-6 p-3 rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="mt-4 text-lg font-semibold text-gray-700">
        {currentIndex + 1} / {words.length}
      </div>
    </>
  );
};

export default FlashCard;
