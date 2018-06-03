import { PartPrefix } from './part-prefix';
import { OrderType } from "./order-type";

export interface PartsInfoFormValues{
    partPrefix: PartPrefix;
    partNumber: number;
    quantity: number;
    orderType: OrderType;
}