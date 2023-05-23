
export function Avatar({session}) {
  return (
    <div>
      {/* Boton del estado del susuario online||ofline */}
      <img src={session.image}/>
    </div>
  )
}