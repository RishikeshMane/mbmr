import React from 'react';
import ProductCarousel from './CommunityCard';
import im from '../../assets/comImg1.png';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: im,
    price: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'no',
    price: 15,
  },
  {
    id: 3,
    name: 'Product 3',
    image: im,
    price: 20,
  },
  {
    id: 4,
    name: 'Product 4',
    image: im,
    price: 10,
  },
  {
    id: 5,
    name: 'Product 5',
    image: im,
    price: 15,
  },
  {
    id: 6,
    name: 'Product 6',
    image: im,
    price: 20,
  },
  // Add more product objects as needed
];

const CommunityCarousal: React.FC = () => {
  return (
    <div>
      <ProductCarousel />
    </div>
  );
};

export default CommunityCarousal;
