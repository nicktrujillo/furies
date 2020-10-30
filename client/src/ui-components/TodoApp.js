import React from "react"
import { useExample } from "../hooks"
import Button from '@material-ui/core/Button';



export default () => {
  const { example, setExample, exampleAsync, list } = useExample()
  return (
    <div>
      <h2>{example}</h2>
      <button onClick={() => setExample("foo")}>Example sync</button>
      <button onClick={exampleAsync}>Example async</button>
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  )
}
