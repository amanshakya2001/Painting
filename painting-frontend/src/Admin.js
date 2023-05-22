import { Link } from "react-router-dom";

export default function Admin({isLogin}) {
  return (<>
    {isLogin?
        <section id="admin" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-3 border border-1">
                <ul>
                  <li>1.<Link to="/admin/user">User</Link></li>
                </ul>
              </div>
              <div className="col-9 border border-1">
              </div>
            </div>
          </div>
        </section>
        :
        <p className="text-center py-5">Kindly Login to to see the admin panel</p>
    }
    </>
  )
}