import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons'
function Card(){
    return <section class="pricing py-5">
    <div class="container">
      <div class="row">
        
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
              <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Single User</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>5GB Storage</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Unlimited Public Projects</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Community Access</li>
                <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>Unlimited
                  Private Projects</li>
                <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>Dedicated
                  Phone Support</li>
                <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>Free Subdomain
                </li>
                <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>Monthly Status
                  Reports</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
   
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
              <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span><strong>5 Users</strong></li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>50GB Storage</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Unlimited Public Projects</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Community Access</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Unlimited Private Projects</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Dedicated Phone Support</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Free Subdomain</li>
                <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>Monthly Status
                  Reports</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
              <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
              <hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span><strong>Unlimited Users</strong>
                </li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>150GB Storage</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Unlimited Public Projects</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Community Access</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Unlimited Private Projects</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Dedicated Phone Support</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span><strong>Unlimited</strong> Free
                  Subdomains</li>
                <li><span class="fa-li"><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>Monthly Status Reports</li>
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Card