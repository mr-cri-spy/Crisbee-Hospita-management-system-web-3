# Crisbee Hospital Management System

A full-stack Web3-enabled smart hospital management platform that combines:
- **Next.js + Tailwind frontend**
- **Node.js + Express + MongoDB backend**
- **Solidity smart contracts (Hardhat)**
- **MetaMask authentication**
- **IPFS hash-first record strategy**
- **AI helpers for occupancy prediction, lab anomaly detection, and emergency triage**

## 1) Folder Structure

```text
.
├── apps
│   ├── api
│   │   └── src
│   │       ├── config
│   │       ├── controllers
│   │       ├── middleware
│   │       ├── models
│   │       ├── routes
│   │       └── services
│   └── web
│       └── src
│           ├── app
│           ├── components
│           └── lib
├── blockchain
│   ├── contracts
│   └── scripts
└── README.md
```

## 2) Smart Contract Layer (Ethereum testnet)

Contracts in `blockchain/contracts`:
- `AccessManager.sol`: role registry (`Admin`, `Doctor`, `Nurse`, `Receptionist`)
- `MedicalRecordRegistry.sol`: stores EMR IPFS hashes
- `InvoiceRegistry.sol`: stores invoice hashes for billing/insurance verification
- `PrescriptionValidator.sol`: validates prescriptions on-chain for pharmacy workflows

## 3) Backend APIs

Base URL: `http://localhost:5000`

### Core
- `GET /health`

### Patient module
- `POST /api/patients`
- `GET /api/patients`
- `POST /api/patients/:id/reports` (multipart file upload mocked to IPFS hash)

### Appointment module
- `POST /api/appointments`
- `PATCH /api/appointments/:id/status`

### AI module
- `POST /api/ai/bed-occupancy`
- `POST /api/ai/lab-anomaly`
- `POST /api/ai/triage`

## 4) Frontend pages

Main dashboard starts with title: **Crisbee Hospital Management System**.

Implemented module pages:
- `/patients`
- `/appointments`
- `/staff`
- `/emr`
- `/billing`
- `/pharmacy`
- `/laboratory`
- `/ward`
- `/emergency`
- `/inventory`
- `/telemedicine`
- `/feedback`

Frontend includes MetaMask wallet connect button and module grid.

## 5) Sample Deployment Steps

### Prerequisites
- Node.js 20+
- MongoDB
- MetaMask browser extension
- Sepolia RPC URL + funded account private key for deployer

### Install
```bash
npm install
```

### Run backend
```bash
npm run dev:api
```

### Run frontend
```bash
npm run dev:web
```

### Compile contracts
```bash
npm --workspace blockchain run compile
```

### Deploy contracts to Sepolia
```bash
cd blockchain
SEPOLIA_RPC_URL=<rpc> PRIVATE_KEY=<key> npm run deploy:sepolia
```

## 6) Security model

- Wallet-authenticated UI via MetaMask.
- API-level role headers (`x-role`) with middleware authorization.
- Smart contract-level role checks before writing records/hashes.
- Tamper-proof record anchoring with blockchain hashes.

## 7) AI Feature Details

1. **Bed Occupancy Prediction**
   - Lightweight average + uplift model to forecast near-term occupancy.

2. **Abnormal Lab Detection**
   - Rule-based threshold checks for common values (glucose, hemoglobin).

3. **Smart Triage Recommendation**
   - Severity recommendation based on oxygen, blood pressure, and heart rate.

## 8) Notes

- IPFS upload currently uses a mock hash strategy for local development (`uploadToIpfsMock`).
- Notification logic is mocked (`sendNotification`) for email/SMS integration points.
- Extend each module route with domain entities as needed for production scale.
