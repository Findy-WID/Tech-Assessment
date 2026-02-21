// src/projects/identityBlitz/BlitzContacts.tsx
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import BlitzNav from '../../components/BlitzNav';     // adjust path
import BlitzFooter from '../../components/BlitzFooter'; // adjust path

export default function BlitzContacts() {
  const mapDefaultState = {
    center: [55.7305, 37.6200], // Approx Pyatnitskaya st., 73, Moscow
    zoom: 15,
    controls: ['zoomControl', 'fullscreenControl'], // minimal controls
  };

  return (
    <>
      <BlitzNav />

      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-300 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Address and Contacts
            </h1>
          </div>
        </section>

        {/* Main Content: Map + Info */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Map */}
            <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-xl">
              <YMaps
                query={{
                  apikey: 'YOUR_YANDEX_MAPS_API_KEY', // ← Get free key below!
                  lang: 'en_US', // or 'ru_RU' for Russian
                }}
              >
                <Map defaultState={mapDefaultState} className="w-full h-full">
                  <Placemark
                    geometry={[55.7305, 37.6200]} // Exact coords for Pyatnitskaya 73
                    options={{
                      preset: 'islands#blueDotIconWithCaption',
                    }}
                    properties={{
                      iconCaption: 'Identity Blitz',
                      hintContent: 'Pyatnitskaya st., 73, Moscow',
                    }}
                  />
                </Map>
              </YMaps>
            </div>

            {/* Right: Contact Info + Feedback */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Contacts
                </h2>
                <address className="not-italic text-lg text-gray-700 space-y-3">
                  <p className="font-medium">Pyatnitskaya st., 73</p>
                  <p>Moscow, 115054</p>
                  <p>Russian Federation</p>
                  <p className="mt-4">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+74993221404" className="text-blue-600 hover:underline">
                      +7 (499) 322-14-04
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@idblitz.com" className="text-blue-600 hover:underline">
                      info@idblitz.com
                    </a>
                  </p>
                </address>
              </div>

              {/* Feedback / Contact Form Placeholder */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Feedback</h3>
                <p className="text-gray-600 mb-4">
                  Send us your questions or suggestions — we'll get back to you shortly.
                </p>
                {/* Insert your contact form here later (e.g. Formik, React Hook Form, or simple HTML form) */}
                <div className="text-sm text-gray-500 italic">
                  [Contact form placeholder — id="contact-form-1"]
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BlitzFooter />
    </>
  );
}