import * as React from 'react';

export const useDebounceValue = (value: any, delay: number): [any, boolean] => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        const handler = setTimeout(() => {
            setDebouncedValue(value);
            setLoading(false);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return [debouncedValue, loading];
};

export const useDebounceCallback = (
    callbackFunction: (args?: any) => any,
    delay: number
): [(args?: any) => void, () => void, boolean] => {
    const [loading, setLoading] = React.useState(false);
    let handler;

    const debounce = React.useCallback(
        (...args) => {
            setLoading(true);
            if (handler) {
                clearTimeout(handler);
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
            handler = setTimeout(() => {
                callbackFunction(...args);
                setLoading(false);
            }, delay);
        },
        [handler, callbackFunction, delay]
    );

    const clearDebounce = React.useCallback(() => {
        setLoading(false);
        if (handler) {
            clearTimeout(handler);
        }
    }, [handler]);

    return [debounce, clearDebounce, loading];
};
