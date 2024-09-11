export type registrySchema = {
  [key: string]: {
    component: React.FC<any>;
    code: string;
  };
};
