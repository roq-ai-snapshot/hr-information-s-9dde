import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  gross_salary: yup.number().integer().required(),
  net_salary: yup.number().integer().required(),
  tax: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  payment_date: yup.date().required(),
  employee_id: yup.string().nullable().required(),
});
