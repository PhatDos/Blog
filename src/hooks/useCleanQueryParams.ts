import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

type ParamRules = {
  [key: string]: {
    defaultValue: string;
    validate?: (value: string) => boolean;
  };
};

export function useCleanQueryParams(paramRules: ParamRules) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newParams = new URLSearchParams();

    Object.entries(paramRules).forEach(([key, rule]) => {
      const value = searchParams.get(key);

      if (value === null || (rule.validate && !rule.validate(value))) {
        newParams.set(key, rule.defaultValue);
      } else {
        newParams.set(key, value);
      }
    });

    // Nếu URL hiện tại khác với newParams → replace URL
    if (searchParams.toString() !== newParams.toString()) {
      navigate(
        { pathname: window.location.pathname, search: newParams.toString() },
        { replace: true }
      );
    }
  }, [searchParams, navigate, paramRules]);
}
