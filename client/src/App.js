import {useState,useRef, useEffect} from "react"
import './App.css';
import deleteIcon from './images/trash-can-arrow-up-solid.svg'


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

const listOfArray = ["play cricket","play video game","read book"]


const App = ()=>{

  useEffect(()=>{
    data.current.focus() // auto focusing
  })

  const [arrayOfList,setArrayOfList] = useState(listOfArray)
  const [countryValue,setCountryValue] = useState(
    {
      countryName:countries[0].value,
    }
  )
  const data = useRef(null)

 
  return(
    <>
      <div>
        <input ref={data}
         onChange={(e)=>(console.log(data.current.value))}
         type="text" />
      </div>
      <ul>
        {
          arrayOfList.map((each,index)=>(
            <li key={index} className="each-li-container">
              <input type="checkbox" className="check-box" />              
              {each}                 
              <img src={deleteIcon} onClick={()=>{
                setArrayOfList(
                  arrayOfList.filter((e)=>e!==arrayOfList[index])
                )                   
                }}
                className="delete-icon" 
                alt="deleteIcon"
              />
            </li>  
          ))
        }
      </ul>

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
        countries.map((each,index)=>(
          each.value===countryValue.countryName?(
            <select key={index}>
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
