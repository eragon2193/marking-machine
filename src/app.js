import React,{useState} from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MyApp () {
  document.body.style.backgroundColor = 'beige';
  const initialText = '# Welcome to my react markdown Previewr! \n \n ## YOOOO this is cool'

  const [textValue, setTextValue] = useState(initialText)  

  const handleChange = (event) => {
    setTextValue(event.target.value)
  }
  return(
  <div id="body">
    <Editor text={textValue} onChange={handleChange}/>
    <Preview text={textValue} />
  </div>
  )
}

function Editor (props) {
  return (
    <div id="editor-div">
      <header id="editor-header">
      <p>This is the editor</p>
      </header>
      <textarea 
        onChange={props.onChange} 
        id="editor" 
        value={props.text}>
      {props.text}
      </textarea>
    </div>
  )
}

function Preview (props) {
  return (
    <div id="preview-div">
      <header id="preview-header">
        <p>This is the preview tab
          
        </p>
      </header>
      <div id="preview">

        <ReactMarkdown children={props.text} rehypePlugins={[remarkGfm]} />
      </div>
    </div>
  )
}