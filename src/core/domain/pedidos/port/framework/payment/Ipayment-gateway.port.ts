export interface IPaymentGatewayPort {
  userID: string;
  externalPosId: string;
  cashOutAmount: number;
  description: string;
  items: [
    {
      skuNumber: string;
      category: string;
      title: string;
      description: string;
      unitPrice: number;
      quantity: number;
      unitMeasure: 'Unit' | 'Pack';
      totalAmount: string;
    },
  ];
  notificationURL: string;
  title: string;
  totalAmount: number;
}
