import { createContext, useState, useContext, ReactNode } from "react";
import { Icon } from "./Icon";

type FlyOutContextType = {
  open: boolean;
  toggle: (value: boolean) => void;
};

const FlyOutContext = createContext<FlyOutContextType | undefined>(undefined);

export function FlyOut(props: { children: ReactNode }) {
  const [open, toggle] = useState(false);

  return (
    <div className={`flyout`}>
      <FlyOutContext.Provider value={{ open, toggle }}>
        {props.children}
      </FlyOutContext.Provider>
    </div>
  );
}

function Toggle() {
  const { open, toggle } = useContext(FlyOutContext)!;

  return (
    <div className="flyout-btn" onClick={() => toggle(!open)}>
      <Icon />
    </div>
  );
}

function List({ children }: { children: ReactNode }) {
  const { open } = useContext(FlyOutContext)!;
  return open && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }: { children: ReactNode }) {
  return <li className="flyout-item">{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;