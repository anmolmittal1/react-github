import { NavigateOptions, useNavigate } from "react-router";

export const useParamNavigate = () => {
  const navigate = useNavigate();
  return (
    path: string,
    params: Record<string, string | number>,
    options?: NavigateOptions
  ) => {
    Object.entries(params).forEach(([param, value]) => {
      path = path.replace(`:${param}`, `${value}`);
    });
    return navigate(path, options);
  };
};
