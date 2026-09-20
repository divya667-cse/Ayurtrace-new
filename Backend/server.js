require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Web3 = require("web3");

const app = express();
app.use(cors());
app.use(express.json());

const web3 = new Web3(process.env.RPC_URL);

const abi = require("./abi.json");

const account = web3.eth.accounts.privateKeyToAccount(
  process.env.PRIVATE_KEY
);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

const contract = new web3.eth.Contract(
  abi,
  process.env.CONTRACT_ADDRESS
);

// Add Herb
app.post("/addHerb", async (req, res) => {
  const { name, location, quantity } = req.body;

  try {
    await contract.methods
      .addHerb(name, location, quantity)
      .send({ from: account.address });

    res.json({ success: true, message: "Herb Added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Herb
app.get("/getHerb/:id", async (req, res) => {
  try {
    const herb = await contract.methods
      .getHerb(req.params.id)
      .call();

    res.json(herb);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
