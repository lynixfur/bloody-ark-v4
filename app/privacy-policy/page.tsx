import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Bloody ARK - Privacy Policy',
  description: 'Bloody ARK Web Privacy Policy',
}
const Hub = () => {
    return (
        <div className="mt-20 bg-bgray-bg min-h-screen p-10 w-1/2">
            <h1 className="text-4xl font-semibold mb-5">Privacy Policy</h1>
            <p>Last updated: Janurary 10, 2024</p>
            <br/><br/>
            <p>Thank you for using our services! This Privacy Policy explains how we collect, use, and protect your information when you use our website and related services.<br/> By accessing or using our services, you agree to the terms outlined in this policy.</p>
            <h3 className="text-3xl mt-5">1. Collection of Information:</h3>
            <h2 className='text-xl mt-3'>a. In-Game Data:</h2>
            <p className='mt-2'>We collect data from your in-game activities, such as Tribe Management, Dino Management, and various in-game stats. This information is used to provide you with features on our website and enhance your overall gaming experience</p>
            <h2 className='text-xl mt-3'>b. Steam Profile Data:</h2>
            <p className='mt-2'>To facilitate your login process and connect your in-game data to your account, we collect information from your Steam Profile. This data is also stored for the purpose of associating in-game activities with the respective user accounts on our platform.</p>
            <h3 className="text-3xl mt-5">2. Use of Information:</h3>
            <h2 className='text-xl mt-3'>a. In-Game Data:</h2>
            <p className='mt-2'>Your in-game data is utilized to enable and enhance features on our website, including Tribe Management, Dino Management, and in-game stats display.</p>
            <h2 className='text-xl mt-3'>b. Steam Profile Data:</h2>
            <p className='mt-2'>We use your Steam Profile data to authenticate your identity and facilitate the login process on our website and Bloody Hub. No Steam Login information is stored on our servers, and any personal identifiable information (PII) is never stored or processed.</p>
            <h3 className="text-3xl mt-5">3. Data Security:</h3>
            <p className='mt-2'>We employ industry-standard security measures to safeguard your information from unauthorized access, disclosure, alteration, and destruction.</p>
            <h3 className="text-3xl mt-5">4. Data Retention:</h3>
            <p className='mt-2'>We retain your in-game and Steam Profile data for as long as necessary to fulfill the purposes outlined in this Privacy Policy. If you wish to delete your account or request data removal, please contact us at support@bloody.gg.</p>
            <h3 className="text-3xl mt-5">5. Third-Party Sharing:</h3>
            <p className='mt-2'>We do not sell your data to third parties. Your information is treated with utmost confidentiality, and we only share it as necessary to provide our services or as required by law.</p>
            <h3 className="text-3xl mt-5">6. Cookies:</h3>
            <p className='mt-2'>We use minimal and necessary cookies to ensure the functionality of our website. These cookies may log your browser type and IP address when visiting this website.</p>
            <h3 className="text-3xl mt-5">7. Updates to Privacy Policy:</h3>
            <p className='mt-2'>We may update this Privacy Policy to reflect changes in our practices. Please review this policy periodically for any updates.</p>
            <h3 className="text-3xl mt-5">8. Contact Information:</h3>
            <p className='mt-2'>If you have any questions, concerns, or requests regarding your privacy, please contact us at support@bloody.gg.</p>

            <br/><br/>

            <p className="font-bold">By using our services, you acknowledge and consent to the practices described in this Privacy Policy.</p>
            
        </div>
    )
}
export default Hub;