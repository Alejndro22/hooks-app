# Difference between this memoizing tools and hooks

## useMemo

It is used to memoize a value. The value will only be recalculated when one of its dependencies changes. It is useful for operations that can be computationally expensive in our application.

## useCallback

It is similar to useMemo, but it is used to memoize a function. This is useful when we want to pass a function to child components, and for example, they use it as a dependency in a useEffect hook (what is obtained is a reference to the function, and it changes with each re-render).

## Memo

This one has more differences compared to the previous ones (it's not a hook, it's an HOC - higher-order component ). Essentially, it helps us memoize a component, allowing us to prevent a component from re-rendering if it receives the same props.
