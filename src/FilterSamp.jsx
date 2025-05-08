import React from "react";

const Person = [
    {
      name:'Mano',
      age:45
    },
    {
      name:'priyanka',
      age:30
    },
    {
        name:'Sridhar',
        age:31
    },
    {
        name:'Shreya',
        age:40
    },
    {
        name:'Srini',
        age:28
    }
]

function FilterSamp(){
    return (
        <div>
            {Person.filter(persn => persn.age>30)
            .map(pn=>(
                <ul>
                    <li>{pn.name}</li>
                    <li>{pn.age}</li>
                </ul>
            ))}
        </div>
    )
    
}

export default FilterSamp