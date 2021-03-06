import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CurrectProduct } from './types/fullInfoProductType';

export const FullInfoProduct: React.FC = () => {
    const [currectProduct, setCurrectProduct] = React.useState<CurrectProduct>();
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(
                    'https://62921194cd0c91932b6ccbee.mockapi.io/moroz/' + id,
                );
                setCurrectProduct(data);
            } catch (error) {
                navigate('/');
                alert('Ошибка загрузке. Возврат на главную страницу');
            }
        }
        fetchProduct();
    }, []);

    if (!currectProduct) {
        return <div>загрузка...</div>;
    }
    return (
        <div className="container">
            <div className="product-block" style={{ width: '100%' }}>
                <img className="product-block__image" src={currectProduct.imageUrl} alt="" />
                <h4 className="product-block__title">{currectProduct.title}</h4>
                <p>Состав: нет данных</p>
                <div>Пищевая ценность: нет данных</div>
            </div>
        </div>
    );
};
