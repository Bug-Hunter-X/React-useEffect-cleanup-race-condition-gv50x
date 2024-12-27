# React useEffect Cleanup Race Condition

This example demonstrates a race condition that can occur in React's `useEffect` hook when a component unmounts before a timer set within the effect completes.  The solution involves checking if the component is still mounted before updating state.

## Bug

The `bug.js` file contains a component that uses `useEffect` to increment a counter every second. The cleanup function clears the interval, but if the component unmounts before the next interval fires, the `setCount` function may still attempt to update the state, leading to errors or unexpected behavior. This is a common mistake in React applications.

## Solution

The `bugSolution.js` file provides a solution that addresses the race condition using a `mounted` ref.  The state is only updated if the component is still mounted, preventing issues after unmounting.