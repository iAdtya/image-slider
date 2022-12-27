import axios from 'axios';
import { useState } from 'react';

function Fea() {

    const [image, setImage] = useState([])
    const [page, setPage] = useState(1) 

    const getImage = (pageNumber) => {
        axios.get(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=spiti&per_page=20&client_id=Zlt5m_1QDfCZ2NTyvccqWJ32IUGuhWJm5XizH2oFtcQ`)
            .then((response) => {
                console.log(response);
                setImage(response.data.results)
                setPage(pageNumber) 
            })
    }
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={() => getImage(1)}>Get Image</button> 
                    </div>
                </div>
            </div>

            <div className="container my-3"> 
                <div className="row">
                    <div className="col-4">
                        {page > 1 && <button className="btn btn-secondary" onClick={() => getImage(page - 1)}>Previous</button>}
                    </div>
                    <div className="col-4 text-right">
                       
                        {image.length === 20 && <button className="btn btn-secondary" onClick={() => getImage(page + 1)}>Next</button>}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        image.map((value, index) => {
                            return (
                                <div key={index} className="col-3">
                                    <div className="card" style={{ width: "18rem", border: "1px solid black" }}>
                                        <div className="card-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <img src={value.urls.thumb} className="card-img-top" alt={value.alt_description} width="200" height="200" />
                                        </div>


                                        <div className="card-body">
                                            <h5 className="card-title">{value.user.name}</h5>
                                            <h5 className="Time">{value.created_at}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Fea
