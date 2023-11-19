import { quizzes } from "./mockup/data.json"
import { useState } from "react"
import { useThemes } from "./hook/useThemes"
import { Apa } from "./components/Punta"





function App() {
  const [question, setQuestion] = useState(null)
  const [data, setData] = useState()
  const { moon, moonTheme } = useThemes()


  const handelOnclick = (i) => {
    const n = quizzes.find((e) => {
      return e.title == i
    })
    setData(n)
    setQuestion(true)
  }

  return (
    <>
      <div className="main-page"
        style={moon ? { background: "#f4f6fa" } : null}
      >
        <img className="svg-background" src={!moon ? './images/doble-eli.svg' : './images/pattern-background-desktop-light.svg'} alt="background" />

        <img className="svg-background2" src={!moon ? './images/pattern-background-tablet-dark.svg' : './images/pattern-background-tablet-light.svg'} alt="background" />
        <header>
          <menu>
            <li className={moon ? "he-icon he-icon-ligth" : "he-icon"}
              style={question === null ? { display: "none" } : null}
            >
              <img src={data?.icon} alt="icon" />
              {data?.title}
            </li>
            <img src={!moon ? "./images/icon-sun-light.svg" : "./images/icon-sun-dark.svg"} alt="icon-sun-img" />
            <div
              className="icon-moon-dark"
              onClick={() => moonTheme()}
              style={moon ? { boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.425) inset" } : null}
            >
              <span
                style={!moon ? { marginLeft: "19px", rotate: "360deg" } : null}
              />
            </div>
            <img src={!moon ? "./images/icon-moon-light.svg" : "./images/icon-moon-dark.svg"} alt="icon-moon" />
          </menu>
        </header>
        <main>
          <Apa moon={moon} question={question} handelOnclick={handelOnclick} setQuestion={setQuestion} quizzes={quizzes} data={data} />
        </main>
      </div >
    </>
  )
}

export default App
