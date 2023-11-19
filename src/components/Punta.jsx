import { Stars } from './Stars'
import { Question } from './Questions'
import { useState } from 'react'

import './punta.css'
import confetti from 'canvas-confetti'


export function Puntun({ moon, setQuestion }) {
  const [relsut] = useState(() => {
    return JSON.parse(window.localStorage.getItem("result"))
  })


  const playGain = () => {
    setQuestion(null)
    window.localStorage.removeItem("result")
  }

  const cele = () => {
    if (relsut.resul === 10) {
      confetti({
        particleCount: 400,
        startVelocity: 30,
        spread: 360,
      })
    }
  }

  return (
    <section className="start" onLoad={cele}>
      <div className='welcom'>
        <span
          style={moon ? { color: "#3b4d66" } : null}
        >Quiz completed</span>
        <h1
          style={moon ? { color: "#3b4d66" } : null}
        >You scored...</h1>
      </div>
      <div className='btn-ini'>
        <article className='resul-puntaje'
          style={moon ? { background: "white" } : null}
        >
          <picture className='resul-icon'>
            <img src={relsut.icon} />
            <strong
              style={moon ? { color: "#3b4d66" } : null}
            >{relsut.title}</strong>
          </picture>
          <span
            style={moon ? { color: "#3b4d66" } : null}
          >{relsut.resul}</span>
          <p
            style={moon ? { color: "#3b4d66", opacity: 5 } : null}
          >out of 10</p>
        </article>
        <input onClick={playGain} className='play' type="button" value="Play again" />
      </div>
    </section>
  )
}



export const Apa = ({ moon, question, data, quizzes, setQuestion, handelOnclick }) => {


  if (question === null) {
    return <Stars moon={moon} quizzes={quizzes} handelOnclick={handelOnclick} />
  } else if (question) {
    return <Question moon={moon} data={data} setQuestion={setQuestion} />
  } else if (!question) {
    return <Puntun moon={moon} setQuestion={setQuestion} />
  }
}