import { useEffect } from 'react';

export const useScroll = (...params) =>
{
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
}

  export const slicetext = (text , limit , max) => {
    return text.length>limit ? text.slice(0, max) + "..." : text
  }
    
  export const addLink = (items, url) => {
    return items.map((item) => {  
      return {
        ...item,
        link: decodeURIComponent(url),
      };
    });
  };
  

export const useEventListeners = (isOpen, events) => {
  useEffect(() => {
    if (isOpen) {
      events.forEach(event => {
        document.addEventListener(event.type, event.handler);
      });
    } else {
      events.forEach(event => {
        document.removeEventListener(event.type, event.handler);
      });
    }

    return () => {
      events.forEach(event => {
        document.removeEventListener(event.type, event.handler);
      });
    };
  }, [isOpen, events]);
};

export const handleClickOutside = (dropdownRef, event, functionsArray) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        functionsArray.map(func => func);
    }
};

export   const handleKeyDown = (event , func ) => {
    if (event.key === "Escape") {
      func
    }
}

export const toggle = (value  , func) => {
    func(!value);
};


export const change = (...params) => {
    return params.map(param => typeof param === 'function' ?  param() :  param)
}

