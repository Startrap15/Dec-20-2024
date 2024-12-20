import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isWeekend, addMonths, subMonths } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Send, CheckCircle } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';

export default function ConsultationForm() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    message: ''
  });

  const industries = [
    'Technology',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Nonprofit',
    'Government',
    'Other'
  ];

  const timeSlots = [
    ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
    ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && formData.name && formData.email && formData.phone && formData.industry) {
      setShowConfirmation(true);
    }
  };

  return (
    <>
      <section id="consultation" className="py-12 bg-[#4169E1]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold">Schedule Your Free Consultation</h2>
            <p className="mt-2">Let's discuss how we can help you achieve your funding goals</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={previousMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <h3 className="font-medium text-lg">
                    {format(currentDate, 'MMMM yyyy')}
                  </h3>
                  <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                    <div key={`empty-${i}`} className="p-2" />
                  ))}
                  {monthDays.map(day => {
                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const isDisabled = isWeekend(day) || day < new Date();
                    return (
                      <button
                        key={day.toISOString()}
                        onClick={() => !isDisabled && setSelectedDate(day)}
                        disabled={isDisabled}
                        className={`
                          p-2 text-sm rounded-lg transition-colors
                          ${isSelected ? 'bg-[#4169E1] text-white' : 'hover:bg-[#4169E1]/10'}
                          ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700'}
                        `}
                      >
                        {format(day, 'd')}
                      </button>
                    );
                  })}
                </div>

                {/* Time Slots */}
                <div className="mt-6">
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#4169E1]" />
                    Available Times {selectedDate && `for ${format(selectedDate, 'MMM d, yyyy')}`}
                  </h4>
                  <div className="space-y-2">
                    {timeSlots.map((row, rowIndex) => (
                      <div key={rowIndex} className="grid grid-cols-4 gap-2">
                        {row.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            disabled={!selectedDate}
                            className={`
                              py-3 px-2 text-sm rounded-lg transition-all duration-200
                              ${selectedTime === time ? 'bg-[#4169E1] text-white shadow-lg scale-105' : 'bg-gray-100 hover:bg-[#4169E1]/10'}
                              ${!selectedDate && 'opacity-50 cursor-not-allowed'}
                              hover:scale-105
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <select
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                >
                  <option value="">Select Industry *</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Tell us about your funding needs..."
                  rows={4}
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-[#2850c8] transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Secure Your Funding Future
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Transition show={showConfirmation} as={React.Fragment}>
        <Dialog onClose={() => setShowConfirmation(false)} className="relative z-50">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="text-center">
                    <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                      Thank you for scheduling your free consultation!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-4">
                        Your appointment is confirmed for {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}.
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        We'll send a calendar invite and confirmation email shortly with meeting details and preparation tips.
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        We look forward to discussing your funding goals and helping secure your financial future.
                      </p>
                      <p className="text-sm text-gray-500">
                        If you need to reschedule or have any questions before our meeting, please don't hesitate to contact us at{' '}
                        <a href="mailto:support@grantcraftpro.com" className="text-[#4169E1] hover:text-[#2850c8]">
                          support@grantcraftpro.com
                        </a>
                        {' '}or call{' '}
                        <a href="tel:+15551234567" className="text-[#4169E1] hover:text-[#2850c8]">
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="btn btn-primary w-full"
                        onClick={() => setShowConfirmation(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}