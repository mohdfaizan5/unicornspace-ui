import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormRegisterReturn } from "react-hook-form"; // Import this

type FormFieldProps = {
  label: string;
  registerProps: UseFormRegisterReturn; // Use the specific type
  type?: string; // Default type is "input"
  placeholder: string;
  optional?: boolean;
};

export const FormField = ({
  label,
  registerProps,
  type = "input", // Default to "input"
  placeholder,
  optional = false,
}: FormFieldProps) => (
  <div className="space-y-1">
    <Label>
      {label} {optional && <span className="text-gray-500">(Optional)</span>}
    </Label>
    {type === "textarea" ? (
      <Textarea {...registerProps} placeholder={placeholder} />
    ) : (
      <Input {...registerProps} type={type} placeholder={placeholder} />
    )}
  </div>
);
