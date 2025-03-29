# snappy-react-hooks

A collection of reusable React hooks to simplify state management and enhance functionality.

## Installation

`npm install snappy-react-hooks`

Or

`pnpm install snappy-react-hooks`

Or

`yarn install snappy-react-hooks`

# Hooks

## 🔹 useLocalStorage

Persist state in localStorage to retain values across page reloads.

Usage:

`const [value, setValue] = useLocalStorage("key", "defaultValue");`

## 🔹 usePreviousValue

Track the previous value of a state or prop.

Usage:

`const prevValue = usePreviousValue(currentValue);`
