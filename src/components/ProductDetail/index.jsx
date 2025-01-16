import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getProductColor, getSize } from '../../services/api';
import { CartContext } from '../../context/CartContext';
import ImageCarousel from '../ImageCarousel';
import * as St from './style';
import { ReactComponent as Price } from '../../accets/price.svg';
import { ReactComponent as AddToCart } from '../../accets/addToCart.svg';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [disabledSizes, setDisabledSizes] = useState(new Set());
    const [availableSizes, setAvailableSizes] = useState([]);

    useEffect(() => {
        getProduct(id).then(setProduct);
    }, [id]);

    useEffect(() => {
        if (product && selectedColor) {
            const fetchColor = async () => {
                try {
                    const color = await getProductColor(product.id, selectedColor);
                    const sizes = await Promise.all(color.sizes.map(sizeId => getSize(sizeId)));
                    setAvailableSizes(sizes)
                } catch (e) {
                    setAvailableSizes([])
                    console.log('Ошибка', e)
                }

            };
            fetchColor()
        }

    }, [product, selectedColor]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleColorChange = (colorId) => {
        setSelectedColor(colorId);
        setSelectedSize(null);
        setDisabledSizes(new Set());
    };

    const handleSizeChange = (sizeId) => {
        setSelectedSize(sizeId);
    };

    const handleAddToCart = () => {
        if (selectedColor && selectedSize) {
            const selectedColorData = product.colors.find(color => color.id === selectedColor);
            const selectedSizeData = availableSizes.find(size => size.id === selectedSize)
            addToCart({id: product.id, name: product.name, price: selectedColorData.price,
                images: selectedColorData.images }, selectedColorData.name, selectedSizeData.label);

            setDisabledSizes(prev => new Set(prev.add(selectedSize)));
            setSelectedSize(null);
        }
    };

    return (
        <St.MainWrapper>
            <St.ProductName>{product.name}</St.ProductName>
            {selectedColor && (
                <St.ImageWrapper>
                    <St.PriceLabel>${product.colors.find(color => color.id === selectedColor)?.price}</St.PriceLabel>
                    <Price style={{width: '100px', height: '100px'}}/>
                    <ImageCarousel images={product.colors.find(color => color.id === selectedColor)?.images} />
                </St.ImageWrapper>
            )}
            <St.SelectWrapper>
                <St.Label>Описание: {product.colors.find(color => color.id === selectedColor)?.description}</St.Label>
            </St.SelectWrapper>
            <St.SelectWrapper>
                <St.Label>Цвет:</St.Label>
                {product.colors.map((color) => (
                    <St.CircleSelectWrapper
                        key={color.id}
                        style={{
                            backgroundColor:
                                color.name === 'черный' ? '#000000' :
                                color.name === 'белый' ? '#f3f3f3' :
                                color.name === 'желтый' ? '#ffd551' :
                                color.name === 'синий' ? '#2142ff' :
                                '#cccccc',
                            border: selectedColor === color.id ? '1px solid #003eff' : '1px solid #333'
                        }}
                        onClick={() => handleColorChange(color.id)}
                    >
                    </St.CircleSelectWrapper>
                ))}
            </St.SelectWrapper>
            <St.SelectWrapper>
                <St.Label>Размер:</St.Label>
                {availableSizes.length === 0 && (<St.Label>Нет доступных размеров</St.Label>)}
                {availableSizes.map((size) => (
                    <St.CircleSelectWrapper
                        key={size.id}
                        style={{
                            border: selectedSize === size.id ? '1px solid #003eff' :
                                disabledSizes.has(size.id) ? '1px solid #ff0000' :
                                '1px solid #333'
                        }}
                        onClick={() => handleSizeChange(size.id)}
                        disabled={disabledSizes.has(size.id)}
                    >
                        {size.label}
                    </St.CircleSelectWrapper>
                ))}
            </St.SelectWrapper>
            <St.AddToCartWrapper style={{
                border: selectedColor && selectedSize ? '2px solid #34ff40 ' : '2px solid #ff4c4c'
            }} >
                <AddToCart onClick={handleAddToCart} disabled={!selectedColor || !selectedSize} />
            </St.AddToCartWrapper>
        </St.MainWrapper>
    );
};

export default ProductDetail;