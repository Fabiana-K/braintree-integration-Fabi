# Braintree Hosted Fields Integration

## Overview
This project integrates Braintree’s Hosted Fields for secure card data collection and transaction processing. It includes a client-side form using Braintree’s JavaScript SDK and a server-side integration using Node.js and Express.

## Features
- Secure Hosted Fields: Card Number, Expiration Date, CVV
- Tokenization using Braintree’s client SDK
- Transaction processing via Braintree’s Node.js SDK
- Error handling and user-friendly messages
- Tested on Braintree Sandbox

## Getting Started

### Prerequisites
- Node.js
- Braintree Sandbox Account

### Setup

#### Backend
1. Navigate to the `server/` directory.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with the following variables:
```
BT_MERCHANT_ID=your_merchant_id
BT_PUBLIC_KEY=your_public_key
BT_PRIVATE_KEY=your_private_key
```
4. Start the server with `node index.js`.

#### Frontend
1. Navigate to `client/` directory.
2. Open `index.html` in your browser.

## Testing

### Sandbox Cards
- Success: 4111 1111 1111 1111, any future date, any CVV
- Failure: 4000 1111 1111 1115 (Processor Declined)

## Notes
- Use HTTPS in production.
- Do not store card information.

## License
MIT
