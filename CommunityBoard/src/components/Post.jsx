
function Post({ name, description}) {

    // const name = 'Afia Bidica';

  return (
    <section style={{ border: '3px solid white', marginBottom: '8px'}}>
        <h3>{name}</h3>
        <h4>{description}</h4>
    </section>
  )
}

export default Post