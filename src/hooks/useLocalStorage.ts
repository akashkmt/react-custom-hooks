import { useState, useEffect } from "react";

/**
 * Custom hook to manage state with localStorage persistence.
 *
 * @param {string} key - The key to store the value in localStorage.
 * @param {T} initialValue - The initial value if no stored value exists.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]} - Returns the stored value and a setter function.
 *
 * @example
 * const [name, setName] = useLocalStorage<string>("username", "Guest");
 * setName("John"); // Updates both state and localStorage
 */
export function useLocalStorage<T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [storageValue, setStorageValue] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        if (key) {
            localStorage.setItem(key, JSON.stringify(storageValue));
        }
    }, [key, storageValue]);

    return [storageValue, setStorageValue];
};
