import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="bg-bgray-dropdown">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <div className="flex items-center space-x-4"> 
            <img src="/logo.png" className="w-8 h-8"/>
            <p className="text-white text-sm text-center sm:text-left">
                Copyright © 2023 BloodyARK. All Rights Reserved.
            </p>
            <a href="/privacy-policy" className="text-white text-sm text-center sm:text-left">Privacy Policy</a>
        </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-4 items-center">
            <img src="/Nitrado_Logo_yellow_TextToTheSide_white_border.png" className="h-8"/>
            <Link  href="https://discord.gg/bloody" className="text-gray-200">
              <i className="fa-brands fa-discord" />
            </Link>
            <Link href="/" className="ml-3 text-gray-200">
              <i className="fa-brands fa-steam" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
