export const formSchema = {
  title: "User Form",
  fields: [
    { type: "text", label: "Name", name: "name", placeholder: "Enter your name", validation: { required: true } },
    { type: "number", label: "Age", name: "age", placeholder: "Enter your age", validation: { required: true, min: 1 } },
    { type: "email", label: "Email", name: "email", placeholder: "Enter your email", validation: { required: true } },
    { type: "select", label: "Gender", name: "gender", options: ["Male", "Female", "Other"], validation: { required: true } }
  ]
};