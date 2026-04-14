export type PasswordStrength = {
  strength: number;
  label: string;
  color: string;
};

export function checkRequirement(password: string, requirement: string) {
  switch (requirement) {
    case "length":
      return password.length >= 8;
    case "number":
      return /[0-9]/.test(password);
    case "special":
      return /[^A-Za-z0-9]/.test(password);
    case "noSpaces":
      return !/\s/.test(password);
    default:
      return false;
  }
}

export function getPasswordStrength(password: string): PasswordStrength {
  if (!password) return { strength: 0, label: "", color: "" };

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  if (!/\s/.test(password)) strength++;

  if (strength <= 1) {
    return { strength: 1, label: "Weak", color: "bg-red-500" };
  }

  if (strength === 2) {
    return { strength: 2, label: "Medium", color: "bg-orange-500" };
  }

  return { strength: 3, label: "Strong", color: "bg-green-500" };
}
