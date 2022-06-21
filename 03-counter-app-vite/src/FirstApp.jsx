import PropTypes from 'prop-types'


export const FirstApp = ({title, subTitle}) => {                     

  // if (!title) {
  //   throw new Error('El title no esta disponible');
  // }

  return (
    <>
      <h1>{title}</h1>
      {/* {<code>{JSON.stringify(Saludo)}</code>} */}
      <p>{subTitle}</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,

  subTitle: PropTypes.number.isRequired 
 }



// "<></> es un Fragmento que agrupa otros elementos HTML, JSX en un elemento padre