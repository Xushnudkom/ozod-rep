// pages/index.js
import Head from "next/head";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function Home() {
  return (
    <div
      className="bg-gradient-to-b from-blue-300 to-yellow-100 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/FreeSample-Vectorizer-io-air1.svg')` }}
    >
      <Head>
        <title>Uzbekistan Airways</title>
      </Head>

      <header className="bg-blue-800 text-white py-4 mb-[250px] shadow-2xl">
        <div className="container px-10 mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">UZBEKISTAN AIRWAYS</h1>
        </div>
      </header>

      <main className="container mx-auto px-10 py-8">
<div className="flex gap-8">
<div className="bg-white w-[700px] p-6 rounded-lg shadow-md bg-opacity-55">
          <div className="">
            <div className="flex items-center mb-6 space-x-4">
              <select
                id="from"
                className="w-full max-w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Qayerdan</option>
                <option>Andijon</option>
                <option>Farg&#39;ona</option>
                <option>Namangan</option>
                <option>Toshkent</option>
                <option>Jizzah</option>
                <option>Sirdaryo</option>
                <option>Samarqand</option>
                <option>Buxoro</option>
                <option>Qashqadaryo</option>
                <option>Surxondaryo</option>
                <option>Xorazm</option>
                <option>Qoraqalpog&#39;iston Respublikasi</option>
              </select>

              <SyncAltIcon />

              <select
                id="to"
                className="w-full max-w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Qayerga</option>
                <option>Andijon</option>
                <option>Farg&#39;ona</option>
                <option>Namangan</option>
                <option>Toshkent</option>
                <option>Jizzah</option>
                <option>Sirdaryo</option>
                <option>Samarqand</option>
                <option>Buxoro</option>
                <option>Qashqadaryo</option>
                <option>Surxondaryo</option>
                <option>Xorazm</option>
                <option>Qoraqalpog&#39;iston Respublikasi</option>
              </select>
            </div>

            <div className="flex space-x-14 mb-6">
            <div>
            <label htmlFor="date" className="block font-semibold mb-1">
                Sanani tanlang
              </label>
              <input
                id="date"
                type="date"
                className="w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <div>
              <label htmlFor="passengers" className="block font-semibold mb-1">
                Yo&#39;lovchilar
              </label>
              <input
                id="passengers"
                type="number"
                placeholder="Yo'lovchilar soni"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
              </div>
            </div>

            <div className="flex space-x-14 ">
              <div>  
                <label htmlFor="payment" className="block font-semibold mb-1">
                Yo&#39;lovchi yoshi
              </label>
              <select
                id="payment-method"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Naqd</option>
                <option>Karta</option>
                <option>Mobil o&#39;tkazma</option>
              </select>
              </div>
              <div>
              <label htmlFor="payment" className="block font-semibold mb-1">
                To&#39;lov turi
              </label>
              <select
                id="payment-method"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Naqd</option>
                <option>Karta</option>
                <option>Mobil o&#39;tkazma</option>
              </select>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 shadow-md transition-all duration-300">
            Chipta olish
          </button>
        </div>

        <div className="bg-white w-[700px] p-6 rounded-lg shadow-md bg-opacity-55">
          <div className="">
            <div className="flex items-center mb-6 space-x-4">
              <select
                id="from"
                className="w-full max-w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Qayerdan</option>
                <option>Andijon</option>
                <option>Farg&#39;ona</option>
                <option>Namangan</option>
                <option>Toshkent</option>
                <option>Jizzah</option>
                <option>Sirdaryo</option>
                <option>Samarqand</option>
                <option>Buxoro</option>
                <option>Qashqadaryo</option>
                <option>Surxondaryo</option>
                <option>Xorazm</option>
                <option>Qoraqalpog&#39;iston Respublikasi</option>
              </select>

              <SyncAltIcon />

              <select
                id="to"
                className="w-full max-w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Qayerga</option>
                <option>Andijon</option>
                <option>Farg&#39;ona</option>
                <option>Namangan</option>
                <option>Toshkent</option>
                <option>Jizzah</option>
                <option>Sirdaryo</option>
                <option>Samarqand</option>
                <option>Buxoro</option>
                <option>Qashqadaryo</option>
                <option>Surxondaryo</option>
                <option>Xorazm</option>
                <option>Qoraqalpog&#39;iston Respublikasi</option>
              </select>
            </div>

            <div className="flex space-x-14 mb-6">
            <div>
            <label htmlFor="date" className="block font-semibold mb-1">
                Sanani tanlang
              </label>
              <input
                id="date"
                type="date"
                className="w-[300px] border rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <div>
              <label htmlFor="passengers" className="block font-semibold mb-1">
                Yo&#39;lovchilar
              </label>
              <input
                id="passengers"
                type="number"
                placeholder="Yo'lovchilar soni"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              />
              </div>
            </div>

            <div className="flex space-x-14 ">
              <div>  
                <label htmlFor="payment" className="block font-semibold mb-1">
                Yo&#39;lovchi yoshi
              </label>
              <select
                id="payment-method"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Naqd</option>
                <option>Karta</option>
                <option>Mobil o&#39;tkazma</option>
              </select>
              </div>
              <div>
              <label htmlFor="payment" className="block font-semibold mb-1">
                To&#39;lov turi
              </label>
              <select
                id="payment-method"
                className="w-[300px] border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              >
                <option>Naqd</option>
                <option>Karta</option>
                <option>Mobil o&#39;tkazma</option>
              </select>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 shadow-md transition-all duration-300">
            Chipta olish
          </button>
        </div>
</div>
      </main>
    </div>
  );
}
