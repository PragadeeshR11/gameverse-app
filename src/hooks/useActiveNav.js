import { useEffect, use } from 'react';
import { ActiveSecCntxt } from '../context/ActiveSection';

export default function useActiveNav(secRef, secName, thresholdValue) {
  const { setActiveSec } = use(ActiveSecCntxt);

  useEffect(() => {
    const activeNavSec = function (entries) {
      const [entry] = entries;

      if (entry.isIntersecting) setActiveSec(secName);
      // else setActiveSec('');
    };

    const navObserver = new IntersectionObserver(activeNavSec, {
      root: null,
      threshold: thresholdValue,
      rootMargin: '-90px',
    });

    if (secRef.current) {
      navObserver.observe(secRef.current);
    }

    return () => navObserver.disconnect();
  }, [secRef, secName]);
}
