import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend('re_123456789'); // Replace with your actual Resend API key

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Format the form data into a readable email
    const emailContent = `
Nowe zgłoszenie sprzedaży nieruchomości od ${formData.imie} ${formData.nazwisko}

DANE KONTAKTOWE:
- Imię: ${formData.imie}
- Nazwisko: ${formData.nazwisko}
- Email: ${formData.email}
- Telefon: ${formData.telefon}

DANE NIERUCHOMOŚCI:
- Rodzaj: ${formData.rodzajNieruchomosci}
- Lokalizacja: ${formData.lokalizacja}
- Powierzchnia: ${formData.powierzchnia} m²
- Liczba pokoi: ${formData.liczbaPokoi}
- Proponowana cena: ${formData.proponowanaCena || 'Nie podano'}

DODATKOWE INFORMACJE:
${formData.dodatkoweInformacje || 'Brak dodatkowych informacji'}

ZGODY:
- Przetwarzanie danych: ${formData.zgodaPrzetwarzanie ? 'TAK' : 'NIE'}
- Marketing: ${formData.zgodaMarketing ? 'TAK' : 'NIE'}

---
Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'Formularz Paket <noreply@yourdomain.com>', // Replace with your verified domain
      to: ['your-email@example.com'], // Replace with your email address
      subject: `Nowe zgłoszenie sprzedaży od ${formData.imie} ${formData.nazwisko}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7f1d1d; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            Nowe zgłoszenie sprzedaży nieruchomości
          </h2>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dane kontaktowe</h3>
            <p><strong>Imię:</strong> ${formData.imie}</p>
            <p><strong>Nazwisko:</strong> ${formData.nazwisko}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Telefon:</strong> <a href="tel:${formData.telefon}">${formData.telefon}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dane nieruchomości</h3>
            <p><strong>Rodzaj:</strong> ${formData.rodzajNieruchomosci}</p>
            <p><strong>Lokalizacja:</strong> ${formData.lokalizacja}</p>
            <p><strong>Powierzchnia:</strong> ${formData.powierzchnia} m²</p>
            <p><strong>Liczba pokoi:</strong> ${formData.liczbaPokoi}</p>
            <p><strong>Proponowana cena:</strong> ${formData.proponowanaCena || 'Nie podano'}</p>
          </div>
          
          ${formData.dodatkoweInformacje ? `
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dodatkowe informacje</h3>
            <p style="white-space: pre-wrap;">${formData.dodatkoweInformacje}</p>
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