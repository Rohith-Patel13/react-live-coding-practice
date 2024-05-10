import {useState} from "react"
import './App.css';

const countries = [
  {name:"India", value:"IN", cities:["Hyderabad","Banglore"]},
  {name:"Pakistan", value:"PAK", cities:["Lahore","Karachi"]},
  {name:"United States", value:"US", cities:["New York","Los Angeles"]},
  {name:"United Kingdom", value:"UK", cities:["London","Manchester"]},
  {name:"China", value:"CN", cities:["Beijing","Shanghai"]},
  {name:"Brazil", value:"BR", cities:["Rio de Janeiro","Sao Paulo"]},
  {name:"Russia", value:"RU", cities:["Moscow","Saint Petersburg"]},
  {name:"Germany", value:"DE", cities:["Berlin","Munich"]},
  {name:"Australia", value:"AU", cities:["Sydney","Melbourne"]},
  {name:"Canada", value:"CA", cities:["Toronto","Vancouver"]},
];



const App = ()=>{

  const [countryValue,setCountryValue] = useState(
    {
      countryName:countries[0].value,
    }
  )

  return(
    <>
      <select onChange={(e)=>(
        setCountryValue({...countryValue,countryName:e.target.value})
      )}>
        {
          countries.map((eachCountryOption,index)=>(
            <option value={eachCountryOption.value} key={index}>
              {eachCountryOption.name}
            </option>
          ))
        }
      </select>
      {
        countries.map((each)=>(
          each.value===countryValue.countryName?(
            <select>
              {
                each.cities.map((cityValue,index)=>(
                  <option key={index}>{cityValue}</option>
                ))
              }
            </select>
          ):null
        ))
      }
    </>
  )
}
export default App;