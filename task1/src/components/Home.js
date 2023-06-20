import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';


function Home(){
    let history = useNavigate();
    const handleDelete=(Id)=>{
        var index=Employees.map(function(e){
            return e.Id
        }).indexOf(Id);
        Employees.splice(index,1);
        history('/');

    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
               
                <Table stripped bordered hover size="sm">
                    <thead>
                        <te>
                            <th >
                                Name
                            </th>

                            <th>
                               Image
                            </th>
                        </te>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length>0
                            ?
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}

                                        </td>
                                        
                                        <td>
                                           <img src= {item.Image} width="100" height="100"/>
                                        </td>
                                        <td>
                                            <button onClick={()=>handleDelete(item.Id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No avaliable data to display"

                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}
export default Home;
    