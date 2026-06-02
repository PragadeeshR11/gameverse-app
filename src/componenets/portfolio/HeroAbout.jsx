import { useState, useEffect, useRef } from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import useActiveNav from '../../hooks/useActiveNav';

const WORDS = ['Frontend', 'React', 'UI'];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 1400;
const PAUSE_AFTER_DELETE = 300;

function useTypewriter(words) {
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

export default function HeroAbout() {
  const secRef = useRef();
  const animatedWord = useTypewriter(WORDS);

  useActiveNav(secRef, '', 0.4);

  return (
    <section ref={secRef} className="h-screen flex items-center justify-center flex-col pb-16">
      {/* //layout aligning */}
      <div>
        <h1 className="text-9xl font-semibold">
          <span>{animatedWord}</span>
          <span className="animate-blink font-thin">|</span>
          <br /> Developer
        </h1>
        <p className="text-pink-500/70 text-base mt-6 pl-1.5">
          3.5 Years Experience • Frontend Development • React • JavaScript
        </p>
        <div className="max-w-8xl mx-auto flex justify-end my-10">
          <button className="actionBtn flex items-center text-gray-300 px-6.5 py-2.5 hover:font-normal hover:scale-[1.02]">
            <span>Resume</span> <RiDownloadLine className="inline-block text-lg ml-1.5" />
          </button>
        </div>

        {/* Blinking cursor keyframe — add to your global CSS instead if preferred */}
        <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s step-end infinite;
        }
      `}</style>
      </div>
    </section>
  );
}
