import axios from "axios"

export default function News() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      subject: "Content Title new 1",
      open_flg: 1,
      ext_col_01: {
        desc: "",
      },
      ext_col_02: JSON.stringify(
        '<h1>New post122</h1><pre><code class="language-plaintext">&lt;div&gt;\n &lt;p&gt;abc&lt;/p&gt;\n&lt;/div&gt;</code></pre><figure class="table"><table><tbody><tr><td>ádf</td><td>ád</td></tr><tr><td>ádf</td><td>f</td></tr></tbody></table></figure>'
      ),
    }
    axios
      .post(
        "https://bita-global-dining.g3.kuroco.app/rcms-api/1/blog/insert",
        data
      )
      .then((response) => {
        console.log(response.status, response.data)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
