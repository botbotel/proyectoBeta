# Product Prototype — React, Firebase & Stripe

> **Legacy project.** This repository is kept as part of my development history and is not one of my current featured projects.

Experimental product prototype built with **React, Vite, Firebase and Stripe**.

The project explores several end-to-end product flows:

- Firebase Authentication
- registration and login
- user dashboard
- packages / catalogue views
- shopping cart
- Stripe PaymentIntent flow through a small Express server
- calendar-oriented UI
- client-side routing

## Stack

React · Vite · Firebase · React Router · Express · Stripe

## Local payment configuration

The Stripe server reads its secret key from the environment:

```bash
STRIPE_SECRET_KEY=sk_test_your_own_key
```

Use your own test credentials and never commit secret keys.

## Why this repository remains public

This is an older learning/product prototype and does not represent the architecture or code quality of my current work.

For a current engineering case study, see:

**[MadrigueritApp Showcase](https://github.com/botbotel/madrigueritapp-showcase)**

---

**Alberto Botella Guirado**  
Frontend / Product Engineer
