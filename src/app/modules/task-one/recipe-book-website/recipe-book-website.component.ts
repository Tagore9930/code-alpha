import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book-website',
  templateUrl: './recipe-book-website.component.html',
  styleUrls: ['./recipe-book-website.component.scss']
})
export class RecipeBookWebsiteComponent {

  firstOrder: any = [
    {
      "img": "/assets/task-1-images/first-order/img-1.jpg",
      "title": "Biryani"
    },
    {
      "img": "/assets/task-1-images/first-order/img-2.jpg",
      "title": "Pizza"
    },
    {
      "img": "/assets/task-1-images/first-order/img-3.jpg",
      "title": "Chicken"
    },
    {
      "img": "/assets/task-1-images/first-order/img-4.jpg",
      "title": "Thali"
    },
    {
      "img": "/assets/task-1-images/first-order/img-5.jpg",
      "title": "Fried Rice"
    },
    {
      "img": "/assets/task-1-images/first-order/img-6.jpg",
      "title": "Dosa"
    },
    {
      "img": "/assets/task-1-images/first-order/img-7.jpg",
      "title": "Cake"
    },
    {
      "img": "/assets/task-1-images/first-order/img-8.jpg",
      "title": "North Indian"
    },
    {
      "img": "/assets/task-1-images/first-order/img-9.jpg",
      "title": "Burger"
    },
    {
      "img": "/assets/task-1-images/first-order/img-10.jpg",
      "title": "Paratha"
    },
    {
      "img": "/assets/task-1-images/first-order/img-11.jpg",
      "title": "Rolls"
    },
    {
      "img": "/assets/task-1-images/first-order/img-12.jpg",
      "title": "Sandwich"
    },
  ];

  topBrands: any = [
    {
      "img": "/assets/task-1-images/top-brands/img-1.jpg",
      "title": "Meghana Foods",
      "time": "19 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-2.jpg",
      "title": "Empire Restaurant",
      "time": "27 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-3.jpg",
      "title": "Domino's Pizza",
      "time": "24 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-4.jpg",
      "title": "McDonald's",
      "time": "19 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-5.jpg",
      "title": "Burger King",
      "time": "32 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-6.jpg",
      "title": "Truffles",
      "time": "21 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-7.jpg",
      "title": "KFC",
      "time": "22 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-8.jpg",
      "title": "FreshMenu",
      "time": "47 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-9.jpg",
      "title": "A2B - Adyar Ananda Bhavan",
      "time": "24 min"
    },
    {
      "img": "/assets/task-1-images/top-brands/img-10.jpg",
      "title": "Pizza Hut",
      "time": "26 min"
    },
  ];

