import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import callsApi from '../../services'
import { getIdProperties } from '../../redux/actions/index'

export default function Question({
  question,
  answer,
  isOwner,
  id_Feedback,
  id_detail,
}) {
  const dispatch = useDispatch()
  const [click, setClick] = useState(false)
  const [newAnswer, setNewAnswer] = useState('')

  useEffect(() => {
  }, click)

  function handleAnswerSubmit() {
    const data = {
      id_Feedback,
      answer: newAnswer,
    }
    callsApi.postAnswer(data).then((r) => {
      setClick(false)
      setNewAnswer('')
      dispatch(getIdProperties(id_detail))
    })
  }

  return (
    <>
      {!answer && isOwner ? (
        <div className="my-1 flex">
          <p className="ml-4 text-base">● {question}</p>
          {!click ? (
            <button
              className="ml-4 rounded-md bg-indigo-600 px-1 py-1 text-white"
              onClick={() => setClick(true)}
            >
              responder
            </button>
          ) : (
            <div>
              <input
                className="ml-3 rounded-lg"
                type="text"
                onChange={(e) => setNewAnswer(e.target.value)}
              />
              <button
                className="ml-4 rounded-md bg-indigo-600 px-1 py-1 text-white"
                onClick={(e) => handleAnswerSubmit()}
              >
                enviar
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p className="ml-4 text-base">● {question}</p>
          <p className="ml-7 text-base italic text-slate-500">{answer}</p>
        </div>
      )}
    </>
  )
}
