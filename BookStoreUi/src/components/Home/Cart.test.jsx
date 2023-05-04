import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Card from './Card';
import Router from 'router';
describe("Cart test", () => {
    test("Should render card", () => {

        render(<Router>
            <Card 
                imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" 
                productName= "Truyện Hay"
                productPrice = {5000} 
                productId= "568cc1e1-84c8-4c88-9dbe-b202443fe5b9" 
                sold= {100}
                quantities= {100}
                vendorName = "Huy Gà"
                variantQuantities = {2}></Card>
            </Router>)
    })
})