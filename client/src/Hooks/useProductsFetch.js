import {useState, useEffect} from 'react';
import axios from 'axios';

export const useProductsFetch = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then((result) => {
          setProducts(result.data)
        })
      },[]);

      return {products};
}