import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend('re_123456789'); // Replace with your actual Resend API key

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Format the form data into a readable email
    const emailContent = `
Nowe zgłoszenie zakupu nieruchomości od ${formData.imieNazwisko}

DANE KONTAKTOWE:
- Imię i nazwisko: ${formData.imieNazwisko}
- Telefon: ${formData.telefon}
- Email: ${formData.email}

POSZUKIWANA NIERUCHOMOŚĆ:
- Typ: ${formData.typNieruchomosci}
- Lokalizacja: ${formData.lokalizacja || 'Nie podano'}
- Powierzchnia: ${formData.powierzchniaOd ? `${formData.powierzchniaOd} - ${formData.powierzchniaDo} m²` : 'Nie podano'}
- Liczba pokoi: ${formData.liczbaPokoi || 'Nie podano'}
- Stan wykończenia: ${formData.stanWykonczenia || 'Nie podano'}
- Budżet: ${formData.budzet || 'Nie podano'}

DODATKOWE UWAGI:
${formData.dodatkoweUwagi || 'Brak dodatkowych uwag'}

ZGODY:
- Przetwarzanie danych: ${formData.zgodaPrzetwarzanie ? 'TAK' : 'NIE'}
- Marketing i oferty: ${formData.zgodaMarketing ? 'TAK' : 'NIE'}

---
Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'Formularz Paket <noreply@yourdomain.com>', // Replace with your verified domain
      to: ['your-email@example.com'], // Replace with your email address
      subject: `Nowe zgłoszenie zakupu od ${formData.imieNazwisko}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7f1d1d; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            Nowe zgłoszenie zakupu nieruchomości
          </h2>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dane kontaktowe</h3>
            <p><strong>Imię i nazwisko:</strong> ${formData.imieNazwisko}</p>
            <p><strong>Telefon:</strong> <a href="tel:${formData.telefon}">${formData.telefon}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Poszukiwana nieruchomość</h3>
            <p><strong>Typ:</strong> ${formData.typNieruchomosci}</p>
            <p><strong>Lokalizacja:</strong> ${formData.lokalizacja || 'Nie podano'}</p>
            <p><strong>Powierzchnia:</strong> ${formData.powierzchniaOd ? `${formData.powierzchniaOd} - ${formData.powierzchniaDo} m²` : 'Nie podano'}</p>
            <p><strong>Liczba pokoi:</strong> ${formData.liczbaPokoi || 'Nie podano'}</p>
            <p><strong>Stan wykończenia:</strong> ${formData.stanWykonczenia || 'Nie podano'}</p>
            <p><strong>Budżet:</strong> ${formData.budzet || 'Nie podano'}</p>
          </div>
          
          ${formData.dodatkoweUwagi ? `
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dodatkowe uwagi</h3>
            <p style="white-space: pre-wrap;">${formData.dodatkoweUwagi}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Zgody</h3>
            <p><strong>Przetwarzanie danych:</strong> ${formData.zgodaPrzetwarzanie ? '✅ TAK' : '❌ NIE'}</p>
            <p><strong>Marketing i oferty:</strong> ${formData.zgodaMarketing ? '✅ TAK' : '❌ NIE'}</p>
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