import { useState, useEffect } from "react"

const Counter = ({ start = 0, end = 100, interval = 1000 }) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => setCount(count + 1), interval)
      return () => clearTimeout(timer)
    }
  }, [count, end, interval])

  return <>{count}</>
}

export default Counter
