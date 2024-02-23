import React, { useEffect, useState } from 'react';
import axios from 'axios';

// function Hi(){

//     return(
//         <div>
//             Rendering!!
//         </div>
//     );
// }



function Test() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getall')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h4>Data from Spring Boot Backend:</h4>
      <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th>Employee ID</th>
                    <th>Empolyee Name</th>
                    <th>Empolyee Mail_ID</th>
                    <th>Employee Password</th>
                    </tr>
                </thead>
                <tbody className='table-striped'>
                    {
                        data.map(employee=>
                            <tr key={employee.Empid}><td>{employee.id}</td>
                                    <td>{employee.username}</td>
                                    <td>{employee.useremail}</td>
                                    <td>{employee.userpassword}</td>
                                    </tr>
                            )
                    }
                </tbody>
            </table>
    </div>
  );
}

export default Test;