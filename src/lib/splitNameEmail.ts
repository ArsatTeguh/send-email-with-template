export function splitNameEmail(email: string) {
  if (email.includes('@')) {
    const result = email.split('@')[0];
    if (result.includes('.')) {
      return result.split('.')[0];
    }
    return result;
  }
  if (email.includes('.')) {
    return email.split('.')[0];
  }

  return email;
}
