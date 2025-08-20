import * as bcrypt from 'bcrypt';

export async function hashString(content: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(content, salt);
}

export async function compareHash(plainText: string, hash: string) {
  return await bcrypt.compare(plainText, hash);
}
