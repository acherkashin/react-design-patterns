import { ComponentType, useEffect, useRef } from "react";

export function withLogging<P extends object>(WrappedComponent: ComponentType<P>) {
    return (props: P) => {
        useEffect(() => {
            console.log(props);
        }, [props]);

        return <WrappedComponent {...props} />;
    };
}

type Properties = Record<string, any>;

/**
 * Если использовать хук, то в консоль будут выводиться все ошибки 
 * 
 * @param WrappedComponent - компонент, в который мы хотим добавить какую-то логику
 * @returns 
 */
export function withWhyUpdate<P extends Properties>(WrappedComponent: ComponentType<P>) {
    //
    return (props: P) => {
        const previousProps = useRef<Properties | undefined>(undefined);

        useEffect(() => {
            if (previousProps.current != null) {
                const allKeys = Object.keys({ ...previousProps.current, ...props });
                const changesObj: Properties = {};
                allKeys.forEach(key => {
                    if (previousProps?.current?.[key] !== props[key]) {
                        changesObj[key] = {
                            from: previousProps.current?.[key],
                            to: props[key],
                        };
                    }
                });

                if (Object.keys(changesObj).length) {
                    console.log('[update-reason]', name, changesObj);
                }
            }

            previousProps.current = props;
        });

        return <WrappedComponent {...props}/>
    }
}