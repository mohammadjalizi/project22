import React from 'react'



import { useGetproductsByNameQuery } from '../../redux/ProdutsApi'

const receviedDateFromAPI = [{}, {}, {}, {}];

const Home = () => {

  const { data, error, isLoading } = useGetproductsByNameQuery();
  console.log(data)

  return (
    <div className="App">

{receviedDateFromAPI.map((item)=>{

return(

<h1>djfsdfj</h1>


)


})}
  </div>
  )
}

export default Home