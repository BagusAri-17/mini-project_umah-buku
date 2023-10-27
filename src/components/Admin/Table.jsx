import React from 'react'

const Table = () => {
  return (
    <>
        <div className="relative overflow-x-auto mt-4 md:mt-8 rounded-md shadow">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-primary">
                <tr>
                    <th scope="col" className="px-6 py-3">
                    No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Author
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Genre
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b">
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                    <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                    1
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table