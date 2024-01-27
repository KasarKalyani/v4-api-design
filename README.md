1. Run Application on local with "npm start"
2. Hit POST http://localhost:3001/user with username and password in body
3. Will create token use it for further api calls
 <img width="1008" alt="Screenshot 2024-01-27 at 2 06 00 PM" src="https://github.com/KasarKalyani/v4-api-design/assets/86671511/3b3bc3a5-8320-41ff-8036-270aaf259fbe">

5. Hit POST http://localhost:3001/api/product with token, and name in body
6. This will assign that product to same user
 <img width="1008" alt="Screenshot 2024-01-27 at 2 13 31 PM" src="https://github.com/KasarKalyani/v4-api-design/assets/86671511/93a2ccd5-c1bf-4c37-a80b-cd7bb795d5da">

8. Hit GET http://localhost:3001/api/product add token created in auth section 
9. will able to see same product details
 <img width="1008" alt="Screenshot 2024-01-27 at 2 14 00 PM" src="https://github.com/KasarKalyani/v4-api-design/assets/86671511/517d0db2-dfdd-4613-81e7-9c67d6398674">

11. Hit POST http://localhost:3001/api/update with name,productId and body details
 <img width="1008" alt="Screenshot 2024-01-27 at 2 22 01 PM" src="https://github.com/KasarKalyani/v4-api-design/assets/86671511/4bc2d086-dbb8-4ce0-a022-8475d821255a">

13. Hit GET http://localhost:3001/api/update/${update_id}
 <img width="1008" alt="Screenshot 2024-01-27 at 2 22 22 PM" src="https://github.com/KasarKalyani/v4-api-design/assets/86671511/055cccf4-a50c-47e7-936b-b8e32a38d8f0">

 14. run npx prisma studio will show data base on local


note -- 
Local setup -- 
Needs prisma and node packages setup on local
