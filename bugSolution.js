```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < 10) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```