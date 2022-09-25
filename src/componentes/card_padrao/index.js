function CardPadrao(props) {
  const listItems = props.valores.map((valor) => (
    <>
    <div className="card-content">
    <div className="content">{valor.descricao}</div>
  </div>
  {valor.useHr ? <hr /> : null}
  </>
  ))
  return ( 
  <>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{props.titulo}</p>
      </header>
    {listItems}     
    </div>
    <br />
  </> );
}

export default CardPadrao;
