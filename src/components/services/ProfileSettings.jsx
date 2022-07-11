import Logo from "../images/logoairtocash.png";
function ProfileSettings() {
      return (
        <section>
             <div class="row mt-5" style={{height: '20rem', backgroundColor: 'rgba(222, 61, 109, 0.1)'}}></div>
    
             <div class='row justify-content-center px-5 zee'>
              <div Class="card col-sm-12 px-3 mx-2 shadow" style={{width: "45%", height: "auto"}}>
                   
                    <div class="text-center pt-5 mt-3 pb-5">
                      <img src={Logo} class="img-fluid pb-5" alt="..."/>
                      <h3><strong>Basic Information</strong></h3>
                    </div>
                
                <div class="p-1 menu-effect">  
                                                    
                            <div class=" px-3 mx-5">                            
                                <form>                                
                                      <label>First Name</label>
                                      <input class="form-control input-lg p-2 mb-4 removebod" type="text" id="in-FirstName" placeholder="First Name"/>
                                      <label>Last Name</label>
                                      <input class="form-control input-lg p-2 mb-4 removebod" type="text" id="in-LastName" placeholder="Last Name" />
                                      <label>Phone Number</label>
                                      <input class="form-control input-lg p-2 mb-4 removebod" type="text" id="in-PhoneNumber" placeholder="Phone Number"/>
                                      <label>Email</label>
                                      <input class="form-control input-lg p-2 mb-4 removebod" type="email" id="in-Email" placeholder="Email"/>
                                      
                                      <button type="submit" class="btn btn-primary p-2 mt-3 mb-5 removebod" id="bt-Save" style={{width: '40%', backgroundColor: '#DE3D6D', border:'0em'}} >Save</button>                                                             
                                  </form>
                            </div>
                </div>                                  
              </div>
            </div>
             
    
        </section>
      );
     }

     export default ProfileSettings;