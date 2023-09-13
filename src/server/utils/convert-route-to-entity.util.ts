const mapping: Record<string, string> = {
  companies: 'company',
  'employee-data': 'employee_data',
  guests: 'guest',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
