import { useEffect, useRef } from "react";

/**
 * Custom hook to keep track of the previous value of a given state or prop.
 *
 * @template T - The type of the value being tracked
 * @param {T} value - The current value to track
 * @returns {T | undefined} - The previous value before the last update. Initially, it will be undefined
 *
 * @example
 * const prevCount = usePreviousValue(count);
 * console.log(prevCount); // Logs the previous count value
 * 
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>(undefined);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
