export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-10 py-5 bg-brandDark text-white">
            {/* Brand */}
            <h1 className="text-2xl font-bold text-brandGold">Perf</h1>

            {/* Links */}
            <ul className="hidden md:flex gap-8 text-sm">
                <li className="hover:text-brandGold cursor-pointer">Home</li>
                <li className="hover:text-brandGold cursor-pointer">Shop</li>
                <li className="hover:text-brandGold cursor-pointer">Category</li>
                <li className="hover:text-brandGold cursor-pointer">About</li>
                <li className="hover:text-brandGold cursor-pointer">Contact</li>
            </ul>

            {/* Actions */}
            <button className="border border-brandGold px-4 py-1 rounded hover:bg-brandGold hover:text-black">
                Cart
            </button>
        </nav>
    );
}
