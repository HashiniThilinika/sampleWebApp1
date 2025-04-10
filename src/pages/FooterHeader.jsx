import React from "react";

const FooterHeader = () => (
    <div className="text-white px-4 py-8 ml-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="items-left">
                <h1 className="text-3xl font-bold text-left">Weekly Newsletter</h1>
                <p className="text-left text-xs mt-4 mb-2">There are many variations of passages of lorem ipsum available.</p>
            </div>
            <div className="mt-4 gap-2">
                <input
                    type="email"
                    placeholder="Enter Your Mail"
                    className="p-2 border rounded-l"
                />
                <button className="bg-orange-500 text-white p-2 rounded-r">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
);

export default FooterHeader;