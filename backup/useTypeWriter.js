import { useEffect, useState } from 'react';

const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 1400;
const PAUSE_AFTER_DELETE = 300;

export default function useTypewriter(words) {
  const [displayed, setDisplayed] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    let timeout;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        // Finished typing — pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayed.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, DELETE_SPEED);
      } else {
        // Finished deleting — pause then move to next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}
