import { useState } from 'react';
import { motion } from 'framer-motion';

type SentenceWithGapProps = {
  sentence: string;
  missingPart: string;
};

const SentenceWithGap = ({ sentence, missingPart }: SentenceWithGapProps) => {
  const [showMissing, setShowMissing] = useState(false);

  const parts = sentence.split('{{gap}}');

  const handleReveal = () => setShowMissing(true);

  return (
    <div className="p-4 text-xl">
      <span>
        {parts[0]}
        {showMissing ? (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-blue-600 font-semibold"
          >
            {missingPart}
          </motion.span>
        ) : (
          <button
            onClick={handleReveal}
            className="text-red-500 underline mx-1"
          >
            [...]
          </button>
        )}
        {parts[1]}
      </span>
    </div>
  );
};

export default SentenceWithGap;
