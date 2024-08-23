'use client'
import { useStore } from "@/app/store/useStore"
import Image from "next/image";

export const Profile = () => {
    const { currentUser } = useStore();
    const createdAt = currentUser?.createdAt ? new Date(currentUser?.createdAt) : new Date();
    const MemberFrom = new Date(createdAt).toLocaleDateString();
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-5xl font-bold">Bancool</h2>
            <p className="text-xl font-bold text-gray-600">Welcome to the best digital bank</p>
            <p className="text-gray-500">Here, you can see the current information in the bank</p>
            <div className="shadow-lg w-full grid grid-cols-2 mt-10 rounded-md">
                <div className="p-20 space-y-4">
                    <h2 className="text-center font-bold text-xl text-indigo-500">Account Details</h2>
                    <ul className="space-y-2">
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Names</span>
                            <span className="text-gray-800">{currentUser?.names}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Lastnames</span>
                            <span className="text-gray-800">{currentUser?.lastnames}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Email</span>
                            <span className="text-gray-800">{currentUser?.email}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Phone</span>
                            <span className="text-gray-800">{currentUser?.phone}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Address</span>
                            <span className="text-gray-800">{currentUser?.address}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Client Type</span>
                            <span className="text-gray-800">{currentUser?.clientType}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Member From</span>
                            <span className="text-gray-800">{MemberFrom}</span>
                        </li>
                        <li className="border border-gray-200 rounded p-2 flex justify-between items-center">
                            <span className="text-gray-500">Account Status</span>
                            <span className="text-gray-800">{currentUser?.status}</span>
                        </li>
                    </ul>
                    <p className="text-center text-gray-500 font-bold">For more information, call us!</p>
                    <div className="flex justify-between items-center p-2 rounded-md border border-gray-200">
                        <p>Generate bank statements</p>
                        <button className="bg-pink-500 rounded-md text-white p-2 hover:bg-pink-600">Generate</button>
                    </div>
                </div>
                <div>
                    <Image src="/images/LoginImage.webp" alt="profile" width={500} height={500} className="w-full rounded-md" />
                </div>
            </div>
        </div>
    )
}