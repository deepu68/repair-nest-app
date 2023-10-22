import * as requestIp from 'request-ip';
import { Request, Response } from 'express';
export async function GetCustomerIpMiddleWare(
  request: Request,
  response: Response,
  next?: (err?: any) => any,
) {
  const ip = requestIp.getClientIp(request);
  request.body.ipAddress = ip;
  next();
}
