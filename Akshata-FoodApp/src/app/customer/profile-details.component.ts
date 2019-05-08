import { Component } from '@angular/core';

@Component({
    // selector: 'sky-vertical-tabs-demo',
    templateUrl: "./profile-details.component.html"
})
export class ProfileDetailsComponent
{
    rating=6;
    starWidth= this.rating * 75/5;
    starColor="red";
    
    orders=[
        
        {
            "orderId":123456,
            "price":450,
            "ratings":3.2,
            "quantity":2,
            "dishName":"Pizza",
            "status":"Delivered",
            "imgUrl":"assets/images/pizza.jpg",
            "date":"25 April 2019"
        },
        {
            "orderId":123457,
            "price":200,
            "ratings":4.2,
            "quantity":3,
            "dishName":"Ice Cream",
            "status":"Delivered",
            "imgUrl":"assets/images/icecream.jpg",
            "date":"30 April 2019"
            
        },
        {
            "orderId":123458,
            "price":100,
            "ratings":4.0,
            "quantity":4,
            "dishName":"Burger",
            "status":"Delivered",
            "imgUrl":"assets/images/burger.jpg",
            "date":"1 May 2019"
            
        }
        
    ];
    



    users=
        {
        "id":101,
        "name":"Jeny Doe",
        "address":"shivaji chowk,LMN Road",
        "city":"Mumbai",
        "imageUrl":"assets/images/profile.jpg",
        "firstAddress":"Shiivaji Chowk , Near Axis Bank ,Mumbai",
        "secondAddress":"LMN Road ,Near Railway Station,Thane",
        "comments":"Delicious food and good service"
    }
   
}