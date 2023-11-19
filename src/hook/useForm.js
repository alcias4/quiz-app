import { useState } from "react"
import confetti from "canvas-confetti"

export function useFormQuestions ({data, setQuestion}){
  const [numbber, setNumber] = useState(0)
  const [question, setQue] = useState(data?.questions[numbber])
  const [porcentajes, setPorcentajes] = useState(10)
  const [check, setCheck] = useState(null)
  const [vacio, setVacio ] = useState(false)
  const a = ["A", "B", "C", "D"]
  const [count, setCount ] = useState(0)

  const handleOclick = () => {

    if (check === null ){
      setVacio(true)
      return
    }

    const j = numbber + 1
    if (j < 10 && check !== null ) {
      let n = numbber + 1
      setNumber(n)
      let p = (n + 1) * 10
      setQue(data?.questions[n])
      setPorcentajes(p)
      setCheck(null)
    }

    if (numbber === 9 && check !== null){
      const result = {
        title: data?.title,
        icon: data?.icon,
        resul: count
      }

      window.localStorage.setItem("result", JSON.stringify(result))
      setQuestion(false)
      setNumber(0)
    }
  }

  const handleCheck = ({e,i}) => {
    setVacio(false)
    if (check !== null) return


    if (e === question.answer){
      let puntaje = count + 1
      setCount(puntaje)
      setCheck({
        url:"./images/icon-correct.svg", 
        i: i , 
        checkin:  question.answer, 
        c: "2px solid #26d782",
        b: "#26d782"
      })
    }else {
      setCheck({
        url: "./images/icon-error.svg", 
        i:i, 
        checkin: question.answer, 
        c:"2px solid #ee5454",
        b:"#ee5454"
      })
    }
  }

  return {question, numbber,porcentajes, check, a, vacio,handleCheck, handleOclick}
}