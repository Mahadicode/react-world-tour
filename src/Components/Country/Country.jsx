import './Country.css'
const Country = ({ country }) => {
  console.log(country)
  const { name ,flags} = country;
  // console.log(name)
  return (
    <div className='box'>
      <h6>Name: {name.common}</h6>
      <img src={flags.png} alt="" />
      
    </div>
  );
};

export default Country;