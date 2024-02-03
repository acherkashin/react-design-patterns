import { useState } from "react";
import { actionTypes, toggleReducer, useToggle } from "./useToggle";
import { Switch } from "./Switch";

// https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
export function SwitchExample() {
    const [clicksSinceReset, setClicksSinceReset] = useState(0);
    const tooManyClicks = clicksSinceReset >= 4;

    const { on, toggle, setOn, setOff } = useToggle({
        reducer(currentState, action) {
            const changes = toggleReducer(currentState, action);
            if (tooManyClicks && action.type === actionTypes.toggle) {
                // other changes are fine, but on needs to be unchanged
                return { ...changes, on: currentState.on };
            } else {
                // the changes are fine
                return changes;
            }
        },
    });

    return (
        <div>
            <button onClick={setOff}>Switch Off</button>
            <button onClick={setOn}>Switch On</button>
            <Switch
                onClick={() => {
                    toggle();
                    setClicksSinceReset((count) => count + 1);
                }}
                on={on}
            />
            {tooManyClicks ? <button onClick={() => setClicksSinceReset(0)}>Reset</button> : null}
        </div>
    );
}
