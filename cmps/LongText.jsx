const { useState } = React

export function LongText({ txt, length = 100 }) {
  const shortTxt = txt.substring(0, length)
  const [text, setText] = useState(shortTxt)

  function getFullTxt() {
    setText(text.length === txt.length ? shortTxt : txt)
  }

  function getMsg() {
    return text.length === txt.length ? '...Read less' : '...Read more'
  }

  return <p> Discription:
    {text}
    <span style={{ color: "blue" }} className='read-more' onClick={getFullTxt}>{getMsg()}</span>
  </p>
}
