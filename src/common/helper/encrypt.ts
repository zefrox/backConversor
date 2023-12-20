import bcrypt from 'bcrypt';
import { environments } from '../environment';

const salt = environments.jwt.salt;

export const parseStringToHash = async (text: string): Promise<string> => {
    return await bcrypt.hash(text, salt);
};

export const validateHash = async (rawText: string, encryptedText: string): Promise<boolean> => {
    return await bcrypt.compare(rawText, encryptedText);
};