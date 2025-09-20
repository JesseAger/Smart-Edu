import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

const API_BASE = "http://127.0.0.1:8000/api";

interface InstructorFormProps {
  onSubmitSuccess?: () => void;
}

interface Program{
  id:number;
  title:string;
}


const CreateInstructorForm = ({ onSubmitSuccess }: InstructorFormProps) => {
  const [programs, setPrograms] =useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    department: "",
    experience: "",
  });

    useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`${API_BASE}/courses/`);
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
    if (loading) {
      setLoading(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await fetch(`${API_BASE}/instructors/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        console.error("Failed to add instructor");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="department">Department</Label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2"
            >
              <option value="">-- Select Department --</option>
              {programs.map((program: any) => (
                <option key={program.id} value={program.id}>
                  {program.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="experience">Experience</Label>
          <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="Years of field experience" />
        </div>

        <Button type="submit" className="w-full">
          Add
        </Button>
      </form>
    </CardContent>
  );
};

export default CreateInstructorForm;
