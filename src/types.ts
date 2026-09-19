export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl: string;
  category: string;
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}
