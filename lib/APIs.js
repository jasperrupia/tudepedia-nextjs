
export const sendContactForm = async (data) => fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }
)


export async function onAddNewsletter(enteredNewsletterData) {
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(enteredNewsletterData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }