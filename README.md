# React useEffect Infinite Loop Bug

This repository demonstrates a common mistake when using the `useEffect` hook in React that leads to an infinite loop.  The bug arises from improperly managing the dependency array, causing the effect to run repeatedly and endlessly incrementing a counter.

## Bug Description
The `useEffect` hook is intended to perform side effects after a component renders. However, if the dependency array is not correctly defined, unexpected behavior can occur. In this specific case, the effect's execution is directly dependent on the `count` state, which is modified within the effect itself. This creates a cycle where the state change triggers the effect, leading to another state change, and so on.

## Solution
To fix this, the dependency array should be modified to exclude the `count` state.  Instead, we can leverage the return function of useEffect to clean up and avoid unnecessary updates.