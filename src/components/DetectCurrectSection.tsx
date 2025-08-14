// import { useState, useEffect } from "react";

// export function useCurrentDetectedSection(sectionIds: string[]) {
//   const [currentSection, setCurrentSection] = useState<string | null>(null);

//   useEffect(() => {
//     const checkVisibleSection = () => {
//       let visibleId: string | null = null;
//       let maxVisibleHeight = 0;

//       sectionIds.forEach((id) => {
//         const element = document.getElementById(id);
//         if (!element) return;

//         const rect = element.getBoundingClientRect();
//         const viewportHeight =
//           window.innerHeight || document.documentElement.clientHeight;

//         const isVisible =
//           rect.top < viewportHeight && rect.bottom > 0; // any part visible

//         if (isVisible) {
//           // Find how much of the element is actually visible
//           const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
//           if (visibleHeight > maxVisibleHeight) {
//             maxVisibleHeight = visibleHeight;
//             visibleId = id;
//           }
//         }
//       });

//       if (visibleId && visibleId !== currentSection) {
//         setCurrentSection(visibleId);
//       }
//     };

//     window.addEventListener("scroll", checkVisibleSection);
//     checkVisibleSection(); // run on mount

//     return () => {
//       window.removeEventListener("scroll", checkVisibleSection);
//     };
//   }, [sectionIds, currentSection]);

//   return currentSection;
// }

import { useState, useEffect } from "react";

export function useCurrentDetectedSection(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleId: string | null = null;
        let maxVisibleHeight = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleHeight =
              entry.intersectionRect.height || entry.boundingClientRect.height;
            if (visibleHeight > maxVisibleHeight) {
              maxVisibleHeight = visibleHeight;
              maxVisibleId = entry.target.id;
            }
          }
        });

        if (maxVisibleId && maxVisibleId !== currentSection) {
          setCurrentSection(maxVisibleId);
        }
      },
      {
        root: null, // viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // fine-grained detection
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return currentSection;
}
