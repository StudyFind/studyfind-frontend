import { useState } from "react";
import { useToast } from "@chakra-ui/react";

import { validate, object } from "@studyfind/utils";

import { Toast } from "types/global";

interface Toasts {
  success: Toast;
  failure: Toast;
}

interface Params<V, E> {
  initialValues: V;
  initialErrors: E;
  toasts?: Toasts;
  onSubmit: (values: V) => Promise<void>;
}

interface Object {
  name?: string;
  email?: string;
  password?: string;
  newPassword?: string;
}

const authErrors: { [key: string]: { [key: string]: any } } = {
  // COMMON
  "auth/invalid-email": { email: "Email is invalid" },

  // SIGNUP
  "auth/email-already-in-use": { email: "Email already exists" },
  "auth/operation-not-allowed": { email: "This operation is not allowed" },
  "auth/weak-password": { password: "Password is too weak" },

  // SIGNIN
  "auth/user-disabled": { email: "Your account has been disabled" },
  "auth/user-not-found": { email: "Email does not exist" },
  "auth/user-not-verified": { email: "Email is not verified" },
  "auth/too-many-requests": { password: "Too many unsuccessful attempts" },
  "auth/wrong-password": { password: "Password is incorrect" },
  "auth/argument-error": { password: "Incorrect function arguments" },
};

function useAuthForm<V extends Object, E extends Object>({
  initialValues,
  initialErrors,
  toasts,
  onSubmit,
}: Params<V, E>) {
  const [values, setValues] = useState<V>(initialValues);
  const [errors, setErrors] = useState<E>(initialErrors);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toast = useToast();

  const check = (name: keyof V, value: string) => {
    if (name === "name") return value ? "" : " ";
    if (name === "email") return validate.email(value);
    if (name === "password") return validate.password(value);
    if (name === "newPassword") return validate.password(value);
  };

  const update = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name as keyof V, value) }));
  };

  const submit = () => {
    const errorMessages = object.map(values, check as (key: string, value: string) => string);
    const errorExists = object.some(errorMessages);

    if (errorExists) {
      setErrors(errorMessages as E);
      return Promise.reject();
    }

    setLoading(true);

    return onSubmit(values)
      .then(() => {
        setSuccess(true);
        setValues(initialValues);

        if (toasts) {
          toast(toasts.success);
        }
      })
      .catch((err: { code: string }) => {
        setSuccess(false);
        if (authErrors[err.code]) {
          setErrors(authErrors[err.code] as E);
        }

        if (toasts) {
          toast(toasts.failure);
        }
      })
      .finally(() => setLoading(false));
  };

  return { values, errors, loading, success, update, submit };
}

export default useAuthForm;
