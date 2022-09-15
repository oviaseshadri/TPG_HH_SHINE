console.clear();
require("dotenv").config();
const {
	AccountId,
	PrivateKey,
	Client,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
	ContractCallQuery,
  ContractCreateFlow,
	Hbar,
} = require("@hashgraph/sdk");
const fs = require("fs");

// Configure accounts and client
const operatorId = AccountId.fromString("0.0.48153399");
const operatorKey = PrivateKey.fromString("302e020100300506032b6570042204204172285433710313188795e34a7699d4cb444fcfdbe9fbb3ddcf7442db7a2ab7");

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function main() {
	// Import the compiled contract bytecode
	const contractBytecode = fs.readFileSync("Shine_sol_Shine.bin");

  //Create the transaction
const contractCreate = new ContractCreateFlow()
.setGas(100000)
.setBytecode(contractBytecode);

//Sign the transaction with the client operator key and submit to a Hedera network
const txResponse = contractCreate.execute(client);

//Get the receipt of the transaction
const receipt = (await txResponse).getReceipt(client);

//Get the new contract ID
const newContractId = (await receipt).contractId;
    
console.log("The new contract ID is " +newContractId);
//SDK Version: v2.11.0-beta.1

	
	// Query the contract to check changes in state variable
	const contractQueryTx = new ContractExecuteTransaction()
		.setContractId(newContractId)
		.setGas(300000)
		.setFunction("setnftcontractaddress", new ContractFunctionParameters().addAddress("0xa07edbCf7DD7706A201b3566E5919317D3d01475"));
	const contractQuerySubmit = await contractQueryTx.execute(client);
	const contractQueryResult = contractQuerySubmit.getUint256(0);
	console.log(`- Here's the phone number that you asked for: ${contractQueryResult} \n`);

	// Call contract function to update the state variable
	const contractExecuteTx = new ContractExecuteTransaction()
		.setContractId(contractId)
		.setGas(100000)
		.setFunction(
			"setMobileNumber",
			new ContractFunctionParameters().addString("Bob").addUint256(222222)
		);
	const contractExecuteSubmit = await contractExecuteTx.execute(client);
	const contractExecuteRx = await contractExecuteSubmit.getReceipt(client);
	console.log(`- Contract function call status: ${contractExecuteRx.status} \n`);

	// Query the contract to check changes in state variable
	const contractQueryTx1 = new ContractCallQuery()
		.setContractId(contractId)
		.setGas(100000)
		.setFunction("getMobileNumber", new ContractFunctionParameters().addString("Bob"));
	const contractQuerySubmit1 = await contractQueryTx1.execute(client);
	const contractQueryResult1 = contractQuerySubmit1.getUint256(0);
	console.log(`- Here's the phone number that you asked for: ${contractQueryResult1} \n`);
}
main();