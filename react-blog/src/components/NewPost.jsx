import React from 'react'

const NewPost = ({ postObj, setPostObj , submitPost}) => {
  return (
    <main>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" name="title" id="title" value={postObj.title} onChange={(e) => setPostObj({...postObj, title: e.target.value})} />
        <textarea name="body" id="body" value={postObj.body} onChange={(e) => setPostObj({...postObj, body: e.target.value})}></textarea>
        <button type="submit" onClick={submitPost}>Submit</button> 
      </form>
    </main>
  )
}

export default NewPost
