```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition. This will cause an infinite loop.
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```