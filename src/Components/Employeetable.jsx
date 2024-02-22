import React, { useEffect, useState } from 'react'
import { listofemps } from './EmployeeService'
// import React,(useEffect,useState) from 'react'
const Employeetable = () => {
    // const list=[
    //     {"Empid":1,"username":"Basavaraj",
    //     "Usermail": "basu@gmail.com"},
    //     {
    //         "Empid":2,
    //         "username":"Karthik",
    //     "Usermail": "karthi@gmail.com",
    //     },
    //     {
    //         "Empid":3,
    //         "username":"Harsh",
    //         "Usermail": "harsh@gmail.com"
    //     },
    //     {
    //         "Empid":4,
    //         "username":"Simon",
    //         "Usermail": "simon@gmail.com"
    //     }
    // ]

    const [employees, setemployees] = useState([])

    useEffect(() => {
      listofemps().then((response)=>{
        setemployees(response.data);
      }).catch(error=>{
        console.error(error)
      })
    }, [])
    

    const divStyle = {
        backgroundColor: 'sky-blue',
        padding: '20px', // Just for spacing
        color: 'B' // Text color
      };

  return (
    <div style={divStyle} className='container' >
        {/* <h4>Hiiiii</h4> */}
        <h3>Welcome Buddies!!</h3>
         <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th>Employee.ID</th>
                    <th>Empolyee Name</th>
                    <th>Empolyee Mail_ID</th>
                    </tr>
                </thead>
                <tbody className='table-striped'>
                    {
                        listofemps.map(employee=>
                            <tr key={employee.Empid}><td>{employee.Empid}</td>
                                    <td>{employee.username}</td>
                                    <td>{employee.Usermail}</td>
                                    </tr>
                            )
                    }
                </tbody>
            </table></div>
  )
}

export default Employeetable