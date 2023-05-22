export default function Recommended({recommended}) {
    return (
      <>
        <section className="recommended py-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                <h2 className="fw-medium">RECOMMENDED PAINTING</h2>
                <button className="btn btn-info">View All</button>
                </div>
                <div className="row mt-4 flex-nowrap overflow-auto py-5">
                    {recommended.map((elem)=>{
                        return(<div className="col-lg-2-5 col-md-5 col-10" key={elem.id}>
                        <div className="card border-0 shadow">
                            <div className="card-body p-0">
                                <img src={elem.image} alt={elem.name} className="img-fluid w-100" />
                            </div>
                            <div className="card-footer bg-white border-0 pt-4">
                                <h5>{elem.name.slice(0,47)}</h5>
                                <h6>Price:</h6>
                                <p className="text-truncate">Description: {elem.description}</p>
                            </div>
                        </div>
                    </div>)
                    })}
                </div>
            </div>
        </section>
      </>
    );
  } 