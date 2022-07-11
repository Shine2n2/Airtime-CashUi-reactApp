import React from "react";
import { Link } from "react-router-dom";


function ManageCard() {
    return (
      <section>
      <div class="row mt-5" style={{height: '20rem', backgroundColor: "rgba(222, 61, 109, 0.1)"}}></div>
         <div class='row justify-content-center px-5 zee'>
            <div Class="card col-sm-12 px-3 mx-2 shadow" style={{width: "45rem", height: "auto"}}>
              <div class="text-center pt-5 mt-3 pb-5"><h2><strong>Manage Card</strong></h2></div>
              
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
                                <span class="px-3 pt-3"><strong>Bank Account</strong></span>
                                <span class="spanright px-3" style={{color:'#DE3D6D'}}><a class="colorchange" href="#SellAirtime"> View Bank accounts</a></span>
                          </div>
  
                          <div class=" mx-4">
                              
                              <form>
                                  <label>Select Bank</label>
                                  <select class="form-select form-control-lg p-3 mb-4 removebod" id="in-SelectBank">
                                      <option selected>Select Bank</option>
                                      <option value="MTN">GT Bank</option>
                                      <option value="GLO">First Bank</option>                                    
                                  </select>
                                    <label>Account Name</label>
                                    <input class="form-control input-lg p-3 mb-4 removebod" type="text" id="in-AccountName" placeholder="Account Name"/>
                                    <label>Account Number</label>
                                    <input class="form-control input-lg p-3 mb-4 removebod" type="text" id="in-AccountNumber" placeholder="Account Number" />
                                    
                                    <button type="submit" class="btn btn-primary p-3 mt-3 mb-5 removebod" id="bt-AddAccount" style={{width: '40%', backgroundColor: '#DE3D6D', border:'0em'}} >Add Account</button>                                                             
                                </form>
                          </div>
              </div>                                  
            </div>
          </div>
                 
       </section>
    );
  }
  
  export default ManageCard;