const hre = require('hardhat');

async function main() {
  const Access = await hre.ethers.getContractFactory('AccessManager');
  const access = await Access.deploy();
  await access.waitForDeployment();

  const Medical = await hre.ethers.getContractFactory('MedicalRecordRegistry');
  const medical = await Medical.deploy(await access.getAddress());
  await medical.waitForDeployment();

  const Invoice = await hre.ethers.getContractFactory('InvoiceRegistry');
  const invoice = await Invoice.deploy(await access.getAddress());
  await invoice.waitForDeployment();

  const Prescription = await hre.ethers.getContractFactory('PrescriptionValidator');
  const prescription = await Prescription.deploy(await access.getAddress());
  await prescription.waitForDeployment();

  console.log({
    access: await access.getAddress(),
    medical: await medical.getAddress(),
    invoice: await invoice.getAddress(),
    prescription: await prescription.getAddress()
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
