import useSWR from 'swr'
import { Spinner } from '@contentful/f36-spinner'
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})

const fetcher = async () => {
  const tagItems = await client.getTags()

  const tags = tagItems.items.map((tag) => tag.name)

  return { tags }
}

function App() {
  const { data, error } = useSWR('contentful', fetcher)

  if (error) {
    console.log(error)
    return <div>failed to load </div>
  }

  if (!data) return <Spinner size="large" />

  console.log(data);

  return (
    <main>
      Hellow World
    </main>
  )
}

export default App
