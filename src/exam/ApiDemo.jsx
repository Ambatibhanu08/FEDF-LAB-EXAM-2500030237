import React, { useState, useEffect } from "react"
import axios from "axios"

function ApiDemo() {

  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummy-json.mock.beeceptor.com/posts"
      )
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>API Demo</h2>
      {posts.length === 0 ? (

        <p>No Data Loaded</p>

      ) : (

        <table border="1">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>

            {posts.map((post) => (

              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  )
}

export default ApiDemo