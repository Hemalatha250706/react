function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-8">

      <h1 className="text-5xl font-bold text-yellow-600 mb-8">
        Hello Tailwind CSS!
      </h1>

      <table className="border-collapse border border-gray-400 bg-white shadow-lg">
        <thead>
          <tr className="bg-yellow-400">
            <th className="border border-gray-400 px-6 py-3">ID</th>
            <th className="border border-gray-400 px-6 py-3">Name</th>
            <th className="border border-gray-400 px-6 py-3">Department</th>
            <th className="border border-gray-400 px-6 py-3">Mark</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-400 px-6 py-3">1</td>
            <td className="border border-gray-400 px-6 py-3">Hema</td>
            <td className="border border-gray-400 px-6 py-3">B.Sc CS</td>
            <td className="border border-gray-400 px-6 py-3">90</td>
          </tr>

          <tr className="bg-yellow-50">
            <td className="border border-gray-400 px-6 py-3">2</td>
            <td className="border border-gray-400 px-6 py-3">Priya</td>
            <td className="border border-gray-400 px-6 py-3">BCA</td>
            <td className="border border-gray-400 px-6 py-3">85</td>
          </tr>

          <tr>
            <td className="border border-gray-400 px-6 py-3">3</td>
            <td className="border border-gray-400 px-6 py-3">Divya</td>
            <td className="border border-gray-400 px-6 py-3">B.Sc IT</td>
            <td className="border border-gray-400 px-6 py-3">95</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default App