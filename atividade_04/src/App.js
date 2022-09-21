import { useEffect, useState } from 'react'

import { List } from './components/List'

function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData () {
      setLoading(true)
      const response = await fetch('https://api.github.com/users/vagnerkuntz/repos')
      const res = await response.json()
      setData(res)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <div className="App">
      {loading ? <h1>CARREGANDO....</h1> : <List data={data} />}
    </div>
  );
}

export default App;
