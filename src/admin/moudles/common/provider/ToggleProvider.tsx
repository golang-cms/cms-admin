import { createContext, useState } from "react";

type ToggleHook = [boolean, (open: boolean) => void];
const initToggle: ToggleHook = [true, () => {}];
export const ToggleContext = createContext<ToggleHook>(initToggle);

export const ToggleProvider: React.FC<{}> = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <ToggleContext.Provider value={[toggle, setToggle]}>
      {children}
    </ToggleContext.Provider>
  );
};
