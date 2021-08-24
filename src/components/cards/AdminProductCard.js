import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {

    // destructure 
    const { title, description, images, slug } = product;

  return <p>Hello am ProductCard</p>;
};

export default AdminProductCard;
