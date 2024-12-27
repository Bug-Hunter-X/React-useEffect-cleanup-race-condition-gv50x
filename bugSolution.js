```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mounted.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      mounted.current = false; // Ensure cleanup runs without race condition
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```