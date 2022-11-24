

export default function Question({question, answer}) {
  return (
    <div>
      <p className="text-base ml-4">● {question}</p>
      <p className="text-base ml-7 italic text-slate-500">{answer}</p>
    </div>
  )
}