import React, { useState, useEffect } from 'react';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.offline);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div>
      <h1>Online Status: {isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default App;
