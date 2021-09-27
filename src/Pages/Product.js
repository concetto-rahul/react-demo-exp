import { useEffect, useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import ProductListComp from '../Components/ProductList';

function Product(){
    const [productList,setProductList]=useState([]);
    const [loadmoreTxt,setLoadmoreTxt]=useState(false);

    const showMoreProducts=(url)=>{
        setLoadmoreTxt(true);
        fetch(url).then((result)=>{
            result.json().then((resp)=>{
                if(resp.data.data){
                    if(productList.data){
                        Array.prototype.unshift.apply(resp.data.data,productList.data)
                    }
                    console.log(productList.data,resp.data.data);
                    setProductList(resp.data);
                    setLoadmoreTxt(false);
                }
            })
        });
    }

    useEffect(()=>{
        showMoreProducts("http://localhost/laravel-demo/public/api/product/list");
    },[])

    return (
        <>
            <h1>Product</h1>
            <p>This is Product page </p>
            <Row>
                {
                    productList.data && 
                    productList.data.map((item)=>{
                        return <Col lg={3} sm={6} className="mb-5" key={item.id}><ProductListComp data={item}/></Col>
                    })
                }
                {
                    productList.next_page_url
                    ?<Col lg={12} sm={12}><Button id="loadmorebtn" variant="info" data-currentactivepage={productList.current_page} data-totalitem={productList.total} onClick={()=>showMoreProducts(productList.next_page_url)}>{loadmoreTxt?"Loading ...":"Show More"}</Button></Col>
                    :""
                }
            </Row>
        </>
    )
}

export default Product;