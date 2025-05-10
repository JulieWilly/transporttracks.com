export interface ConsignmentRecord {
  id: number;
  cnNo: string;
  consignor: string;
  consignee: string;
  fromViaTo: string;
  pay: string;
  amount: number;
  rec: number;
  dis: number;
  due: number;
  location: string;
  invNoDt: string;
  status: string;
  print: boolean;
  collect: boolean;
}
