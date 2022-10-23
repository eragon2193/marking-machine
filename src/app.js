import React,{useState} from "react";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

export function MyApp () {
  document.body.style.backgroundColor = 'beige';
  const initialText = ' # Welcome to my react markdown previewer \n\n # You use one hash to represenet main heading \n \n ## And you use double hash to represent a sub heading \n\n To represent a link you put the name in square brackets and an actual link in parethesis, this is a link to my [github](https://github.com/eragon2193) \n\n You put a text in backticks to represent it as `Inline code`\n\n To represent a code block you put three backticks \n ``` \n # this is a code block \n console.log(4) \n const tenGiver  = () => { \n return 10 \n } \n ``` \n\n To represent lists, you put \n 1. Numbers \n 2. For \n 3. Ordered list items \n\n And \n * Asterisk \n * For \n * Unordered list items \n\n For the blockquote you put bigger than symbol before the text \n > This is a blockquote text \n\n To make the text bold you simple put 4 underscores or 4 asterisks around it **Bold text** also __Bold text__ \n\n Lastly, to put an image you need to do something similar to a link, you put  the word Image in square brackets and link to an image in the parenthesis but you also need exclamation mark at the beggining of the line like this \n\n ![Image](https://i.ibb.co/7t2wf82/React-logo.png)'
  
  const [icon, setIcon] = useState(faMaximize)
  const [textValue, setTextValue] = useState(initialText)
  const [[editor, preview], setMinMax] = useState(['editor', 'preview-div'])  

  const maximize = () => {
    if(icon === faMaximize){
      setIcon(faMinimize)
      setMinMax(['max-editor', 'min-preview-div'])
    }
    else{
      setIcon(faMaximize)
      setMinMax(['editor', 'preview-div']);
    }
    
  }
  const handleChange = (event) => {
    setTextValue(event.target.value)
  }
  return(
    <>    <Editor 
      class={editor}
      onClick={maximize} 
      icon={icon} 
      text={textValue} 
      onChange={handleChange}
    />
    <Preview 
      class={preview}
      text={textValue} 
    />
  </>
  )
}

function Editor (props) {
  return (
    <div id="editor-div">
      <header id="editor-header">
        <div className="arrow-icons"> 
          <p>This is the editor</p>   
          <div id="icon">
            <FontAwesomeIcon className="icon" onClick={props.onClick}icon={props.icon}></FontAwesomeIcon>
         </div>
        </div>
      </header>
      <textarea 
        onChange={props.onChange} 
        id={props.class}
        value={props.text}
      >
      {props.text}
      </textarea>
    </div>
  )
}

function Preview (props) {
  return (
    <div id={props.class}>
      <header id="preview-header">
        <p>This is the preview tab</p>
      </header>
      <div id="preview">
        <ReactMarkdown children={props.text} />
      </div>
    </div>
  )
}