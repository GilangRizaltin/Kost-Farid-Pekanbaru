import React from 'react';
import { useLocation } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            errorInfo: null,
            location: window.location.pathname // Store the current URL
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error:", error);
        console.error("Error Info:", errorInfo);
        
        // Update state with error details
        this.setState({ errorInfo });
    }

    sendErrorToWhatsApp = () => {
        const { location, errorInfo } = this.state;
        const phoneNumber = "628123456789"; // Replace with your IT Team's WhatsApp number
        const message = `🚨 *Error Report* 🚨%0A
        🔴 *Location:* ${location}%0A
        🔴 *Error Details:* ${errorInfo}%0A
        Please check and resolve this issue.`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");
    };

    render() {
        if (this.state.hasError) {
            console.log(this.state.errorInfo)
            return (
                <div id='modals' className='fixed z-40 bg-black/45 w-full h-full top-0 left-0 p-4 flex items-center justify-center'>
                    <div className='w-full md:w-[50%] desk:w-[25%] bg-white rounded-lg border-4 border-solid border-gray-300 p-4 flex flex-col gap-4'>
                        <h1 className='text-xl text-red-700 font-semibold'>Something went wrong.</h1>
                        <p>Try to refresh the page or contact the IT Team of Al Wafi.</p>
                        {/* <p className="text-sm text-gray-600">
                            <strong>Error Location:</strong> {this.state.location}
                        </p> */}
                        {/* <p className="text-sm text-gray-600">
                            <strong>Error Details:</strong> {this.state.errorInfo}
                        </p> */}
                        <button 
                            onClick={this.sendErrorToWhatsApp}
                            className='bg-green-600 w-fit px-4 py-2 rounded-md font-semibold text-white outline-none hover:bg-green-800 transition-all'
                        >
                            Send Error to IT Team via WhatsApp
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
