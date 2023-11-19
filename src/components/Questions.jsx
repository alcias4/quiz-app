import { useFormQuestions } from "../hook/useForm"
import "./questions.css"

export function Question({ moon, data, setQuestion }) {
  const { question, numbber, porcentajes, a, check, vacio, handleCheck, handleOclick, } = useFormQuestions({ data, setQuestion })

  return (
    <section className="contend-question">
      <div className="quest">
        <span
          style={!moon ? { color: "#adc1e1" } : { color: "#3b4d66", opacity: .7 }}
        >Question {numbber + 1} of 10</span>
        <h2
          style={!moon ? { color: "#ffff" } : { color: "#3b4d66" }}
        >{question?.question}</h2>
        <div className="pogress"
          style={moon ? { background: "#fff" } : null}
        >
          <div
            style={{ width: `${porcentajes}%` }}
            className="pros">
          </div>
        </div>
      </div>
      <div className="answer">
        {
          question?.options?.map((e, i) => (
            <button
              onClick={() => handleCheck({ e, i })}
              className={moon ? "res res-light" : "res res-dark"}
              style={check?.i === i && check !== null ? { border: check.c } : null}
              key={i + 1000}>
              <span
                style={check?.i === i && check !== null ? { background: check.b, color: "white" } : null}
              >
                {a[i]}
              </span>
              {e}
              <img
                style={check?.i === i ? { display: "initial" } : { display: "none" }}
                src={check?.url}
              />
              <img
                style={question.answer === e && check !== null ? { display: "initial" } : { display: "none" }}
                src="./images/icon-correct.svg"
              />
            </button>
          ))
        }
        <button className="submit" onClick={handleOclick}>Submit Answer</button>
        <span className={moon ? "answer-error answer-error-ligth" : "answer-error"}
          style={vacio ? { opacity: 1 } : { opacity: 0 }}
        >
          <img
            src="./images/icon-error.svg" />
          Please select an answer
        </span>
      </div>
    </section>
  )
}