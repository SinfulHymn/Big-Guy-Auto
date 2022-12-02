import { useState } from "react"
export default function EmailComponent(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    })
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    
    return(
        <form action="">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                      placeholder="Name"
                        value={form.name}
                        onChange={handleForm}
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-md h-8"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-md h-8"
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea

                        id="message"
                        name="message"
                        rows={4}
                        className="shadow-sm focus:ring-main-red focus:border-main-red block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue={''}

                      />
                    </div>
                  </div>
                  </div>
              </form>
    )
}