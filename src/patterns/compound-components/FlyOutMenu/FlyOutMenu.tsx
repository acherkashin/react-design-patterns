import "./styles.css";
import { FlyOut } from "./FlyOut";

// https://codesandbox.io/p/sandbox/provider-pattern-2-forked-ghp44h
export function FlyOutMenu() {
    return (
        <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
                <FlyOut.Item>Edit</FlyOut.Item>
                <FlyOut.Item>Delete</FlyOut.Item>
            </FlyOut.List>
        </FlyOut>
    );
}
