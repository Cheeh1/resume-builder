import { ReactNode, createContext, useState } from "react";

interface ProgressContextType {
  currentSection: number;
  progressPercentage:  number;
  goToNextSection: () => void;
}

export const ProgressContext = createContext<ProgressContextType>({
  currentSection: 0,
  progressPercentage: 0,
  goToNextSection: () => {},
});


export const ProgressContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const progressPercentage: number = ((currentSection + 1) / 6) * 100;

  const maxSection = 5;

  const goToNextSection = (): void => {
    if (currentSection < maxSection) {
      setCurrentSection((prevsection) => prevsection + 1);
    }
  };

  const progresscontextvalue: ProgressContextType = {
    currentSection,
    progressPercentage,
    goToNextSection,
  };

  return (
    <ProgressContext.Provider value={progresscontextvalue}>
      {children}
    </ProgressContext.Provider>
  );
};
