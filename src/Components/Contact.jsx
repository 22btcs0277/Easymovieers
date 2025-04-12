import React, { useState } from 'react'
import Header from './Header'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shiftingFrom: '',
    shiftingTo: '',
    service: '',
    email: '',
    preferredTime: '',
    termsAccepted: false,
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number'
    if (!formData.shiftingFrom.trim()) newErrors.shiftingFrom = 'Enter shifting from location'
    if (!formData.shiftingTo.trim()) newErrors.shiftingTo = 'Enter shifting to location'
    if (!formData.service.trim()) newErrors.service = 'Please select a service'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Enter preferred time to call'
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept terms & privacy'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData)
      alert('Registration successful!')
      // Reset form or send data to server
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <>
     <Header></Header>
    <div className="max-w-4xl bg-gray-300 mx-auto mt-10 p-8  rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact With Us</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Shifting From */}
        <div>
          <label className="block font-medium">Shifting From</label>
          <input
            type="text"
            name="shiftingFrom"
            value={formData.shiftingFrom}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.shiftingFrom && <p className="text-red-500 text-sm">{errors.shiftingFrom}</p>}
        </div>

        {/* Shifting To */}
        <div>
          <label className="block font-medium">Shifting To</label>
          <input
            type="text"
            name="shiftingTo"
            value={formData.shiftingTo}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.shiftingTo && <p className="text-red-500 text-sm">{errors.shiftingTo}</p>}
        </div>

        {/* Service */}
        <div>
          <label className="block font-medium">Select Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Select --</option>
            <option value="Home Shifting">Home Shifting</option>
            <option value="Office Shifting">Office Shifting</option>
            <option value="Vehicle Transport">Vehicle Transport</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Preferred Time */}
        <div className="md:col-span-2">
          <label className="block font-medium">Preferred Time to Call</label>
          <input
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g., 10 AM - 12 PM"
          />
          {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime}</p>}
        </div>

        {/* Terms & Conditions */}
        <div className="md:col-span-2 flex items-start gap-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label className="text-sm">
            I accept the{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 underline">
              Terms
            </a>
          </label>
        </div>
        {errors.termsAccepted && (
          <p className="md:col-span-2 text-red-500 text-sm">{errors.termsAccepted}</p>
        )}

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Contact;
