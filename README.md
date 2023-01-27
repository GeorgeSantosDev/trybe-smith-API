<h1>TrybeSmith</h1>

<p>
  TrybeSmith is a simple API built using NodeJS, Express, MySQL and TypeScript. MSC architecture (Models, Services, 
  Controllers) was applied in this project.
  
  The project was developed in a docker environment.

  The user is able to: 
  -  create and read orders;
  -  create and read products;
  -  create users;
  -  do log in;
 </p>

<h2> Built With </h2>

<div>
 <p> - NodeJS </p>
 <p> - Express </p>
 <p> - MySQL </p>
 <p> - Docker </p> 
 <p> - TypeScript </p>
 <p> - Conventional commits (extension) </p>
</div>

<h2>Endpoints</h2>

<h3> Products: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /products </strong>

<p> Get all products </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/products.png"/>

<br/>

<h3> - POST  </h3>

<strong> /products </strong>

<p> Create a new product </p>

<strong> Parameters:</strong>
<p> -body <p/>
<img src="./images/productPostBody.png" />

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/postProductResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "name is required" } </p>
<p> - { message: "amount is required" } </p>

<p> Status: 422 </p>
<p> - { message: "name length must be at least 3 characters long" } </p>
<p> - { message: "amount length must be at least 3 characters long" } </p>
<p> - { message: "name must be a string" } </p>
<p> - { message: "amount must be a string" } </p>

<br />
<br />
<br/>

<h3> User: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /users </strong>

<p> Create User </p>

<strong> Parameters:</strong>
<p> -body </p>
<img src="./images/createUserBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/createUserResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "username is required" } </p>
<p> - { message: "vocation is required" } </p>
<p> - { message: "password is required" } </p>
<p> - { message: "level is required" } </p>

<p> Status: 422 </p>
<p> - { message: "username length must be at least 3 characters long" } </p>
<p> - { message: "vocation length must be at least 3 characters long" } </p>
<p> - { message: "password length must be at least 8 characters long" } </p>
<p> - { message: "level must be greater than or equal to 1" } </p>
<p> - { message: "username must be a string" } </p>
<p> - { message: "vocation must be a string" } </p>
<p> - { message: "password must be a string" } </p>
<p> - { message: "level must be a number" } </p>

<br/>
<br/>
<br/>

<h3> Orders: </h3>
<hr />

<h3> - GET  </h3>
 
<strong> /orders </strong>

<p> Get all orders </p>

<strong> Parameters: No parameters </strong> </br></br>

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/orders.png"/>

<br/>

<h3> - POST  </h3>

<strong> /orders </strong>

<p> Create new order </p>

<strong> Parameters:</strong>
<p> -body </p>
<img src="./images/createOrderBody.png" />

<br />

<p> -headers </p>
<p> Authorization: token </p> 

<strong> Response: </strong>

<p> Status: 201 </p>
<img src="./images/createOrderResponse.png"/>

<p> Status: 401 </p>
<p> - { message: "Token not found" } </p>
<p> - { message: "Invalid token" } </p>

<p> Status: 400 </p>
<p> - { message: "productsIds is required" } </p>

<p> Status: 422 </p>
<p> - { message: "productsIds must be an array" } </p>
<p> - { message: "productsIds must include only numbers" } </p>

<br/>
<br/>
<br/>

<h3> Login: </h3>
<hr />

<h3> - POST  </h3>
 
<strong> /login </strong>

<p> Do log in </p>

<strong> Parameters:</strong>
<p> -body </p>
<img src="./images/loginBody.png" />

<strong> Response: </strong>

<p> Status: 200 </p>
<img src="./images/createUserResponse.png"/>

<p> Status: 400 </p>
<p> - { message: "username is required" } </p>
<p> - { message: "password is required" } </p>

<p> Status: 401 </p>
<p> - { message: "Username or password invalid" } </p>


<br/>
<br/>
<br/>

<h2>
  How try the application?
</h2>

<p>
  Using docker (version 1.29 > is required): </br></br>
   1. First run in your terminal <code>docker-compose up -d</code> to up containers. </br>
   2. Then use the command <code>docker exec -it trybesmith bash</code> to acess the container terminal. </br>
   3. After it use  <code>npm install</code> to install all dependences. </br>
   4. Run <code>npm run createDb</code> on container terminal to create and populate database.</br>
   5. Run <code>npm start</code> on container terminal to start the application.</br>
   6. If you don´t have any client extension to do the requestions download <code>Thunder Client</code> extension on VS Code.</br>
   7. Select the method on thunder client.</br>
   8. Do requisitions on thunder client using the URL shape http://localhost:3000/endpoint.
</p>
<p>
  Make sure that all containers are up and the ports 3000, 3006 and 33060 of your computer are available
</p>

<br />
<br />
<br /> 

<p> Any questions or suggestions? Contact me </p>

<a href="https://www.linkedin.com/in/george-santos-dev" rel="nofollow">
  <img
    height="50px"
    width="50px"
    src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg"
    alt="LinkedIn"
  />   
</a>
