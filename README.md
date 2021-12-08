### *** Amazon Clone ***


### Personal Notes

This been a personal project I did using a code along with Sonny Sangha Youtube channel, I been reading lots of documentation about Stripe, Next-Auth, Firebase, Google Cloud, Fake Store API. It has been my first project with NextJs and Tailwind and I got preatty impressed how faster it is insted of React and normal css (incredible features for routes and authentication). This project took me literally hundreds of hours to acomplish once every new feature I implement I had to stop with it and get deep on the new subjetc (firebase store & authentication, stripe & stripe cli for webhook, react hooks, next-auth, tailwind, heroicons, introdution with redux, etc). For many looks simple but for me is a huge step, for the first time I got really stuck many many times and manage to sort the issue by myself. Still some improvement (see the section 'Bugs' down in this REAME) and I am working on it. So far I am happy with this achievement :)


### Description

A aplication that replicate the main features from Amazon website and it is a great start for an Ecommerce. You can select products and add them to your basket. On your checkout page you can add more products or delete them. Once signin you will be able to pay through Stripe. All your purchases will be safe into Stripe & Firebase Store for further use of the data. All sigin in will be made with your personal accounts from Google or Github using Next-Auth.


### MVP
Add products to your basket.
Buy the products inside your basket.
Recive payments throught Strype.
Signin, login and logout with Next-Auth using Google or Github accounts.


### User Client Stories

- **404** - See a friendly 404 page when the page that doesn’t exist.
- **500** - see a friendly error page when the server is down.
- **homepage** - Navigate through the splash main homepage. 
- **checkout** - See and edit your basket before do the payment with Stripe.
- **orders** - See a history of your orders done.
- **success** - Get a success page to ensure the order been through.
- **sign up** - Create client account with Next-Auth.
- **login** - Be able to checkout and pay products from the basket with Stripe.
- **logout** - Ensure that your personal account session been closed.
- **products list** - See the list of products on the homepage.


### Backlog

- Add Nodemailer functionalities.
- Add sigin with email and credentials.
- Filters for products.
- Create personal 404 and 500 pages.


### Bugs (Working on it)

- Orders page show all the purchase times 3. Orders and payments goes throught right, it charges exactely the amount purchased but it renders 3 times. Some of the orders renders products that doesnt belong to that especifc order, still, details of price, date of orders, number of items are working well and rendering right.
- Singin and authentication with Next-Auth works perfectely in development mode (localhost3000) but doesnt work in production mode. All the credential been add to Vesel for deployment and the url been add to Google and Github as authorization callback URL but still not working.


### Client / Frontend

### Next Routes (React App)
| Path | Page | Behavior |
| - | - | - |
| `/` | Home Page | Home page, Login link, Signup link, show all products, show basket, link to orders |
| `/api/auth` | Signup - Login - Logout Page | Signup, Login, Logout link |
| `/api/create-checkout-session` | Redirect to Stripe | Create a session and redirect to Stripe to use it for the payment | 
| `/api/webhook` | Hook Stripe session info | Get the info from Stripe session whem it is created and returned it to our website to be store as history in our orders |
| `/checkout` | Checkout Page | Edit our basket or make a payment | 
| `/orders` | Orders Page | See the history of your orders | 
| `/success` | Success Page | Get the confirmation your orders been through | 


### Components

- Header (Home, Login / Signup / Logout, Search Bar, Link to Orders & Basquet).

- Banner (Carrousel with 3 diferent advertizes).

- CheckoutProducts (See basket, add or delete products, proceed to payment with Stripe).

- Orders (List of orders history)

- Product (Card with full description, reviews, details and features.).

- ProductFeed (Manage and organize all the product cards toguether).


### Data Structure FrontEnd
```
├── public
|   └── images
|       ├── advert.jpg
|       ├── advert2.png
|       ├── amazon-banner-1.jpg
|       ├── amazon-banner-2.jpg
|       ├── amazon-banner-3.jpg
|       ├── amazon-logo.png
|       └── prime.png
├── src
|   ├── app
|   |   └── store.js
|   ├── components
|   |   ├── Banner.js
|   |   ├── CheckoutProducts.js
|   |   ├── Header.js
|   |   ├── Order.js
|   |   ├── Product.js
|   |   └── ProductFeed.js
|   ├── pages
|   |   ├── api
|   |   |   ├── auth
|   |   |   |   └── [...nextauth].js
|   |   |   ├── create-checkout-session.js
|   |   |   └── webhook.js
|   |   ├── checkout
|   |   |   └── index.js
|   |   ├── orders
|   |   |   └── index.js
|   |   ├── success
|   |   |   └── index.js
|   |   ├── _app.js
|   |   └── index.js
|   ├── slices
|   |   └── basketSlice.js
|   └── styles
|       ├── global.css
|       └── reset.css
├── .env.local
├── .gitignore
├── firebaseClient.js
├── next.config.js
├── package-lock.json
├── package.json
├── permissions.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```


### Git
* [GitHub] https://github.com/jpsm83/amazon-clone


### Deployed URL
* [Vercel] https://amazon-clone-2-lake.vercel.app/