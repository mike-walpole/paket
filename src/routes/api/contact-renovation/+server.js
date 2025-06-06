import { Resend } from 'resend';
import { json } from '@sveltejs/kit';

const resend = new Resend('rre_SvjKPMpv_DLRmpq7x5uXsgaCmvxfs1g5e'); // Replace with your actual Resend API key

export async function POST({ request }) {
  try {
    const formData = await request.json();
    
    // Format selected services
    const selectedServices = [];
    if (formData.wykonczeniedeweloperski) selectedServices.push('Wykończenie lokalu w stanie deweloperskim');
    if (formData.remontwtorny) selectedServices.push('Remont lokalu z rynku wtórnego');
    if (formData.zabudowameblowa) selectedServices.push('Zabudowa meblowa (kuchnia, szafy itd.)');
    if (formData.projektlokalu) selectedServices.push('Projekt lokalu (wizualizacje, aranżacja)');
    if (formData.zakupzwykończeniem) selectedServices.push('Zakup nieruchomości z wykończeniem pod klucz');
    if (formData.inne && formData.inneopis) selectedServices.push(`Inne: ${formData.inneopis}`);
    
    const servicesText = selectedServices.length > 0 ? selectedServices.join('\n- ') : 'Nie wybrano żadnej usługi';
    
    // Format the form data into a readable email
    const emailContent = `
Nowe zgłoszenie remontu/wykończenia od ${formData.imie} ${formData.nazwisko}

DANE KONTAKTOWE:
- Imię: ${formData.imie}
- Nazwisko: ${formData.nazwisko}
- Telefon: ${formData.telefon}
- Email: ${formData.email}

LOKALIZACJA NIERUCHOMOŚCI:
${formData.lokalizacja}

INTERESUJĄCE USŁUGI:
- ${servicesText}

DODATKOWE INFORMACJE:
${formData.dodatkoweInformacje || 'Brak dodatkowych informacji'}

ZGODY:
- Przetwarzanie danych: ${formData.zgodaPrzetwarzanie ? 'TAK' : 'NIE'}
- Marketing: ${formData.zgodaMarketing ? 'TAK' : 'NIE'}

---
Data zgłoszenia: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'Formularz Paket <noreply@updates.paketnieruchomosci.pl>', // Replace with your verified domain
      to: ['biuro@paketnieruchomosci.pl'], // Replace with your email address
      subject: `Nowe zgłoszenie remontu od ${formData.imie} ${formData.nazwisko}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7f1d1d; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            Nowe zgłoszenie remontu/wykończenia
          </h2>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dane kontaktowe</h3>
            <p><strong>Imię:</strong> ${formData.imie}</p>
            <p><strong>Nazwisko:</strong> ${formData.nazwisko}</p>
            <p><strong>Telefon:</strong> <a href="tel:${formData.telefon}">${formData.telefon}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Lokalizacja nieruchomości</h3>
            <p>${formData.lokalizacja}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Interesujące usługi</h3>
            ${selectedServices.length > 0 ? 
              '<ul style="margin: 0; padding-left: 20px;">' + 
              selectedServices.map(service => `<li>${service}</li>`).join('') + 
              '</ul>' : 
              '<p>Nie wybrano żadnej usługi</p>'
            }
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