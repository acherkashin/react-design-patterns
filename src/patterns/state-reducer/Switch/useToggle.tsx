import { useReducer } from 'react';

export const actionTypes = {
    toggle: 'TOGGLE',
    on: 'ON',
    off: 'OFF',
};

type State = {
    on: boolean;
};

type Action = {
    type: string;
};

export function toggleReducer(state: State, action: Action) {
    switch (action.type) {
        case actionTypes.toggle: {
            return { on: !state.on };
        }
        case actionTypes.on: {
            return { on: true };
        }
        case actionTypes.off: {
            return { on: false };
        }
        default: {
            throw new Error(`Unhandled type: ${action.type}`);
        }
    }
}

export type UseToggleProps = {
    reducer?: (state: State, action: Action) => State;
};

export function useToggle({ reducer = toggleReducer }: UseToggleProps = {}) {
    const [{ on }, dispatch] = useReducer(reducer, { on: false });

    const toggle = () => dispatch({ type: actionTypes.toggle });
    const setOn = () => dispatch({ type: actionTypes.on });
    const setOff = () => dispatch({ type: actionTypes.off });

    return { on, toggle, setOn, setOff };
}

