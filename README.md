# react-custom-hooks

A collection of reusable React hooks to simplify state management and enhance functionality.

## Installation

`npm install react-custom-hooks`

Or

`pnpm install react-custom-hooks`

Or

`yarn install react-custom-hooks`

# Hooks

## 🔹 useLocalStorage

Persist state in localStorage to retain values across page reloads.

Usage:

`const [value, setValue] = useLocalStorage("key", "defaultValue");`

## 🔹 usePreviousValue

Track the previous value of a state or prop.

Usage:

`const prevValue = usePreviousValue(currentValue);`
