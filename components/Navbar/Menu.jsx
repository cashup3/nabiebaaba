import { useSpring, a } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback } from "react";

const Menu = ({ open, onOutsideClick, onLinkClick }) => {
  const ref = useRef();
  const timeoutRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const justOpenedRef = useRef(false);
  
  const handleChildClick = useCallback((event) => {
    // Ignore clicks immediately after opening (to avoid closing on the opening click)
    if (justOpenedRef.current) {
      return;
    }
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick(event);
    }
  }, [onOutsideClick]);

  useEffect(() => {
    if (open) {
      // Small delay to ignore the click that opened the menu
      justOpenedRef.current = true;
      const timer = setTimeout(() => {
        justOpenedRef.current = false;
      }, 100);
      
      document.addEventListener("click", handleChildClick);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleChildClick);
        // Cleanup timeout if component unmounts
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      justOpenedRef.current = false;
      return () => {
        // Cleanup timeout if component unmounts
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [open, handleChildClick]);

  const [contents, contentsApi] = useSpring(() => ({
    from: { y: 100, opacity: 0, transform: "rotate(20deg)" },
  }));

  const [news, newsApi] = useSpring(() => ({
    from: { y: 100, opacity: 0, transform: "rotate(-20deg)" },
  }));
  
  const [hidden, setHidden] = useState(!open);
  
  useEffect(() => {
    // Cleanup previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (open === false) {
      // Hide menu after animation completes (500ms)
      timeoutRef.current = setTimeout(() => {
        setHidden(true);
      }, 500);
    } else {
      // Show menu immediately when opening
      setHidden(false);
    }

    contentsApi.start({
      y: open ? 0 : 100,
      opacity: open ? 1 : 0,
      transform: open ? `rotate(0deg)` : `rotate(20deg)`,
    });

    newsApi.start({
      y: open ? 0 : 100,
      opacity: open ? 1 : 0,
      transform: open ? `rotate(0deg)` : `rotate(-20deg)`,
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, contentsApi, newsApi]);

  return (
    <>
      {!hidden && (
        <div
          className="absolute top-[4rem] right-0 w-[calc(100vw-2rem)] lg:w-[20rem] max-w-[20rem]"
          ref={ref}
        >
          {/* Contents */}
          <a.div
            className="rounded-xl bg-white dark:bg-gray-800 flex flex-col font-Aeonik text-2xl lg:text-3xl p-6 lg:p-8 text-gray-900 dark:text-white"
            style={contents}
          >
            <div className="flex justify-between pb-3">
              <Link href="/" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">HOME</Link>
              <div>•</div>
            </div>
            <div className="py-3">
              <Link href={"/about"} onClick={onLinkClick} className="hover:opacity-70 transition-opacity">ABOUT US</Link>
            </div>
            <div className="py-3">
              <Link href="/services" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">SERVICES</Link>
            </div>
            <div className="pt-3">
              <Link href="/contact" onClick={onLinkClick} className="hover:opacity-70 transition-opacity">CONTACT</Link>
            </div>
          </a.div>

          {/* Newsletter */}
          <a.div
            className="rounded-xl bg-white dark:bg-gray-800 flex flex-col p-6 lg:p-8 my-2 text-gray-900 dark:text-white"
            style={news}
          >
            <div className="font-Aeonik text-2xl lg:text-4xl ">
              Subscribe to our newsletter
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email.trim()) {
                  setMessage({ type: 'error', text: 'Please enter your email' });
                  return;
                }

                setIsSubmitting(true);
                setMessage({ type: '', text: '' });

                try {
                  const response = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email.trim() }),
                  });

                  const data = await response.json();

                  if (response.ok) {
                    setMessage({ type: 'success', text: data.message || 'Successfully subscribed!' });
                    setEmail('');
                    // Clear message after 3 seconds
                    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
                  } else {
                    setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' });
                  }
                } catch (error) {
                  setMessage({ type: 'error', text: 'Failed to subscribe. Please try again later.' });
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="mt-6"
            >
              <div className="flex justify-between bg-[#F0F1FA] dark:bg-gray-700 p-3 lg:p-4 rounded-xl text-[#BEBFC7] dark:text-gray-300 text-lg lg:text-xl">
                <label className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    disabled={isSubmitting}
                    className="bg-[#F0F1FA] dark:bg-gray-700 dark:text-white w-full outline-none disabled:opacity-50"
                  />
                </label>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-shrink-0 ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-[30px] h-[30px] border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Image
                      src={"/arrow-right.svg"}
                      width={30}
                      height={30}
                      alt="right-arrow"
                    />
                  )}
                </button>
              </div>
              {message.text && (
                <div className={`mt-3 text-sm ${
                  message.type === 'success' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {message.text}
                </div>
              )}
            </form>
          </a.div>
        </div>
      )}
    </>
  );
};

export default Menu;
