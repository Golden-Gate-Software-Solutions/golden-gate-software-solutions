'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useRef, useEffect } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrbqkpkw");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none px-0 py-2 bg-transparent"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none px-0 py-2 bg-transparent"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span><small>(optional)</small></span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Let's build a website!"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {state.succeeded && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
    </form>
  );
}