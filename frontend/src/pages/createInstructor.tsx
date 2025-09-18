import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const API_BASE="http://127.0.0.1:8000/api";
const navigate = useNavigate();

const CreateInstructor= () => {

    const [formData, setFormData] = useState({
        title:"",
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        address:"",
        department:"",
        experience:"",

    })
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:[e.target.value]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
 
    }

    return(
          <>
          <Navbar />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required />
                    </div>
                    <div>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required />
                    </div>
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>

                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required />
                </div>

                <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required />
                    </div>

                </div>


                <div>
                    <Label htmlFor="experience">Experience </Label>
                    <Input
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Years of field experience" />
                </div>


                <Button type="submit" className="w-full">
                    Add
                </Button>
            </form>
        </CardContent>
        <Footer />
        </>
    )
} 
export default CreateInstructor;