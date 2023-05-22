import $ from 'jquery';
import moment from 'moment';
export default function Header({googleLogin,isLogin,user,logout,chat,chatAdd}) {
    return (
      <>
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-3">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="me-3" src="./images/favicon.png" alt="Logo" width={40} />
                    Canvas Hive
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item d-none">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item ms-4 d-none">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        <li className="nav-item ms-4">
                            {!isLogin?
                            <button className=" btn btn-outline-info py-2 px-5 text-dark rounded-pill" id="loginBtn" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>:
                            <div className="dropdown">
                                <button className="btn dropdown-toggle p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="bg-info rounded-circle text-white fw-bold avtar overflow-hidden">
                                        <img src={user.image} alt={user.name} className="img-fluid w-100"/></span>
                                </button>
                                <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
                                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                </ul>
                            </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">
                    <img className="me-2" src="./images/favicon.png" alt="Logo" width={27} />
                    Canvas Hive</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center py-5">
                    Coming Soon
                </div>
                <div className="modal-footer flex-column">
                    <p className="text-center d-block small fw-medium">Login Using:</p>
                    <div className="d-flex mt-2">
                        <div className="icon pointer" onClick={()=>{googleLogin();$("#loginModal .btn-close").click();}}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="50px" height="50px"><path d="M52,96C27.738,96,8,76.262,8,52S27.738,8,52,8c11.018,0,21.562,4.095,29.689,11.529 c1.264,1.155,2.033,2.803,2.106,4.518c0.073,1.712-0.55,3.418-1.71,4.68l-8.528,9.269l15.189-0.003 c3.079,0,5.758,2.189,6.371,5.205C95.703,46.081,96,49.043,96,52C96,76.262,76.262,96,52,96z" opacity=".35"/><path fill="#f2f2f2" d="M50,94C25.738,94,6,74.262,6,50S25.738,6,50,6c11.018,0,21.562,4.095,29.689,11.529 c1.264,1.155,2.033,2.803,2.106,4.518c0.073,1.712-0.55,3.418-1.71,4.68l-8.528,9.269l15.189-0.003 c3.079,0,5.758,2.189,6.371,5.205C93.703,44.081,94,47.043,94,50C94,74.262,74.262,94,50,94z"/><path fill="#f9b84f" d="M86.697,42.747h-3.022v-0.156h-33.77V57.6H71.11c-3.094,8.737-11.407,15.009-21.206,15.009 c-12.433,0-22.513-10.08-22.513-22.513s10.08-22.513,22.513-22.513c5.739,0,10.96,2.165,14.936,5.702L75.454,22.67 c-6.702-6.246-15.666-10.097-25.549-10.097c-20.722,0-37.522,16.801-37.522,37.522s16.801,37.522,37.522,37.522 s37.522-16.801,37.522-37.522C87.427,47.58,87.168,45.124,86.697,42.747z"/><path fill="#f4665c" d="M16.708,32.631l12.328,9.041c3.336-8.259,11.414-14.09,20.868-14.09 c5.739,0,10.96,2.165,14.936,5.702L75.454,22.67c-6.702-6.246-15.666-10.097-25.549-10.097 C35.492,12.573,22.993,20.71,16.708,32.631z"/><path fill="#96c362" d="M49.904,87.618c9.692,0,18.499-3.709,25.157-9.741L63.448,68.05 c-3.767,2.854-8.45,4.559-13.544,4.559c-9.76,0-18.046-6.223-21.168-14.908L16.5,67.129C22.71,79.28,35.321,87.618,49.904,87.618z"/><path fill="#2785bd" d="M86.697,42.747h-3.022v-0.156h-33.77V57.6H71.11c-1.486,4.197-4.186,7.816-7.668,10.452 c0.002-0.002,0.004-0.002,0.006-0.004l11.613,9.827c-0.822,0.747,12.366-9.019,12.366-27.78 C87.427,47.58,87.168,45.124,86.697,42.747z"/><path fill="none" stroke="#40396e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M86.747,42.492L49.5,42.5v15h21.715c-3.089,8.738-11.419,15-21.215,15c-12.426,0-22.5-10.074-22.5-22.5 c0-12.426,10.074-22.5,22.5-22.5c5.834,0,11.149,2.221,15.147,5.862l10.155-11.038C68.632,16.224,59.751,12.5,50,12.5 c-20.711,0-37.5,16.789-37.5,37.5S29.289,87.5,50,87.5S87.5,70.711,87.5,50C87.5,47.429,87.24,44.918,86.747,42.492z"/></svg>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="contactus shadow pointer"  data-bs-toggle="modal" data-bs-target={isLogin?"#contactUsModal":"#loginModal"}>
            <img src="./images/contactus.gif" alt="Contact Us"  className='img-fluid'/>
        </div>
        <div className="modal fade" id="contactUsModal" tabIndex="-1" aria-labelledby="contactUsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="contactUsModalLabel">
                        <img className="me-2" src="./images/favicon.png" alt="Logo" width={27} />
                        Canvas Hive</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center py-5">
                        <ul className='p-0'>
                            {chat.length === 0?"Welcome to chat":""}
                            {chat.map((elem)=>{
                                return(
                                <li className={elem.type !== 'user'?'my-message':"user-message"} key={elem.id}>
                                    <div className="message">
                                        <p>{elem.message}</p>
                                        <small className='float-start'>{moment(elem.time).format('h:mm A')}</small>
                                    </div>
                                    <span className="avatar ms-2 overflow-hidden">
                                        <img src={elem.type !== 'user'?"images/Bot.png":elem.imageurl} alt="Bot avtar" className='img-fluid' />
                                    </span>
                                </li>)
                            })}
                            
                        </ul>
                    </div>
                    <div className="modal-footer flex-column">
                        <form className='d-flex'>
                            <div className="input-group flex-nowrap">
                                <input type="text" id='chatInput' className="form-control" placeholder="Type Here" aria-label="Type Here" aria-describedby="addon-wrapping" />
                            </div>
                            <input className='btn btn-info ms-3' type="submit" value="Send" onClick={chatAdd} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="loader">
            <img src="images/loading.gif" alt="Loader" />
        </div>
      </>
    );
  }