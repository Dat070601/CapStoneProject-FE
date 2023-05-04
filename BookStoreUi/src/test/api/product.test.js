import { screen } from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import { fetchProductAsync, getProductById } from '../../api/product';
import { URL } from '../../constant';
import axios from 'axios';
import { complex } from 'framer-motion';

vi.mock('axios')

describe("Product Service", () => {
    beforeEach(() => {
        axios.get.mockReset()
      })
    
    test("Should return all product", async () => {
    const productsMock =[
        {
            "productId": "45f7a4a8-d859-4433-c339-08db18899e0f",
            "productName": "Naruto",
            "vendorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "productDescription": "string",
            "sold": 52,
            "quantity": 18,
            "vendorName": "BookDemoStore",
            "created": "2023-02-10T00:00:00",
            "images": [
                {
                    "imageId": "37d116e4-5d54-4eca-fbbe-08db18899e17",
                    "imageURL": "https://product.hstatic.net/200000343865/product/5_95cade826ed745f58186ffc2de34453e.jpg"
                }
            ],
            "productVariants": [
                {
                    "productVariantId": "6e7d3726-8e1f-4b80-7c4a-08db1889a5ea",
                    "vendorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "quantity": 18,
                    "productVariantName": "Naruto Part 1",
                    "productNowPrice": 50.0,
                    "productDefaultPrice": 500.0,
                    "productSalePrice": 50.0
                }
            ],
            "isSuccess": false,
            "message": null
        }
    ]
    axios.get.mockResolvedValue({
        data: productsMock,
    })
    const products = await fetchProductAsync(URL)
    expect(axios.get).toHaveBeenCalledWith('https://localhost:7018/api/product')
    expect(products).toStrictEqual(productsMock)
    })

    test("Should return a product", async () => {
        const productMock = {
            "productId": "45f7a4a8-d859-4433-c339-08db18899e0f",
            "productName": "Naruto",
            "vendorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "productDescription": "string",
            "sold": 52,
            "quantity": 0,
            "vendorName": "BookDemoStore",
            "created": "2023-02-10T00:00:00",
            "images": [
                {
                    "imageId": "37d116e4-5d54-4eca-fbbe-08db18899e17",
                    "imageURL": "https://product.hstatic.net/200000343865/product/5_95cade826ed745f58186ffc2de34453e.jpg"
                }
            ],
            "productVariants": [
                {
                    "productVariantId": "6e7d3726-8e1f-4b80-7c4a-08db1889a5ea",
                    "vendorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "quantity": 18,
                    "productVariantName": "Naruto Part 1",
                    "productNowPrice": 50.0,
                    "productDefaultPrice": 500.0,
                    "productSalePrice": 50.0
                }
            ],
            "isSuccess": true,
            "message": null
        }

        
        axios.get.mockResolvedValue({
            data: productMock,
        })

        const product = await getProductById(URL, '45f7a4a8-d859-4433-c339-08db18899e0f')
        expect(axios.get).toHaveBeenCalled('https://localhost:7018/api/product/45f7a4a8-d859-4433-c339-08db18899e0f')
        expect(product).toStrictEqual(productMock)
    })
})