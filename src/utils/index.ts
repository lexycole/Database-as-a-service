import { v4 as uuidv4 } from 'uuid';

export const truncateText = (text: string, maxLength: number) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

export const getKeyId = () => uuidv4();
