import './switch.styles.css';
import { HTMLProps } from 'react';

const noop = () => { };

interface SwitchProps extends HTMLProps<HTMLInputElement> {
    on: boolean;
    className?: string;
    'aria-label'?: string;
    onClick?: () => void;
}

export function Switch({
    on,
    className = '',
    'aria-label': ariaLabel,
    onClick,
    ...props
}: SwitchProps) {
    const btnClassName = [
        className,
        'toggle-btn',
        on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <label aria-label={ariaLabel || 'Toggle'} style={{ display: 'block' }}>
            <input
                className="toggle-input"
                type="checkbox"
                checked={on}
                onChange={noop}
                onClick={onClick}
                data-testid="toggle-input"
            />
            <span className={btnClassName} {...props} />
        </label>
    );
}
