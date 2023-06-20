import React, { Fragment} from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';



function Home()
{
    
    let history = useNavigate();
    
    const handleDelete=(Id)=>{
        var index=Employees.map(function(e){
            return e.Id
        }).indexOf(Id);
        Employees.splice(index,1);
        history('/');

    }
    const handleClear=(item)=>{
     /* var index = Employees.map(function(f){
        return null
      });*/
      Employees.splice(0);
      
     
      history('/');
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <center><h3>Employee List </h3> </center>
       <Table className =" table text-center" >
                   <thead>
                        <tr className="table-dark">
                            <th >
                                Name
                            </th>
                            <th>
                               Image
                            </th>
                            <th>

                            </th>
                            </tr>
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
                                            <button className="btn btn-outline-danger" onClick={()=>handleDelete(item.Id)}>DELETE</button>
                                        </td>                      
                                    </tr>
                                )
                            })
                            :
                            "No avaliable data to display"
                        }
                    </tbody>
                </Table>
                
                <div>                        
                <button className="btn btn-outline-primary" onClick={()=>handleClear()}>ClearAll</button>
                </div>
                
                <br></br>
                <br></br>
            </div>
        </Fragment>
    )
}

export default Home;
    