import React from "react";
import { Link } from "react-router-dom";


function Withdraw() {
    return (
      <section>
      <div class="row mt-5" style={{height: '20rem', backgroundColor: "rgba(222, 61, 109, 0.1)"}}></div>
         <div class='row justify-content-center px-5 zee'>
            <div Class="card col-sm-12 px-3 mx-2 shadow" style={{width: "45rem", height: "auto"}}>
              <div class="text-center pt-5 mt-3 pb-5"><h2><strong>Dashboard</strong></h2></div>
              <div Class="jumbotron text-center text-white px-2-sm pt-4 px-4 mx-4" style={{height: "10rem", width: "92%", backgroundColor: "#DE3D6D", borderRadius: "25px"}}>
                    <h4>Wallet Balance</h4>
                    <h2><strong>N 21,000.00</strong></h2>
                    <div Class="badge rounded-pill bg-danger"><small>Account is active</small></div>  
              </div>
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
  
                          <div class=" mx-4">
                              <p class="pb-2 pt-3"><strong>Withdraw</strong></p>
                              <form>
                                  <label>Select Account</label>
                                  <select class="form-select form-control-lg p-3 mb-4 removebod" id="in-SelectAccount">
                                      <option selected>Select Network</option>
                                      <option value="MTN">Account 1</option>
                                      <option value="GLO">Account 2</option>
                                  </select>
                                  <label>Account Name</label>
                                    <input class="form-control input-lg p-3 mb-4 removebod" type="text" id="in-AccountName" placeholder="Babatunde Ola" readonly/>
                                    <label>Account Number</label>
                                    <input class="form-control input-lg p-3 mb-4 removebod" type="text" id="in-AccountNumer" placeholder="2987665533" readonly/>
                                    <label>Amount</label>
                                    <input type="text" class="form-control input-lg p-3 mb-4 removebod" id="in-Amount" placeholder="NGN"/>
                                    <label>Password</label>
                                    <input type="password" class="form-control input-lg p-3 mb-4 removebod" id="in-Password" placeholder="Password"/>
                                    
                                    <button type="submit" class="btn btn-primary p-3 mt-3 mb-5 removebod" id="bt-Withdraw" style={{width: '40%', backgroundColor: '#DE3D6D', border:'0em'}} >Withdraw</button>                                                             
                              </form>
                          </div>
              </div>                                  
            </div>
          </div>
                 
       </section>
    );
  }
  
  export default Withdraw;