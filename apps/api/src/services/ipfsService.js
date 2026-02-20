export async function uploadToIpfsMock(fileBuffer) {
  const pseudoHash = `Qm${Buffer.from(fileBuffer).toString('hex').slice(0, 30)}`;
  return pseudoHash;
}
