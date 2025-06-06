import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend('re_SvjKPMpv_DLRmpq7x5uXsgaCmvxfs1g5e'); // Replace with your actual Resend API key

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Format the form data into a readable email
    const emailContent = `
Nowe zgłoszenie główne od ${formData.name}

DANE KONTAKTOWE:
- Imię i nazwisko: ${formData.name}
- Email: ${formData.email}
- Telefon: ${formData.phoneNumber}

SZCZEGÓŁY ZAPYTANIA:
- Cel: ${formData.purpose}
- Wiadomość: ${formData.message || 'Brak dodatkowej wiadomości'}

ZGODY:
- Przetwarzanie danych: ${formData.zgodaPrzetwarzanie ? 'TAK' : 'NIE'}
- Marketing: ${formData.zgodaMarketing ? 'TAK' : 'NIE'}

---
Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    const purposeLabels = {
      'kupic': 'Kupić nieruchomość',
      'sprzedac': 'Sprzedać nieruchomość', 
      'wyremontowac': 'Wyremontować nieruchomość'
    };

    const { data, error } = await resend.emails.send({
      from: 'Formularz Paket <noreply@updates.paketnieruchomosci.pl>', // Replace with your verified domain
      to: ['biuro@paketnieruchomosci.pl'], // Replace with your email address
      subject: `Nowe zgłoszenie główne od ${formData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7f1d1d; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            Nowe zgłoszenie główne
          </h2>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dane kontaktowe</h3>
            <p><strong>Imię i nazwisko:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Telefon:</strong> <a href="tel:${formData.phoneNumber}">${formData.phoneNumber}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Szczegóły zapytania</h3>
            <p><strong>Cel:</strong> ${purposeLabels[formData.purpose] || formData.purpose}</p>
          </div>
          
          ${formData.message ? `
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Wiadomość</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Zgody</h3>
            <p><strong>Przetwarzanie danych:</strong> ${formData.zgodaPrzetwarzanie ? '✅ TAK' : '❌ NIE'}</p>
            <p><strong>Marketing:</strong> ${formData.zgodaMarketing ? '✅ TAK' : '❌ NIE'}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ success: false, error: 'Błąd podczas wysyłania emaila' }, { status: 500 });
    }

    return json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return json({ success: false, error: 'Błąd serwera' }, { status: 500 });
  }
} 