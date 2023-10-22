import * as api from "@/libs/api";
import { useState, useTransition } from "react";

type CreateGroupState =
  | {
      status: "initial";
      error: undefined;
    }
  | {
      status: "loading";
      error?: any;
    }
  | {
      status: "success";
      error: undefined;
    }
  | {
      status: "failed";
      error: any;
    };

const initialState: CreateGroupState = {
  status: "initial",
  error: undefined,
};

const useCreateGroup = () => {
  const [state, setState] = useState<CreateGroupState>(initialState);
  const [isPending, startTransition] = useTransition();

  const createGroup = async (name: string) => {
    startTransition(() => {
      setState((prev) => ({ ...prev, status: "loading" }));
    });

    try {
      const response = await api.post("/group", { name });
      startTransition(() => {
        setState({ status: "success", error: undefined });
      });
      return response;
    } catch (error) {
      startTransition(() => {
        setState({ status: "failed", error });
      });
    }
  };

  return { state, createGroup, isPending };
};

export default useCreateGroup;
