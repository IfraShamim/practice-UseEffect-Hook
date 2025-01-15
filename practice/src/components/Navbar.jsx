import React, { useEffect, useState } from 'react';

function Navbar({ color: initialColor }) { // Renamed destructured prop to avoid conflict
  const [color, setColor] = useState(initialColor); // Use the prop to initialize state

  // Case#01: Run on every render.
  useEffect(() => {
    alert("I will run on every render.");
  });

  // Case#02: Run only on first render.
  useEffect(() => {
    alert("Run only on first render.");
  }, []);

  // Case#03: Run only when certain values changed.
  useEffect(() => {
    alert("Hey! I am running because color was changed.");
  }, [color]);

  return (
    <div>I am a navbar of {color} color.</div>
  );
}

export default Navbar;
