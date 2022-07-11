import React from "react";
import { Link } from "react-router-dom";


function ManageBank() {
    return (
      <section>
      <div class="row mt-5" style={{height: '20rem', backgroundColor: "rgba(222, 61, 109, 0.1)"}}></div>
         <div class='row justify-content-center px-5 zee'>
            <div Class="card col-sm-12 px-3 mx-2 shadow" style={{width: "45rem", height: "auto"}}>
              <div class="text-center pt-5 mt-3 pb-1"><h2><strong>Managed Bank</strong></h2></div>
              
              <div class="p-1 menu-effect">  
              <ul class="nav nav-fill pt-4 pb-3 mx-2">
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
  
                          <div class="pt-3 px-2 pb-5">
                                <span class="px-3 pt-3"><strong>Bank Accounts</strong></span>
                                <span class="spanright px-3" style={{color:'#DE3D6D'}}><a class="colorchange" href="#SellAirtime"> View Bank accounts</a></span>
                          </div>
  
                          <div class=" mx-1">
                            
                                      <div class="jumbotron text-dark bg-white px-4 pt-2 mx-4 shadow-sm mb-5 bg-white rounded" style={{height: '9rem', backgroundColor: '#DE3D6D', borderRadius: '0px'}}>
                                          <span class="px-3 pt-3"><strong>First Bank</strong></span>                      
                                          <div class="px-3 pt-1">
                                              <span>3170087553</span>                        
                                              <a class="nav-link spanright p-2" style={{backgroundColor: '#e9ece9', color:'#585a59', borderRadius: '25px'}} href="#ManageBankAccount" >Remove</a>
                                          </div>      
                                          <div class="px-3 pt-1">
                                            <span>Babatunde Ola</span>                        
                                          </div>          
                                      </div>   
                                
                                      <div class="jumbotron text-dark bg-white pt-2 px-4 mx-4 shadow-sm mb-5 bg-white rounded" style={{height: '9rem', backgroundColor: '#DE3D6D', borderRadius: '0px'}}>
                                          <span class="px-3 pt-3"><strong>GT Bank</strong></span>                      
                                          <div class="px-3 pt-1">
                                              <span>3170087553</span>                        
                                              <a class="nav-link spanright p-2" style={{backgroundColor: '#e9ece9', color:'#585a59', borderRadius: '25px'}} href="#ManageBankAccount" >Remove</a>
                                          </div>      
                                            <div class="px-3 pt-1">
                                              <span>Babatunde Ola</span>                        
                                            </div>        
                                      </div>
  
                                <div class="px-4 pb-5">
                                  <button type="submit" class="btn btn p-3 mt-3 mb-3 removebod" id="bt-AddNewBank" style={{width: '17rem', backgroundColor: '#DE3D6D', border:'0em'}} >
                                  <Link to="/manageCard" className='btnColor'>
                                    Add New Bank
                                    </Link>
                                  </button>
                                    
                                </div>
                          </div>
              </div>                                  
            </div>
          </div>
                 
       </section>
    );
  }
  
  export default ManageBank;