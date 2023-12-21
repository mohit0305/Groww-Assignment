# Checkout Experience Web Application

This web application is developed to provide users with a user-friendly, visually engaging, and responsive checkout experience. The project covers the final three steps of the checkout flow:

## Tech Stack

- **Next.js**: A React framework for building a robust and efficient web application.
- **Zustand**: State management library for managing application state with simplicity.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/checkout-experience.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Implemented Functionalities

### Checkout Page
- Fetches order details and payment methods from the API.
- Displays a summary section with the order total and a call-to-action button to proceed.
- Handles intermittent calls with an empty state if the product list is empty.

### Payment Options Page
- Allows users to choose their preferred payment method.
- Renders visually distinct representations for each payment method.
- Provides seamless switching between payment methods.

### Order Confirmation Page
- Displays order details, selected payment method, and a status message indicating the success or failure of the transaction.
- Incorporates randomized order states, including Success, Failure, and Pending.

## Must-Haves

### Caching
- Implements local API cache according to necessity.

### Interactive Elements
- Creates a responsive and dynamic user interface with smooth transitions and animations.

### Validation
- Ensures proper form validation on each page to handle user input errors and validates payment information.

### Visual Appeal
- Crafts a visually appealing design aligned with modern UI/UX principles, considering color schemes, typography, and overall aesthetics.

### Responsiveness
- Ensures the application is responsive and works well on various screen sizes.

### User-Friendly Flow
- Designs an intuitive and easy-to-navigate flow from checkout to payment selection and confirmation.

## Tech Stack

### Next.js
Next.js is a powerful React framework that simplifies the development of server-rendered React applications. It offers features like automatic code splitting, server-side rendering, and a simple API for routing.

### Zustand
Zustand is a lightweight state management library for React applications. It provides a simple and flexible way to manage state without the need for complex setups.

## Additional Challenge

Incorporates a White Labeling feature allowing the application's theme to change dynamically according to the brand. Brands have the ability to customize the color scheme, logo, and overall styling of the application.

