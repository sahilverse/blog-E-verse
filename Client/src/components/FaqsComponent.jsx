import React, { useRef, useState } from "react";

const FaqsComponent = () => {
    const faqsList = [
        {
            q: "What is Blog-E-verse?",
            a: "Blog-E-verse is a platform where you can create, publish, and promote your blog posts. It is a user-friendly platform that allows you to share your voice, connect with readers, and build a community around your passion, expertise, and interests."
        },
        {
            q: "How do I get started with Blog-E-verse?",
            a: "To get started with Blog-E-verse, simply create an account on our platform. Once you have created an account, you can start creating, publishing, and promoting your blog posts. It's that easy!"
        },
        {
            q: "Is Blog-E-verse free to use?",
            a: "Yes, Blog-E-verse is free to use. You can create an account and start using our platform at no cost. However, we also offer premium features and services that you can upgrade to if you choose."
        },
        {
            q: "Can I connect with other bloggers on Blog-E-verse?",
            a: "Yes, you can connect with other bloggers on Blog-E-verse. Our platform allows you to follow other bloggers, comment on their posts, and engage with them in a variety of ways. You can also join groups and communities to connect with like-minded individuals."
        },
        {
            q: "How can I promote my blog posts on Blog-E-verse?",
            a: "There are several ways to promote your blog posts on Blog-E-verse. You can share your posts on social media, engage with other bloggers, participate in groups and communities, and use our built-in promotion tools to reach a wider audience. The more you engage with our platform, the more visibility your posts will receive."
        },
        {
            q: "Can I monetize my blog on Blog-E-verse?",
            a: "Yes, you can monetize your blog on Blog-E-verse. We offer several monetization options, including ad revenue sharing, sponsored posts, affiliate marketing, and more. You can also sell digital products, courses, and services directly to your audience through our platform."
        },
        {
            q: "Is Blog-E-verse suitable for beginners?",
            a: "Yes, Blog-E-verse is suitable for beginners. Our platform is designed to be user-friendly and intuitive, making it easy for anyone to create, publish, and promote their blog posts. We also offer a variety of resources, tutorials, and support to help you get started and grow your blog."
        },
        {
            q: "How can I contact Blog-E-verse for support?",
            a: "If you have any questions or need assistance, you can contact our support team at any time. You can reach us by email, phone, or live chat, and we will be happy to help you with any issues or concerns you may have. Your success is our top priority, and we are here to support you every step of the way."
        }
    ];

    const FaqsCard = ({ faqsList, idx }) => {
        // Create a reference to the answer element
        const answerElRef = useRef();

        // Set up state variables for toggling the answer visibility and height
        const [state, setState] = useState(false);
        const [answerH, setAnswerH] = useState('0px');

        // Function to handle opening/closing the answer
        const handleOpenAnswer = () => {
            // Get the height of the answer element
            const answerElH = answerElRef.current.childNodes[0].offsetHeight;

            // Toggle the state and set the height of the answer element
            setState(!state);
            setAnswerH(`${answerElH + 20}px`);
        };

        return (
            <div
                className="space-y-3 mt-5 overflow-hidden border-b"
                key={idx}
                onClick={handleOpenAnswer}
            >
                <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium font-poppins">
                    {faqsList.q}
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )
                    }
                </h4>
                <div
                    ref={answerElRef} className="duration-300"
                    style={state ? { height: answerH } : { height: '0px' }}
                >
                    <div>
                        <p className="text-gray-500 text-justify font-roboto">
                            {faqsList.a}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="leading-relaxed max-w-screen-xl lg:mt-40 mx-auto px-4 md:px-8 mt-16" id="faqs">
            <div className="space-y-3 text-center">
                <h1 className="text-xl sm:text-3xl md:mr-0 md:text-4xl font-bold text-orange md:text-center whitespace-nowrap font-poppins mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto   desc text-sm sm:text-base leading-relaxed font-roboto">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-20 max-w-2xl mx-auto mb-20">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default FaqsComponent;