  bestFoods: any = [
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-1.jpg",
      "title": "A2B - Adyar Ananda Bhavan",
      "rating": "4.3",
      "location": "South Indian, North Indian",
      "amount": "150 for one",
      "time": "29 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-2.jpg",
      "title": "IDC Kitchen",
      "rating": "4.3",
      "location": "South Indian, Beverages",
      "amount": "150 for one",
      "time": "27 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-3.jpg",
      "title": "Burger King",
      "rating": "4.0",
      "location": "Burger, Fast Food",
      "amount": "150 for one",
      "time": "24 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-4.jpg",
      "title": "Namaste",
      "rating": "4.2",
      "location": "South Indian, Beverages",
      "amount": "150 for one",
      "time": "19 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-5.jpg",
      "title": "Kanti Sweets",
      "rating": "4.3",
      "location": "Mithai, Desserts",
      "amount": "150 for one",
      "time": "32 min"
    },
    {
      "offer": "20%",
      "img": "/assets/task-1-images/best-foods/img-6.jpg",
      "title": "Paakashala",
      "rating": "4.1",
      "location": "South Indian, North Indian",
      "amount": "150 for one",
      "time": "21 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-7.jpg",
      "title": "Sri Udupi Food Hub",
      "rating": "4.2",
      "location": "South Indian, Chinese",
      "amount": "150 for one",
      "time": "22 min"
    },
    {
      "offer": "20%",
      "img": "/assets/task-1-images/best-foods/img-8.jpg",
      "title": "Brahmins' Thatte Idli",
      "rating": "4.1",
      "location": "South Indian",
      "amount": "150 for one",
      "time": "47 min"
    },
    {
      "offer": "20%",
      "img": "/assets/task-1-images/best-foods/img-9.jpg",
      "title": "Vijayalakshmi Veg",
      "rating": "4.0",
      "location": "South Indian, Chinese",
      "amount": "150 for one",
      "time": "24 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-10.jpg",
      "title": "FreshMenu",
      "rating": "3.9",
      "location": "Continental, Oriental",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "10%",
      "img": "/assets/task-1-images/best-foods/img-11.jpg",
      "title": "Sri Udupi Park",
      "rating": "4.3",
      "location": "South Indian, Chinese",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-12.jpg",
      "title": "Kaapi Katte",
      "rating": "3.8",
      "location": "South Indian, Beverages",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-13.jpg",
      "title": "Madurai Idly Shop",
      "rating": "4.0",
      "location": "South Indian",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-14.jpg",
      "title": "Priyadarshini Grand",
      "rating": "4.4",
      "location": "South Indian, North Indian",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-15.jpg",
      "title": "Chai Point",
      "rating": "4.0",
      "location": "Tea, Coffee, Beverages",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-16.jpg",
      "title": "New Udupi Grand",
      "rating": "3.8",
      "location": "South Indian, North Indian",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-17.jpg",
      "title": "The Filter Coffee",
      "rating": "4.5",
      "location": "South Indian, Beverages",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-18.jpg",
      "title": "Krishnam Veg",
      "rating": "4.1",
      "location": "South Indian, North Indian",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-19.jpg",
      "title": "By 2 Coffee",
      "rating": "4.4",
      "location": "South Indian",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-20.jpg",
      "title": "Theobroma",
      "rating": "4.5",
      "location": "Bakery, Desserts",
      "amount": "250 for one",
      "time": "26 min"
    },
    {
      "offer": "50%",
      "img": "/assets/task-1-images/best-foods/img-21.jpg",
      "title": "Veena Stores Since 1977",
      "rating": "4.5",
      "location": "South Indian",
      "amount": "100 for one",
      "time": "26 min"
    },
  ];

  popularCuisines: any = [
    {
      "name": "Beverages food near me"
    },
    {
      "name": "Biryani food near me"
    },
    {
      "name": "Burger food near me"
    },
    {
      "name": "Chinese food near me"
    },
    {
      "name": "Continental food near me"
    },
    {
      "name": "Desserts food near me"
    },
    {
      "name": "Ice Cream food near me"
    },
    {
      "name": "Italian food near me"
    },
    {
      "name": "Juices food near me"
    },
    {
      "name": "Kebab food near me"
    },
    {
      "name": "Mughlai food near me"
    },
    {
      "name": "North Indian food near me"
    },
    {
      "name": "Pizza food near me"
    },
    {
      "name": "Rolls food near me"
    },
    {
      "name": "Sandwich food near me"
    },
    {
      "name": "Seafood food near me"
    },
    {
      "name": "Shake food near me"
    },
    {
      "name": "Sichuan food near me"
    },
    {
      "name": "South Indian food near me"
    },
    {
      "name": "Street food near me"
    }
  ];

  popularRestaurant: any = [
    {
      "name": "Bakeries near me"
    },
    {
      "name": "Bars near me"
    },
    {
      "name": "Beverage near me"
    },
    {
      "name": "Bhojanalya near me"
    },
    {
      "name": "Cafes near me"
    },
    {
      "name": "Casual Dining near me"
    },
    {
      "name": "Clubs near me"
    },
    {
      "name": "Cocktail near me"
    },
    {
      "name": "Confectioneries near me"
    },
    {
      "name": "Dessert Parlors near me"
    },
    {
      "name": "Dhabas near me"
    },
    {
      "name": "Fine Dining near me"
    },
    {
      "name": "Food Courts near me"
    },
    {
      "name": "Food Trucks near me"
    },
    {
      "name": "Irani Cafes near me"
    },
    {
      "name": "Kiosks near me"
    },
    {
      "name": "Lounges near me"
    },
    {
      "name": "Microbreweries near me"
    },
    {
      "name": "Paan Shop near me"
    },
    {
      "name": "Pubs near me"
    },
    {
      "name": "Quick Bites near me"
    },
    {
      "name": "Sweet Shops near me"
    },
  ];

  cities: any = [
    {
      "id": "2",
      "city": "Bengaluru"
    },
    {
      "id": "44",
      "city": "Hubli-Dharwad"
    },
    {
      "id": "82",
      "city": "Belagavi"
    },
    {
      "id": "84",
      "city": "Mangaluru"
    },
    {
      "id": "89",
      "city": "Davanagere"
    },
    {
      "id": "95",
      "city": "Ballari"
    },
    {
      "id": "115",
      "city": "Tumkur"
    },
    {
      "id": "127",
      "city": "Shivamogga"
    },
    {
      "id": "163",
      "city": "Raayachuru"
    },
    {
      "id": "211",
      "city": "Robertson Pet"
    },
    {
      "id": "245",
      "city": "Kolar"
    },
    {
      "id": "247",
      "city": "Mandya"
    },
    {
      "id": "260",
      "city": "Udupi"
    },
    {
      "id": "272",
      "city": "Chikkamagaluru"
    },
    {
      "id": "300",
      "city": "Karwar"
    },
    {
      "id": "311",
      "city": "Ranebennuru"
    },
    {
      "id": "363",
      "city": "Ranibennur"
    },
    {
      "id": "401",
      "city": "Ramanagaram"
    },
    {
      "id": "402",
      "city": "Gokak"
    },
    {
      "id": "422",
      "city": "Yadgir"
    },
    {
      "id": "451",
      "city": "Rabkavi Banhatti"
    },
    {
      "id": "472",
      "city": "Shahabad"
    },
    {
      "id": "480",
      "city": "Sirsi"
    },
    {
      "id": "510",
      "city": "Sindhnur"
    },
    {
      "id": "521",
      "city": "Tiptur"
    },
    {
      "id": "602",
      "city": "Arsikere"
    },
    {
      "id": "609",
      "city": "Nanjangud"
    },
    {
      "id": "613",
      "city": "Sagara"
    },
    {
      "id": "615",
      "city": "Sira"
    },
    {
      "id": "642",
      "city": "Puttur"
    },
    {
      "id": "664",
      "city": "Athni"
    },
    {
      "id": "686",
      "city": "Mulbagal"
    },
    {
      "id": "691",
      "city": "Surapura"
    },
    {
      "id": "696",
      "city": "Siruguppa"
    },
    {
      "id": "702",
      "city": "Mudhol"
    },
    {
      "id": "721",
      "city": "Sidlaghatta"
    },
    {
      "id": "743",
      "city": "Shahpur"
    },
    {
      "id": "751",
      "city": "Saundatti-Yellamma"
    },
    {
      "id": "753",
      "city": "Wadi"
    },
    {
      "id": "763",
      "city": "Manvi"
    },
    {
      "id": "769",
      "city": "Nelamangala"
    },
    {
      "id": "777",
      "city": "Lakshmeshwar"
    },
    {
      "id": "781",
      "city": "Ramdurg"
    },
    {
      "id": "784",
      "city": "Nargund"
    },
    {
      "id": "791",
      "city": "Tarikere"
    },
    {
      "id": "792",
      "city": "Malavalli"
    },
    {
      "id": "796",
      "city": "Savanur"
    },
    {
      "id": "801",
      "city": "Lingsugur"
    },
    {
      "id": "806",
      "city": "Vijayapura"
    },
    {
      "id": "857",
      "city": "Sankeshwara"
    },
    {
      "id": "858",
      "city": "Madikeri"
    },
    {
      "id": "879",
      "city": "Talikota"
    },
    {
      "id": "882",
      "city": "Sedam"
    },
    {
      "id": "883",
      "city": "Shikaripur"
    },
    {
      "id": "896",
      "city": "Mahalingapura"
    },
    {
      "id": "910",
      "city": "Mudalagi"
    },
    {
      "id": "943",
      "city": "Muddebihal"
    },
    {
      "id": "948",
      "city": "Pavagada"
    },
    {
      "id": "955",
      "city": "Malur"
    },
    {
      "id": "961",
      "city": "Sindhagi"
    },
    {
      "id": "962",
      "city": "Sanduru"
    },
    {
      "id": "976",
      "city": "Afzalpur"
    },
    {
      "id": "990",
      "city": "Maddur"
    },
    {
      "id": "994",
      "city": "Madhugiri"
    },
    {
      "id": "995",
      "city": "Tekkalakote"
    },
    {
      "id": "999",
      "city": "Terdal"
    },
    {
      "id": "1009",
      "city": "Mudabidri"
    },
    {
      "id": "1027",
      "city": "Magadi"
    },
    {
      "id": "1036",
      "city": "Navalgund"
    },
    {
      "id": "1042",
      "city": "Shiggaon"
    },
    {
      "id": "1058",
      "city": "Shrirangapattana"
    },
    {
      "id": "1074",
      "city": "Sindagi"
    },
    {
      "id": "1079",
      "city": "Sakaleshapura"
    },
    {
      "id": "1085",
      "city": "Srinivaspur"
    },
    {
      "id": "1137",
      "city": "Ron"
    },
    {
      "id": "1179",
      "city": "Mundargi"
    },
    {
      "id": "1184",
      "city": "Sadalagi"
    },
    {
      "id": "1200",
      "city": "Piriyapatna"
    },
    {
      "id": "1210",
      "city": "Adyar"
    }
  ];
}
