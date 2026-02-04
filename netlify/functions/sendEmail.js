export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // Send request to EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_jtdcbef',      // <-- Your EmailJS Service ID
        template_id: 'template_pzwqsx9',    // <-- Your EmailJS Template ID
        user_id: 'fFEjcHdxdndYaVwBf',       // <-- Your EmailJS Public Key
        template_params: data
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('EmailJS Error:', text);
      throw new Error('Failed to send email');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'success' })
    };
  } catch (err) {
    console.error('Function Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: err.message })
    };
  }
}
