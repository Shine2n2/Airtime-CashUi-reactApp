import React from "react";
import { Link } from "react-router-dom";

function TransactionHistory() {
    return (
      <section>
      <div class="row mt-5" style={{height: '20rem', backgroundColor: "rgba(222, 61, 109, 0.1)"}}></div>
         <div class='row justify-content-center px-5 zee'>
            <div Class="card col-sm-12 px-3 mx-2 pb-5 shadow" style={{width: "45rem", height: "auto"}}>
              <div class="text-center pt-5 mt-3 pb-1"><h2><strong>Transactions</strong></h2></div>
              
              <div class="p-1 menu-effect">  
                          <ul class="nav nav-fill pt-4 pb-5 mx-2">
                              <li class="nav-item">
                              <Link  to= "/dashBoard"  class="nav-link text-dark active" id="link-SellAirtime" href="#SellAirtime" aria-selected="true">Sell Airtime</Link>
                              </li>
                              <li class="nav-item">
                              <Link  to= "/withdraw" class="nav-link text-dark" aria-selected="false">Withdraw Balance</Link>           
                              </li>
                              <li class="nav-item">
                              <Link to="/manageBank" class="nav-link text-dark"  aria-selected="false">Manage Bank Account</Link>
                              </li>
                              <li class="nav-item">
                                  <Link to= "/transactionHistory"class="nav-link text-dark" aria-selected="false">Transaction History</Link>
                              </li>
                          </ul>
  
                          
  
                          <div class=" mx-1">
                            
                                <div class="jumbotron text-dark bg-white px-4 pt-4 mx-4 mt-1 mb-3 shadow rounded" style={{height: '10rem', backgroundColor: '#DE3D6D', borderRadius: '0'}}>
                                    <span class="px-3 pt-3"><strong>Today, 10:15AM</strong></span>                        
                                    <div class="badge rounded-pill p-2 px-4 spanright" style={{backgroundColor: '#e1ede3', color:'#59a972'}}><small>Received</small></div>
                                    
                                    <div class="px-3 pt-2">
                                        <span>Withdraw Fund</span>                        
                                        <span class="spanright"><small>N5,000</small></span> 
                                    </div>      
                                    <div class="px-3 pt-2">
                                      <span>21/07/2022</span>                        
                                    </div>          
                                </div> 
  
                                <div class="jumbotron text-dark bg-white px-4 pt-4 mx-4 mt-1 mb-3 shadow rounded" style={{height: '10rem', backgroundColor: '#DE3D6D', borderRadius: '0'}}>
                                    <span class="px-3 pt-3"><strong>Today, 10:15AM</strong></span>                        
                                    <div class="badge rounded-pill p-2 px-4 spanright" style={{backgroundColor: '#e1ede3', color:'#59a972'}}><small>Received</small></div>
                                    
                                    <div class="px-3 pt-2">
                                        <span>Withdraw Fund</span>                        
                                        <span class="spanright"><small>N5,000</small></span> 
                                    </div>      
                                    <div class="px-3 pt-2">
                                      <span>21/07/2022</span>                        
                                    </div>          
                                </div> 
  
                                <div class="jumbotron text-dark bg-white px-4 pt-4 mx-4 mt-1 mb-3 shadow rounded" style={{height: '10rem', backgroundColor: '#DE3D6D', borderRadius: '0'}}>
                                    <span class="px-3 pt-3"><strong>Today, 10:15AM</strong></span>                        
                                    <div class="badge rounded-pill p-2 px-4 spanright" style={{backgroundColor: '#e1ede3', color:'#59a972'}}><small>Received</small></div>
                                    
                                    <div class="px-3 pt-2">
                                        <span>Withdraw Fund</span>                        
                                        <span class="spanright"><small>N5,000</small></span> 
                                    </div>      
                                    <div class="px-3 pt-2">
                                      <span>21/07/2022</span>                        
                                    </div>          
                                </div>                            
                          </div>
              </div>                                  
            </div>
          </div>
                 
       </section>
    );
  }

  export default TransactionHistory;
  