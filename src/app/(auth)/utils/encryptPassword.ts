import bcrypt from "bcryptjs";

/**
 * Hashes a password using bcrypt.
 * @param password - The plain text password to hash.
 * @returns The hashed password as a Promise<string>.
 */

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  console.log('salt is222:', salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log('encrypted22:', hashedPassword);
  console.log('pwd222:', password);
  
  return hashedPassword;
}
