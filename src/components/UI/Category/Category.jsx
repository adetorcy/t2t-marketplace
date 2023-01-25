import React from 'react';
import {Container, Row, Col} from "reactstrap";

import './Category.module.css';

const CategoryData =[
    {
        display:'Kitchenwares',
        imgUrl: "/images/cooking-pan.svg"
    },
    {
        display:'Clothing',
        imgUrl: "/images/clothing.svg"
    },
    {
        display:'Electronics',
        imgUrl: "/images/laptop.svg"
    },
    {
        display:'Furnitures',
        imgUrl: "/images/furniture.svg"
    },
    {
        display:'Free Stuffs',
        imgUrl: "/images/free-label.svg"
    },
    {
        display:'Others',
        imgUrl: "/images/add.svg"
    },
]



const Category = () => {
  return <Container className='cate_container'>
    <Row>
        {
            CategoryData.map((item, index)=>(
                <Col lg='2' md='4'>
                    <div className="category_item d-flex align-items-center gap-2">
                        <div className="category_img">
                            <img src={item.imgUrl} alt='category_item' width='60px' height='60px'/>
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))
        }
    </Row>
  </Container>
}

export default Category
