import { Request, RequestHandler, Response } from "express";
import { Customer } from "../models/Customer";

export default class CustomerController {
  saveCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let customer = new Customer(req.body);
      let savedCustomer = await customer.save();

      return res
        .status(200)
        .json({ message: "Successfully Saved..!", resposeData: savedCustomer });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error });
      } else {
        return res.status(500).json({ message: "Unknown Error!" });
      }
    }
  };

  getAllCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let customers = await Customer.find();
      return res
        .status(200)
        .json({ message: "Successfully Loaded..!", responseData: customers });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error });
      } else {
        return res.status(500).json({ message: "Unknown Error!" });
      }
    }
  };

  updateCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let { id } = req.params;
      let updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json({
        message: "Successfully Updated..!",
        responseData: updatedCustomer,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error });
      } else {
        return res.status(500).json({ message: "Unknown Error!" });
      }
    }
  };

  deleteCustomer: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      let { id } = req.params;
      let deleteCustomer = await Customer.findByIdAndDelete(id);

      if (!deleteCustomer) {
        throw new Error("Failed to Delete Customer..!");
      }
      return res.status(200).json({
        message: "Successfully Deleted..!",
        responseData: deleteCustomer,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown Error!" });
      }
    }
  };
}
