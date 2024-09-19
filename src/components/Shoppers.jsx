import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function FakestoreCarousel(){

    const [product, setProduct] = useState({id:0, title:'', price:0, category:'', description:'', image:'', rating: {rate:0, count:0}});
    const [status, setStatus] = useState('Manual');

    let  count = useRef(1);
    let  thread = useRef(null);

    function LoadProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
             setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        count.current = count.current + 1;
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
        .then(response=> {
            setProduct(response.data);
        })
    }

    useEffect(()=>{
        LoadProduct(1);
    },[])

    function handleNextClick(){
        count.current = count.current + 1;
        LoadProduct(count.current);
    }

    function handlePreviousClick(){
        count.current = count.current - 1;
        LoadProduct(count.current);
    }

    function handlePlayClick(){
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show Running');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show Paused');
    }

    function handleSliderChange(e){
        count.current = e.target.value;
        LoadProduct(count.current);
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="card p-2 mt-4 w-50">
                    <div className="card-header text-center">
                         {product.title}
                         <div className="fw-bold">
                             {status}
                         </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button onClick={handlePreviousClick} className="bi bi-chevron-left btn btn-dark"></button>
                            </div>
                            <div className="col-10 position-relative">
                                <div className="position-absolute p-3 badge bg-danger rounded rounded-circle end-0 top-0">
                                    {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}
                                </div>
                                <img width="100%" height="350" src={product.image} />
                                <div className="my-2">
                                    <input onChange={handleSliderChange} min="1" max="20" value={count.current} type="range"  className="form-range" />
                                </div>
                            </div>
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="bi bi-chevron-right btn btn-dark"></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button onClick={handlePlayClick} className="bi bi-play btn btn-primary mx-2"></button>
                        <button onClick={handlePauseClick} className="bi bi-pause btn btn-danger mx-2"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
