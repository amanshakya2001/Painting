export default function Category({category}) {
    return (
      <>
        <section id="category" className="py-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                <h2 className="fw-medium">CATEGORY</h2>
                </div>
                <div className="row mt-4 flex-nowrap overflow-auto py-5">
                    {category.map((elem)=>{
                        return(<div className="col-lg-2-5 col-md-5 col-10" key={elem.name}>
                        <div className="card border-0 shadow h-100" style={{backgroundImage:`url(${elem.image})`,color:'white'}}>
                            <div className="card-body py-5">
                                <h2 className="text-center">{elem.name}</h2>
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