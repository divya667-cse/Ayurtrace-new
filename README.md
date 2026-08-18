# AyurTrace – Blockchain-Based Herb Traceability System

AyurTrace is a blockchain-powered traceability system for Ayurvedic herbs. It combines smart contracts, GPS geo-tagging, and QR-code verification to track herbs from farm to consumer, aiming to eliminate fraud and manual paper-based record keeping in the Ayurvedic supply chain.

## Problem

The Ayurvedic herb supply chain relies heavily on manual paper records, making it vulnerable to fraud, mislabeling, and a lack of transparency about where herbs actually come from. AyurTrace addresses this by creating a tamper-proof, verifiable record of a herb's journey using blockchain.

## How It Works

AyurTrace uses a 3-layer verification system:

1. **GPS Geo-Tagging** – Captures the origin location of the herb at the point of harvest.
2. **QR Code Scan** – Each batch is assigned a unique QR code that links to its traceability record.
3. **Blockchain Hash** – Every verification step is recorded immutably on-chain via a smart contract, ensuring the data can't be altered after the fact.

Together, these layers achieve 100% data integrity across the supply chain, from harvest to end consumer.

## Tech Stack

- **Blockchain / Smart Contracts:** Solidity (`HerbTraceability.sol`)
- **Backend:** Node.js (`server.js`)
- **QR Code Generation:** `qr.js`
- **Frontend:** HTML/JS (`index.html`)

## Project Structure

```
├── HerbTraceability.sol   # Smart contract for on-chain traceability records
├── server.js               # Backend server
├── qr.js                   # QR code generation/verification logic
├── index.html               # Frontend interface
├── package.json             # Project dependencies
└── package-lock.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the server
node server.js
```

Then open `index.html` in your browser to access the interface.

## Status

An IEEE conference paper documenting this system's design and methodology has been submitted and is currently under peer review.

## Contributors

Developed as a collaborative group project. Work was shared across all components (smart contract, backend, QR verification, and frontend) rather than strictly divided by module.

- [Divya K](https://github.com/divya667-cse) — B.Tech Computer Science, Presidency University
