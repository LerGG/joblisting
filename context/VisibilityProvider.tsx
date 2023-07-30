import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Children, Visbility } from "../interfaces/interfaces";

export const visibilityContext = createContext({} as VisibilityProps);

export const VisibilityProvider = ({ children }: Children) => {
  const [isVisible, setIsVisible] = useState<Visbility>({
    department: false,
    location: false,
    level: false,
  });

  return (
    <visibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </visibilityContext.Provider>
  );
};

export interface VisibilityProps {
  isVisible: Visbility;
  setIsVisible: Dispatch<SetStateAction<Visbility>>;
}

export const useVisibility = () => {
  const { isVisible, setIsVisible } = useContext(visibilityContext);
  return { isVisible, setIsVisible };
};
