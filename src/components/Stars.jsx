import "./stars.css"


export function Stars({ moon, quizzes, handelOnclick }) {

  const m = ["#FFF1E9", "#E0FDEF", "#EBF0FF", "#F6E7FF"]
  return (
    <section className="start">
      <div className="welcom">
        <span
          style={moon ? { color: "#3b4d66" } : { color: "white" }}
        >Welcome to the</span>
        <h1
          style={moon ? { color: "#3b4d66" } : { color: "white" }}
        >
          Frontend Quiz!
        </h1>

        <p
          style={moon ? { color: "#626c7f" } : { color: "#abc1e1" }}
        >Pick a subject to get started.</p>
      </div>
      <div className="btn-ini">
        {
          quizzes?.map((e, i) => (
            <button
              style={moon ? { background: "white", color: "#3b4d66" } :
                { background: '#3b4d66' }}
              onClick={() => handelOnclick(e.title)}
              key={e.title}
            >
              <img
                style={{ background: `${m[i]}` }}
                src={e.icon}
                alt="icon html"
              />
              <span>{e.title}</span>
            </button>
          ))
        }
      </div>
    </section>
  )
}